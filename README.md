# Finca Navas — sitio web

Sitio estático (HTML/CSS/JS, sin build). Listo para Vercel.

```
index.html            ← página principal + datos estructurados (Schema.org)
assets/css/styles.css ← sistema visual (cream / negro / violeta, radios 20px)
assets/js/main.js     ← menú móvil
assets/fonts/         ← Anton + Inter alojadas localmente
assets/img/           ← FOTOS VAN AQUÍ
robots.txt            ← permite Google + bots de IA (GPTBot, PerplexityBot, ClaudeBot…)
sitemap.xml           ← mapa del sitio para Google
llms.txt              ← resumen de la finca para buscadores de IA
vercel.json           ← caché y URLs limpias
```

## 1. Reemplazar antes de publicar (buscar y reemplazar en TODOS los archivos)

| Marcador              | Reemplazar por                        |
|-----------------------|---------------------------------------|
| `50760000000`         | WhatsApp sin + ni guiones (ej. 50761234567) |
| `+507-6000-0000` / `+507 6000-0000` | teléfono formateado      |
| `contacto@fincanavas.com` | correo real                       |
| `fincanavas` (IG / TikTok) | usuario real de cada red          |
| `fincanavas.com`      | dominio comprado                      |
| ~~coordenadas~~ | ✅ ya configuradas (8.652317, -80.354509) |
| Horario 7:00–17:00    | horario real                          |

## 2. Fotos (lo que más pesa para Google e IA)

Subir a `assets/img/` con estos nombres exactos (JPG, ~200–400 KB, fotos reales, no de stock):

- `hero.jpg` — paisaje de la finca, horizontal, 2400×1400
- `lechones.jpg` — lechones, 1200×900
- `name.jpg` — ñame cosechado, 1200×900
- `token.jpg` — miniatura (finca, familia o un lechón), 400×300
- `og-cover.jpg` — imagen al compartir el link en WhatsApp/redes, 1200×630

Si falta una foto se muestra un degradado de respaldo; nada se rompe.

## 3. Publicar en Vercel

1. Crear repo en GitHub (ej. `finca-navas-web`) y subir esta carpeta.
2. Vercel → Add New Project → importar repo → Framework: **Other** → Deploy.
3. Comprar dominio (`fincanavas.com` o `fincanavas.com.pa`) y en Vercel → Settings → Domains agregarlo.

## 4. Escalar

Para nuevas páginas (ej. `/lechones`, `/name`, `/blog/...`): copiar `index.html`, cambiar `<title>`, `description`, `canonical`, contenido, y agregar la URL a `sitemap.xml`. Mismo CSS para todo.
