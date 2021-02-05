# Webfont - Andes Desing Icons

Webfont distribution for the [Andes Design Icons](https://www.andes.gob.ar).

```
npm install @andes/icons
```

## Usage

Add in style.scss:

```
$adi-font-path: '~@andes/icons/fonts/';
@import '~@andes/icons/scss/andes-icons';
```

```
<i class="adi adi-rup-semantic-plan">
```

## Add new icon

1. Install docker

2. `npm run server`: Start fontello server and open a web page with font config loaded.

3. add icons, change settings, etc.

4. Donwload config.json and replace it.

5. `npm run build`

6. commit and push changes.

7. npm publish (logueado con cuenta autenticada en npm).
