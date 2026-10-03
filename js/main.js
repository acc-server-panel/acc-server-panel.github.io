/* ACC Dedicated Server AdminPanel · Landing
   i18n ES/EN sin librerías, menú móvil, copiar ruta, animaciones de entrada y fallback de capturas. */
(function () {
  "use strict";

  var STORAGE_KEY = "acc-adminpanel-lang";
  var DEFAULT_LANG = "es";

  var I18N = {
    es: {
      "meta.title": "ACC Server Manager: administrador de servidor ACC con interfaz gráfica | ACC AdminPanel",
      "meta.description": "Administrador de servidor ACC gratuito y open source: una Assetto Corsa Competizione dedicated server GUI para configurar servidor dedicado ACC. Editor de event.json / settings.json, entry list ACC, clima y rotación automática de pistas.",
      "meta.ogImageAlt": "ACC Dedicated Server AdminPanel: panel web para administrar servidores de Assetto Corsa Competizione",

      "skip": "Saltar al contenido",
      "brand.home": "ACC AdminPanel, ir al inicio",
      "nav.label": "Navegación principal",
      "nav.features": "Funciones",
      "nav.screens": "Capturas",
      "nav.start": "Cómo empezar",
      "nav.faq": "FAQ",
      "nav.download": "Descargar v1.1",
      "nav.open": "Abrir menú",
      "nav.close": "Cerrar menú",
      "lang.label": "Idioma",

      "hero.eyebrow": "Assetto Corsa Competizione · Dedicated server GUI",
      "hero.title": "Administra tu servidor dedicado de ACC sin tocar un solo JSON",
      "hero.lead": "Un administrador de servidor ACC con interfaz web para admins de liga y de servidores públicos: configura sesiones, clima, entry list y contraseñas desde formularios, rota circuitos al terminar cada carrera y sigue a la parrilla en tiempo real. Cada archivo se guarda en UTF-16 LE con BOM, tal como lo espera accServer.",
      "hero.download": "Descargar v1.1",
      "hero.repo": "Ver Repositorio",
      "hero.badges": "Requisitos y licencia",
      "badge.windows": "Windows 10/11",
      "badge.mit": "Open Source MIT",
      "badge.python": "Sin instalación de Python",
      "screen.live": "EN VIVO",

      "spec.tracks": "circuitos oficiales en el catálogo de rotación",
      "spec.encoding": "con BOM en cada cfg/*.json que escribe el panel",
      "spec.exe": "sin Python, sin instalador, sin dependencias",
      "spec.mit": "código abierto en GitHub",

      "ps.kicker": "Por qué existe",
      "ps.title": "Configurar un servidor dedicado de ACC a mano es frágil",
      "ps.lead": "accServer.exe no tiene interfaz: todo vive en la carpeta cfg, en archivos JSON con un formato estricto. Un detalle mal guardado y la sesión de tu liga no sale a pista.",
      "ps.manual.title": "Editando JSON a mano",
      "ps.manual.1": "<strong>Codificación:</strong> el servidor espera <code>UTF-16 LE</code> con BOM. Muchos editores guardan en UTF-8 sin avisar y accServer deja de leer bien la configuración.",
      "ps.manual.2": "<strong>Sintaxis:</strong> una coma de más o una comilla sin cerrar en <code>event.json</code> y el servidor no arranca o ignora tus cambios justo antes de la carrera.",
      "ps.manual.3": "<strong>Sin rotación de pistas:</strong> el servidor oficial corre siempre el circuito definido en <code>event.json</code>. Cambiar de pista es editar el archivo y relanzar el servidor a mano.",
      "ps.manual.4": "<strong>A ciegas:</strong> saber quién está en pista implica leer la consola o <code>server.log</code>, que puede ir minutos por detrás.",
      "ps.panel.title": "Con AdminPanel",
      "ps.panel.1": "Formularios que generan JSON válido y lo guardan siempre en <code>UTF-16 LE</code> con BOM.",
      "ps.panel.2": "Arranca, detén y reinicia <code>accServer.exe</code> desde el navegador.",
      "ps.panel.3": "Rotación automática: al terminar la carrera final del evento aplica la siguiente pista y relanza el servidor.",
      "ps.panel.4": "Pilotos conectados y consola en tiempo real, con el spam de <code>onCarUpdate</code> filtrado.",

      "feat.kicker": "Funciones",
      "feat.title": "Todo lo que tu servidor necesita, en un solo panel",
      "feat.lead": "Herramientas pensadas para el día de carrera de una liga: preparar el evento, controlar la parrilla y pasar al siguiente circuito sin abrir el Bloc de notas.",
      "f1.title": "Configuración del servidor",
      "f1.text": "Nombre del servidor en el lobby, contraseña de acceso y de admin, plazas, grupo de coches, bloqueo de la sesión de carrera y duración de práctica, clasificación y carrera. Las contraseñas nunca se devuelven al navegador.",
      "f2.title": "Entry lists y administradores",
      "f2.text": "Revisa la entry list de tu liga, quita pilotos, marca quién es administrador y activa forceEntryList para correr con una whitelist estricta.",
      "f3.title": "Clima y condiciones de sesión",
      "f3.text": "Temperatura ambiente, nubosidad, nivel de lluvia y aleatoriedad del clima: desde una carrera seca y estable hasta clima dinámico que obligue a pensar la estrategia de neumáticos.",
      "f4.title": "Físicas y ayudas a la conducción",
      "f4.text": "Decide qué assists permite tu servidor, como el control de estabilidad o la línea ideal, sin riesgo de romper el formato del archivo.",
      "f5.title": "Rotación automática de pistas",
      "f5.text": "Catálogo de los 25 circuitos oficiales agrupados por DLC. Al terminar la carrera, el panel aplica la siguiente pista de la rotación y relanza el servidor.",
      "f6.title": "Pilotos, consola y moderación",
      "f6.text": "Pilotos conectados con dorsal, coche y Steam ID, aviso de lag, consola del servidor en tiempo real y moderación: administradores y lista de baneos.",
      "f7.title": "Historial de carreras y récords",
      "f7.text": "Lee los resultados que guarda el servidor para mostrar el historial de sesiones y los récords de vuelta de cada circuito.",
      "f8.title": "Acceso web protegido por token",
      "f8.text": "Por defecto el panel solo escucha en tu propio PC. Con <code>--lan</code> lo abres desde otro equipo de tu red; en ambos casos se entra con un token de acceso.",

      "d1.kicker": "Rotación de pistas",
      "d1.title": "Un calendario que se corre solo",
      "d1.text": "accServer no cambia de circuito por sí mismo. AdminPanel vigila los resultados y, cuando termina la carrera final del evento, escribe la siguiente pista en event.json y relanza el servidor. Los fines de semana con varias carreras se respetan.",
      "d1.li1": "Activa o desactiva DLC completos o circuitos sueltos.",
      "d1.li2": "Presets: todos los circuitos, solo juego base o solo DLC.",
      "d1.li3": "Salta a la siguiente pista o elige una manualmente.",
      "d1.catalog": "Catálogo de rotación",
      "dlc.base": "Juego base",
      "d2.kicker": "En vivo",
      "d2.title": "La parrilla en tiempo real, no minutos después",
      "d2.text": "El panel lanza accServer dentro de una pseudoconsola de Windows y lee cada línea al instante, en vez de esperar a que server.log se vuelque a disco. Conexiones, desconexiones, timeouts y cambios de sesión aparecen en segundos.",
      "d2.li1": "Dorsal, modelo de coche y Steam ID de cada piloto.",
      "d2.li2": "Aviso de LAG cuando llegan paquetes UDP con retraso.",
      "d2.li3": "Consola con filtro del spam de onCarUpdate.",
      "d3.kicker": "Configuración",
      "d3.title": "Del formulario al archivo correcto",
      "d3.text": "Cada cambio se valida en el formulario y se escribe en el JSON que corresponde, con la codificación que exige accServer. Tus contraseñas no viajan de vuelta al navegador: el panel solo indica si están definidas.",
      "d3.li1": "settings.json, event.json y assistRules.json desde un mismo sitio.",
      "d3.li2": "Duración de práctica, clasificación y carrera.",
      "d3.li3": "Clima, plazas y grupo de coches sin buscar claves en la documentación.",

      "gallery.kicker": "Capturas",
      "gallery.title": "Así se ve el panel",
      "gallery.lead": "Interfaz oscura estilo Race Control, pensada para tenerla abierta en un segundo monitor durante el evento.",
      "gallery.players": "Pilotos en vivo y moderación",
      "gallery.console": "Consola del servidor en tiempo real",
      "shot.pending": "Captura pendiente",
      "shot.hero.alt": "Panel principal de ACC Dedicated Server AdminPanel con el estado del servidor, el circuito activo y los récords de vuelta",
      "shot.config.alt": "Formulario de configuración del servidor con nombre, contraseñas, plazas y duración de las sesiones",
      "shot.entry.alt": "Tabla de la entry list con pilotos autorizados y administradores del servidor",
      "shot.weather.alt": "Ajustes de temperatura ambiente, nubosidad, lluvia y aleatoriedad del clima",
      "shot.assists.alt": "Opciones de ayudas a la conducción con control de estabilidad y línea ideal",
      "shot.rotation.alt": "Catálogo de circuitos de ACC agrupados por DLC con la rotación automática activa",
      "shot.players.alt": "Lista de pilotos conectados con dorsal, coche, Steam ID y acciones de moderación",
      "shot.console.alt": "Consola del servidor en tiempo real con líneas coloreadas y filtro de spam",
      "shot.history.alt": "Historial de sesiones y récords de vuelta por circuito",
      "shot.access.alt": "Ventana de ACC_AdminPanel.exe con la dirección del panel y el token de acceso enmascarado",

      "start.kicker": "Cómo empezar",
      "start.title": "En pista en cuatro pasos",
      "start.lead": "Sin instalador ni dependencias: el ejecutable incluye todo lo necesario.",
      "step1.title": "Descarga el zip",
      "step1.text": "Baja <code>ACC_Server_AdminPanel_v1.1.zip</code> desde la página de releases de GitHub y descomprímelo.",
      "step2.title": "Colócalo en la carpeta server",
      "step2.text": "Copia <code>ACC_AdminPanel.exe</code> dentro de la carpeta <code>server</code> del servidor dedicado de ACC, junto a <code>accServer.exe</code>.",
      "step3.title": "Ejecútalo y acepta UAC",
      "step3.text": "Haz doble clic y acepta el aviso de Control de cuentas de usuario: el panel necesita permisos de administrador para escribir en Program Files y gestionar accServer.exe.",
      "step4.title": "Abre el panel",
      "step4.text": "El navegador se abre solo con el panel y la sesión iniciada. Arranca el servidor con el botón Iniciar para ver a los pilotos en tiempo real.",
      "path.label": "Ruta típica del servidor dedicado en Steam",
      "path.copy": "Copiar",
      "path.copied": "Copiado",
      "path.copyLabel": "Copiar la ruta al portapapeles",
      "path.copyDone": "Ruta copiada al portapapeles.",
      "path.copyFail": "No se pudo copiar. Selecciona la ruta y cópiala con Ctrl+C.",
      "path.tip": "¿Aún no tienes el servidor? Instálalo desde Steam: <strong>Biblioteca → Herramientas → Assetto Corsa Competizione Dedicated Server</strong>.",

      "faq.kicker": "FAQ",
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿Necesito instalar Python?",
      "faq.a1": "No. ACC_AdminPanel.exe incluye su propio intérprete de Python empaquetado. Solo lo necesitas si prefieres ejecutar el panel desde el código fuente del repositorio, y aun así no hay dependencias externas que instalar.",
      "faq.q2": "¿Es gratis?",
      "faq.a2": "Sí. Es código abierto bajo licencia MIT: puedes usarlo, modificarlo y redistribuirlo, también en los servidores de tu liga.",
      "faq.q3": "¿Es una herramienta oficial de Kunos?",
      "faq.a3": "No. Es una herramienta independiente creada por la comunidad. No está afiliada, respaldada ni patrocinada por Kunos Simulazioni ni por Digital Bros. Assetto Corsa Competizione es una marca registrada de sus respectivos propietarios.",
      "faq.q4": "¿Por qué pide permisos de administrador?",
      "faq.a4": "Steam instala el servidor dedicado dentro de Program Files, donde Windows solo permite escribir con permisos elevados. El panel los necesita para guardar los archivos de la carpeta cfg y para iniciar y detener accServer.exe.",
      "faq.q5": "¿Funciona en LAN?",
      "faq.a5": "Sí. Por defecto el panel solo acepta conexiones desde el propio PC. Ejecútalo con <code>--lan</code> para abrirlo desde otro equipo de tu red; el acceso sigue protegido por token. La conexión es HTTP sin cifrar, así que úsalo solo en redes de confianza. Con <code>--new-token</code> generas un token nuevo.",
      "faq.q6": "¿Dónde reporto errores o propongo mejoras?",
      "faq.a6": "En los <a href=\"https://github.com/PytricioPUCV/ACC-Dedicated-Server-AdminPanel/issues\" target=\"_blank\" rel=\"noopener noreferrer\">Issues del repositorio en GitHub</a>. Indica la versión del panel y, si puedes, las líneas relevantes de la consola.",

      "cta.title": "Tu próximo evento, sin pelearte con JSON",
      "cta.text": "Descarga la v1.1, colócala en la carpeta server y prepara la parrilla desde el navegador.",

      "footer.tagline": "Interfaz gráfica para configurar y administrar servidores dedicados de Assetto Corsa Competizione.",
      "footer.license": "Código abierto bajo <a href=\"https://github.com/PytricioPUCV/ACC-Dedicated-Server-AdminPanel/blob/main/LICENSE\" target=\"_blank\" rel=\"noopener noreferrer\">licencia MIT</a>.",
      "footer.navLabel": "Enlaces del proyecto",
      "footer.repo": "Repositorio",
      "footer.releases": "Versiones",
      "footer.issues": "Reportar un problema",
      "footer.top": "Volver arriba",
      "footer.disclaimer": "Assetto Corsa Competizione es una marca registrada de Kunos Simulazioni S.r.l. y Digital Bros S.p.A. Este proyecto es independiente y no está afiliado, respaldado ni patrocinado por ellas."
    },

    en: {
      "meta.title": "ACC Server Manager: Assetto Corsa Competizione Dedicated Server GUI | ACC AdminPanel",
      "meta.description": "Free, open-source ACC server manager: an Assetto Corsa Competizione dedicated server GUI to set up your ACC dedicated server. Edit event.json / settings.json, the ACC entry list, weather and automatic track rotation.",
      "meta.ogImageAlt": "ACC Dedicated Server AdminPanel: web panel to manage Assetto Corsa Competizione servers",

      "skip": "Skip to content",
      "brand.home": "ACC AdminPanel, go to top",
      "nav.label": "Main navigation",
      "nav.features": "Features",
      "nav.screens": "Screenshots",
      "nav.start": "Get started",
      "nav.faq": "FAQ",
      "nav.download": "Download v1.1",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.label": "Language",

      "hero.eyebrow": "Assetto Corsa Competizione · Dedicated server GUI",
      "hero.title": "Run your ACC dedicated server without touching a single JSON file",
      "hero.lead": "A web-based ACC server manager for league admins and public server hosts: set up sessions, weather, the entry list and passwords from forms, rotate tracks when each race ends and follow the grid in real time. Every file is saved as UTF-16 LE with BOM, exactly as accServer expects.",
      "hero.download": "Download v1.1",
      "hero.repo": "View Repository",
      "hero.badges": "Requirements and license",
      "badge.windows": "Windows 10/11",
      "badge.mit": "Open Source MIT",
      "badge.python": "No Python install needed",
      "screen.live": "LIVE",

      "spec.tracks": "official tracks in the rotation catalog",
      "spec.encoding": "with BOM on every cfg/*.json the panel writes",
      "spec.exe": "no Python, no installer, no dependencies",
      "spec.mit": "open source on GitHub",

      "ps.kicker": "Why it exists",
      "ps.title": "Setting up an ACC dedicated server by hand is fragile",
      "ps.lead": "accServer.exe has no interface: everything lives in the cfg folder, in JSON files with a strict format. Save one detail wrong and your league session never makes it to the track.",
      "ps.manual.title": "Editing JSON by hand",
      "ps.manual.1": "<strong>Encoding:</strong> the server expects <code>UTF-16 LE</code> with BOM. Many editors silently save as UTF-8 and accServer stops reading the configuration properly.",
      "ps.manual.2": "<strong>Syntax:</strong> one extra comma or an unclosed quote in <code>event.json</code> and the server won't start, or ignores your changes right before the race.",
      "ps.manual.3": "<strong>No track rotation:</strong> the official server always runs the track set in <code>event.json</code>. Changing tracks means editing the file and restarting the server by hand.",
      "ps.manual.4": "<strong>Flying blind:</strong> knowing who is on track means reading the console or <code>server.log</code>, which can lag minutes behind.",
      "ps.panel.title": "With AdminPanel",
      "ps.panel.1": "Forms that produce valid JSON and always save it as <code>UTF-16 LE</code> with BOM.",
      "ps.panel.2": "Start, stop and restart <code>accServer.exe</code> from your browser.",
      "ps.panel.3": "Automatic rotation: when the event's final race ends, it applies the next track and relaunches the server.",
      "ps.panel.4": "Connected drivers and a real-time console, with the <code>onCarUpdate</code> spam filtered out.",

      "feat.kicker": "Features",
      "feat.title": "Everything your server needs, in a single panel",
      "feat.lead": "Tools built for a league's race day: prepare the event, keep the grid under control and move on to the next track without opening Notepad.",
      "f1.title": "Server configuration",
      "f1.text": "Server name in the lobby, join and admin passwords, slots, car group, race session lock and practice, qualifying and race duration. Passwords are never sent back to the browser.",
      "f2.title": "Entry lists and admins",
      "f2.text": "Review your league's entry list, remove drivers, flag who is an admin and enable forceEntryList to race with a strict whitelist.",
      "f3.title": "Weather and session conditions",
      "f3.text": "Ambient temperature, cloud level, rain level and weather randomness: from a dry, stable race to dynamic weather that forces real tyre strategy.",
      "f4.title": "Physics and driving assists",
      "f4.text": "Decide which assists your server allows, such as stability control or the ideal line, with no risk of breaking the file format.",
      "f5.title": "Automatic track rotation",
      "f5.text": "Catalog of the 25 official tracks grouped by DLC. When the race ends, the panel applies the next track in the rotation and relaunches the server.",
      "f6.title": "Drivers, console and moderation",
      "f6.text": "Connected drivers with race number, car and Steam ID, lag warnings, a real-time server console and moderation: admins and a ban list.",
      "f7.title": "Race history and lap records",
      "f7.text": "Reads the results saved by the server to show your session history and the lap records for each track.",
      "f8.title": "Token-protected web access",
      "f8.text": "By default the panel only listens on your own PC. With <code>--lan</code> you can open it from another computer on your network; either way, access requires a token.",

      "d1.kicker": "Track rotation",
      "d1.title": "A calendar that runs itself",
      "d1.text": "accServer never changes tracks on its own. AdminPanel watches the results and, when the event's final race ends, writes the next track to event.json and relaunches the server. Weekends with several races are respected.",
      "d1.li1": "Enable or disable whole DLCs or individual tracks.",
      "d1.li2": "Presets: all tracks, base game only or DLC only.",
      "d1.li3": "Skip to the next track or pick one manually.",
      "d1.catalog": "Rotation catalog",
      "dlc.base": "Base game",
      "d2.kicker": "Live",
      "d2.title": "The grid in real time, not minutes later",
      "d2.text": "The panel launches accServer inside a Windows pseudo-console and reads every line as it happens, instead of waiting for server.log to be flushed to disk. Connections, disconnections, timeouts and session changes show up within seconds.",
      "d2.li1": "Race number, car model and Steam ID for every driver.",
      "d2.li2": "LAG warning when UDP packets arrive late.",
      "d2.li3": "Console with an onCarUpdate spam filter.",
      "d3.kicker": "Configuration",
      "d3.title": "From the form to the right file",
      "d3.text": "Every change is validated in the form and written to the matching JSON file, in the encoding accServer requires. Your passwords never travel back to the browser: the panel only shows whether they are set.",
      "d3.li1": "settings.json, event.json and assistRules.json in one place.",
      "d3.li2": "Practice, qualifying and race duration.",
      "d3.li3": "Weather, slots and car group without hunting for keys in the docs.",

      "gallery.kicker": "Screenshots",
      "gallery.title": "What the panel looks like",
      "gallery.lead": "A dark Race Control style interface, designed to stay open on a second monitor during the event.",
      "gallery.players": "Live drivers and moderation",
      "gallery.console": "Real-time server console",
      "shot.pending": "Screenshot pending",
      "shot.hero.alt": "Main view of ACC Dedicated Server AdminPanel with server status, the active track and lap records",
      "shot.config.alt": "Server configuration form with name, passwords, slots and session durations",
      "shot.entry.alt": "Entry list table with authorized drivers and server admins",
      "shot.weather.alt": "Ambient temperature, cloud level, rain and weather randomness settings",
      "shot.assists.alt": "Driving assist options with stability control and ideal line",
      "shot.rotation.alt": "ACC track catalog grouped by DLC with automatic rotation enabled",
      "shot.players.alt": "Connected drivers list with race number, car, Steam ID and moderation actions",
      "shot.console.alt": "Real-time server console with color-coded lines and spam filter",
      "shot.history.alt": "Session history and lap records per track",
      "shot.access.alt": "ACC_AdminPanel.exe window showing the panel address and the masked access token",

      "start.kicker": "Get started",
      "start.title": "On track in four steps",
      "start.lead": "No installer, no dependencies: the executable ships with everything it needs.",
      "step1.title": "Download the zip",
      "step1.text": "Get <code>ACC_Server_AdminPanel_v1.1.zip</code> from the GitHub releases page and extract it.",
      "step2.title": "Drop it into the server folder",
      "step2.text": "Copy <code>ACC_AdminPanel.exe</code> into the <code>server</code> folder of your ACC dedicated server, next to <code>accServer.exe</code>.",
      "step3.title": "Run it and accept UAC",
      "step3.text": "Double-click it and accept the User Account Control prompt: the panel needs administrator rights to write to Program Files and manage accServer.exe.",
      "step4.title": "Open the panel",
      "step4.text": "Your browser opens the panel automatically, already signed in. Start the server with the Start button to see drivers in real time.",
      "path.label": "Typical Steam path of the dedicated server",
      "path.copy": "Copy",
      "path.copied": "Copied",
      "path.copyLabel": "Copy the path to the clipboard",
      "path.copyDone": "Path copied to the clipboard.",
      "path.copyFail": "Could not copy. Select the path and copy it with Ctrl+C.",
      "path.tip": "Don't have the server yet? Install it from Steam: <strong>Library → Tools → Assetto Corsa Competizione Dedicated Server</strong>.",

      "faq.kicker": "FAQ",
      "faq.title": "Frequently asked questions",
      "faq.q1": "Do I need to install Python?",
      "faq.a1": "No. ACC_AdminPanel.exe ships with its own bundled Python interpreter. You only need Python if you prefer to run the panel from the repository's source code, and even then there are no external dependencies to install.",
      "faq.q2": "Is it free?",
      "faq.a2": "Yes. It is open source under the MIT license: you can use, modify and redistribute it, including on your league's servers.",
      "faq.q3": "Is it an official Kunos tool?",
      "faq.a3": "No. It is an independent, community-made tool. It is not affiliated with, endorsed or sponsored by Kunos Simulazioni or Digital Bros. Assetto Corsa Competizione is a registered trademark of its respective owners.",
      "faq.q4": "Why does it ask for administrator rights?",
      "faq.a4": "Steam installs the dedicated server inside Program Files, where Windows only allows writing with elevated rights. The panel needs them to save the files in the cfg folder and to start and stop accServer.exe.",
      "faq.q5": "Does it work over LAN?",
      "faq.a5": "Yes. By default the panel only accepts connections from the PC it runs on. Run it with <code>--lan</code> to open it from another computer on your network; access is still token-protected. The connection is unencrypted HTTP, so only use it on trusted networks. Use <code>--new-token</code> to generate a new token.",
      "faq.q6": "Where do I report bugs or suggest improvements?",
      "faq.a6": "In the <a href=\"https://github.com/PytricioPUCV/ACC-Dedicated-Server-AdminPanel/issues\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub repository Issues</a>. Include the panel version and, if you can, the relevant console lines.",

      "cta.title": "Your next event, without fighting JSON",
      "cta.text": "Download v1.1, drop it into the server folder and prepare the grid from your browser.",

      "footer.tagline": "Graphical interface to configure and manage Assetto Corsa Competizione dedicated servers.",
      "footer.license": "Open source under the <a href=\"https://github.com/PytricioPUCV/ACC-Dedicated-Server-AdminPanel/blob/main/LICENSE\" target=\"_blank\" rel=\"noopener noreferrer\">MIT license</a>.",
      "footer.navLabel": "Project links",
      "footer.repo": "Repository",
      "footer.releases": "Releases",
      "footer.issues": "Report an issue",
      "footer.top": "Back to top",
      "footer.disclaimer": "Assetto Corsa Competizione is a registered trademark of Kunos Simulazioni S.r.l. and Digital Bros S.p.A. This project is independent and is not affiliated with, endorsed or sponsored by them."
    }
  };

  var LOCALES = { es: "es_ES", en: "en_US" };
  var currentLang = DEFAULT_LANG;

  function t(key) {
    var dict = I18N[currentLang] || I18N[DEFAULT_LANG];
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : I18N[DEFAULT_LANG][key];
  }

  function readStoredLang() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value && I18N[value] ? value : null;
    } catch (error) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* Almacenamiento no disponible (modo privado, file:// bloqueado): se ignora. */
    }
  }

  function setMeta(selector, value) {
    var node = document.querySelector(selector);
    if (node) node.setAttribute("content", value);
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = DEFAULT_LANG;
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n"));
      if (value !== undefined) node.textContent = value;
    });

    // Sólo cadenas propias del diccionario (marcado de confianza: <code>, <strong>, <a>).
    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n-html"));
      if (value !== undefined) node.innerHTML = value;
    });

    // Formato: "atributo:clave; atributo2:clave2"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (node) {
      node.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var value = t(parts[1].trim());
        if (value !== undefined) node.setAttribute(parts[0].trim(), value);
      });
    });

    document.title = t("meta.title");
    setMeta('meta[name="description"]', t("meta.description"));
    setMeta('meta[property="og:title"]', t("meta.title"));
    setMeta('meta[property="og:description"]', t("meta.description"));
    setMeta('meta[property="og:image:alt"]', t("meta.ogImageAlt"));
    setMeta('meta[property="og:locale"]', LOCALES[lang]);
    setMeta('meta[property="og:locale:alternate"]', LOCALES[lang === "es" ? "en" : "es"]);
    setMeta('meta[name="twitter:title"]', t("meta.title"));
    setMeta('meta[name="twitter:description"]', t("meta.description"));
    setMeta('meta[name="twitter:image:alt"]', t("meta.ogImageAlt"));

    document.querySelectorAll(".lang-btn").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === lang));
    });

    updateNavToggleLabel();
  }

  /* ------------------------------------------------------------ Menú móvil */
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var desktopQuery = window.matchMedia("(min-width: 960px)");

  function isNavOpen() {
    return navToggle && navToggle.getAttribute("aria-expanded") === "true";
  }

  function updateNavToggleLabel() {
    if (navToggle) navToggle.setAttribute("aria-label", t(isNavOpen() ? "nav.close" : "nav.open"));
  }

  function setNavOpen(open, returnFocus) {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", String(open));
    siteNav.classList.toggle("is-open", open);
    updateNavToggleLabel();
    if (!open && returnFocus) navToggle.focus();
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      setNavOpen(!isNavOpen(), false);
    });

    siteNav.addEventListener("click", function (event) {
      if (event.target.closest("a") && !desktopQuery.matches) setNavOpen(false, false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isNavOpen()) setNavOpen(false, true);
    });

    document.addEventListener("click", function (event) {
      if (isNavOpen() && !event.target.closest(".site-header")) setNavOpen(false, false);
    });

    var onBreakpoint = function (event) {
      if (event.matches) setNavOpen(false, false);
    };
    if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", onBreakpoint);
    else if (desktopQuery.addListener) desktopQuery.addListener(onBreakpoint);
  }

  /* ------------------------------------------------------------ Selector de idioma */
  document.querySelectorAll(".lang-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-lang");
      if (lang === currentLang) return;
      applyLang(lang);
      storeLang(lang);
    });
  });

  /* ------------------------------------------------------------ Copiar ruta */
  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return fallbackCopy(text); }
      );
    }
    return Promise.resolve(fallbackCopy(text));
  }

  document.querySelectorAll(".copy-btn").forEach(function (button) {
    var resetTimer = null;
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-copy-target"));
      var status = button.closest(".path-box") && button.closest(".path-box").querySelector(".copy-status");
      var label = button.querySelector(".copy-text");
      if (!target) return;

      copyText(target.textContent.trim()).then(function (ok) {
        if (status) status.textContent = t(ok ? "path.copyDone" : "path.copyFail");
        if (!ok) return;
        button.classList.add("is-copied");
        if (label) label.textContent = t("path.copied");
        clearTimeout(resetTimer);
        resetTimer = setTimeout(function () {
          button.classList.remove("is-copied");
          if (label) label.textContent = t("path.copy");
          if (status) status.textContent = "";
        }, 2200);
      });
    });
  });

  /* ------------------------------------------------------------ Animaciones de entrada */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealNodes = document.querySelectorAll(".reveal");
  var startLights = document.querySelector(".start-lights");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach(function (node) { node.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealNodes.forEach(function (node) { observer.observe(node); });

    if (startLights) {
      var lightsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          startLights.classList.toggle("is-on", entry.isIntersecting);
        });
      });
      lightsObserver.observe(startLights);
    }
  }

  /* ------------------------------------------------------------ Capturas
     Los manejadores onload/onerror inline marcan cada figura; aquí se cubre el caso de una
     imagen ya resuelta antes de que existieran (p. ej. caché del navegador). */
  document.querySelectorAll(".shot img").forEach(function (img) {
    var figure = img.closest(".shot");
    if (!figure || !img.complete || img.getAttribute("loading") === "lazy") return;
    if (img.naturalWidth > 0) figure.classList.add("is-loaded");
    else figure.classList.add("is-missing");
  });

  /* ------------------------------------------------------------ Idioma inicial */
  var initialLang = readStoredLang() || DEFAULT_LANG;
  if (initialLang !== DEFAULT_LANG) applyLang(initialLang);
  else updateNavToggleLabel();
})();
