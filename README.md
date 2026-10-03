# ACC Dedicated Server AdminPanel · Landing page

Landing estática de [ACC Dedicated Server AdminPanel](https://github.com/PytricioPUCV/ACC-Dedicated-Server-AdminPanel).
Solo HTML, CSS y JavaScript vanilla: sin frameworks, sin build step, sin dependencias ni fuentes externas.

```
index.html        Página (contenido estático en español)
css/style.css     Estilos (paleta en variables :root)
js/main.js        Idioma ES/EN, menú móvil, botón Copiar, animaciones y capturas
assets/           Favicon y capturas (ver assets/README.txt)
robots.txt
sitemap.xml
```

## Abrirla en local

- **Doble clic en `index.html`.** Funciona directamente desde el disco.
- **Con un servidor local** (recomendado para probar el botón Copiar y el guardado del idioma):

  ```bash
  python -m http.server 8000
  ```

  Ejecútalo dentro de esta carpeta y abre <http://localhost:8000>.

## Reemplazar las capturas

1. Haz las capturas del panel en 16:9 (recomendado 1600x900).
2. Guárdalas en `assets/` con los nombres exactos de `assets/README.txt`
   (por ejemplo `assets/captura-entrylist.png`).
3. Recarga la página: el bloque "Captura pendiente" desaparece solo cuando la imagen existe.

Cada imagen está marcada en `index.html` con un comentario como este:

```html
<!-- CAPTURA: ENTRY LISTS AQUI → reemplazar src por assets/captura-entrylist.png -->
```

Si cambias el formato (por ejemplo a `.webp`), actualiza el `src` de esa imagen.
Para la vista previa en redes sociales, añade `assets/og-image.png` (1200x630).

## Idiomas

El HTML contiene el texto en español para que los buscadores indexen esa versión.
Las traducciones están en el objeto `I18N` de `js/main.js`; cada elemento traducible usa:

- `data-i18n="clave"` para texto plano,
- `data-i18n-html="clave"` para texto con `<code>`, `<strong>` o enlaces,
- `data-i18n-attr="alt:clave"` (o `aria-label:clave`) para atributos.

Si cambias un texto en `index.html`, cambia también la entrada `es` del diccionario.

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz de un repositorio (o a una carpeta `docs/`).
2. En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Elige la rama (`main`) y la carpeta (`/ (root)` o `/docs`) y guarda.
4. Tras uno o dos minutos la web estará en `https://<usuario>.github.io/<repositorio>/`.

Después, sustituye `https://TU-DOMINIO.com/` por la URL definitiva en:

- `index.html`: `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image` y el JSON-LD (`url`, `image`).
- `sitemap.xml` y `robots.txt`.

Si usas un dominio propio, configúralo en **Settings → Pages → Custom domain**.

## Aviso

Assetto Corsa Competizione es una marca registrada de Kunos Simulazioni S.r.l. y Digital Bros S.p.A.
Este proyecto es independiente y no está afiliado a ellas.
