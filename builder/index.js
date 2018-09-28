const https = require('https');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const fileReg = /https:\/\/file\.myfontastic\.com\/ixrqMaXeHbDr6dWB499j76\/fonts\/([0-9]*)\.eot/;
const nameReg = /\.andes\-(.*)\:before\ \{/;
const contentReg = /content: \"\\(.*)\"/;

const projectId = 'ixrqMaXeHbDr6dWB499j76';
const url = 'https://file.myfontastic.com/ixrqMaXeHbDr6dWB499j76/icons.css';

function test(reg, line) {
    let match = line.match(reg);
    if (match) {
        return match[1];
    }
    return null;
}



let fileId = null;
let name = null;
let content = null;
let icons = {}; 

https.get(url, (res) => {
    const rl = readline.createInterface({
        input: res
    });
    rl.on('line', (line) => {
        if (!fileId) {
            fileId = test(fileReg, line);
        } else { 
            if (!name) {
                name = test(nameReg, line);
            } else {
                content = test(contentReg, line);

                if (name && content) {
                    // icons.push({ name, content });
                    icons[name] = content;
                }
                name = content = null;

            }
        }
    });

    rl.on('close', () => {
        console.log(icons);

        ['eot', 'woff', 'svg', 'ttf'].forEach((ext) => {
            let url = `https://file.myfontastic.com/ixrqMaXeHbDr6dWB499j76/fonts/${fileId}.${ext}`;
            https.get(url, (res) => {
                let writeStream = fs.createWriteStream(path.join(__dirname, '..', 'fonts', 'andes.font.' + ext));
                res.pipe(writeStream);
            });
        });

        let iconsF = fs.createWriteStream(path.join(__dirname, '..', 'scss', '_var-icons.scss'));
        iconsF.write('$adi-icons: (\n');
        for (const name in icons) {
            iconsF.write(`     "${name}": ${icons[name]},\n`);
        }
        iconsF.write(');\n');

        let iconsJson = fs.createWriteStream(path.join(__dirname, '..', 'icons.json'));
        iconsJson.write(JSON.stringify(icons, null, 2));
        iconsJson.end();

    });

});
