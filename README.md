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

0. Diseñar los íconos [siguiendo esta guía](https://github.com/fontello/fontello/wiki/How-to-use-custom-images#importing-svg-images)

1. Instalar docker

2. `npm run server`: Correr Fontello en el navegador (se abre automáticamente).

3. Agregar íconos, cambiar configuraciones, etc.

4. Descargar el archivo config.json y reemplazarlo en la raíz de proyecto.

5. Incrementar la versión `package.json`. Por ejemplo: `"version": "1.1.17"`.

6. `git tag [NUEVA VERSION]`: Crear un tag con la versión, tiene que ser la misma que en `package.json`. Por ejemplo: `git tag 1.1.17`

7. Hacer `commit` y `push` de los cambios.

8. `npm run build`: Regenerar todo el paquete de íconos.

9. `npm login` (usando las credenciales de Andes)

10. `npm publish`
