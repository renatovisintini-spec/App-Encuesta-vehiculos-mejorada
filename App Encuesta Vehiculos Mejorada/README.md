# App Encuesta Vehículos — versión mejorada

Esta carpeta es una **copia refactorizada** del proyecto original. Los archivos originales no fueron modificados.

## Cambios principales
- Se eliminó la duplicación de páginas por categoría: ahora una sola `encuesta.html` carga automóviles, camionetas, camiones o motos mediante `?tipo=`.
- Se centralizaron preguntas y opciones en `js/data.js`.
- Se unificaron registro, login, encuestas, respuestas y estadísticas con JavaScript reutilizable.
- Se reemplazaron IDs repetidos y estilos inline por clases CSS.
- Se usa HTML semántico con `lang="es"`, `fieldset`, `legend`, formularios accesibles y navegación consistente.
- El diseño es mobile-first y responsive, sin depender de Bootstrap.
- Se conservan los `localStorage` principales del proyecto original para las estadísticas.
- Se mantienen los fondos originales de camionetas, camiones y motos.
- El fondo de automóviles se sustituyó por `assets/images/Ptcruiser.jpg`, tal como se solicitó.
- `normalize.css` conserva el contenido original, pero se normalizó su nombre de archivo.

## Ejecución
Por usar módulos ES (`type="module"`), se recomienda abrir la carpeta mediante un servidor local, por ejemplo Live Server en VS Code.

## Nota de seguridad
La autenticación sigue siendo una simulación frontend y almacena contraseñas en `localStorage`, igual que el concepto original. No debe usarse así en una aplicación real con usuarios reales.

## Control de encuestas repetidas
Cada usuario puede completar una categoría una sola vez. Si intenta volver a entrar en una encuesta que ya completó, la aplicación muestra el mensaje: “Has realizado la encuesta [categoría], no puedes volver a realizarla, elige otro ítem” y evita que vuelva a responderla.


## Ajustes visuales adicionales

- Se añadió la carpeta `Imgs/` para centralizar las imágenes locales del proyecto.
- La portada inicial utiliza `Imgs/Ptcruiser.jpg`.
- Se aumentó la nitidez visual de los fondos mediante menor oscurecimiento y mayor contraste/saturación.
- Se definieron paletas por categoría: Automóviles (rojos, azules y amarillos), Camionetas (verdes, amarillos y rojos), Camiones (verdes, rojos y azules) y Motos (naranja, violeta y turquesa).

- Corrección 4: los fondos de las cuatro categorías se definen directamente en CSS. Automóviles usa `../Imgs/Ptcruiser.jpg`; Motos conserva la URL original.
