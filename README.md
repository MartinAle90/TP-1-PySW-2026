Documentación Técnica: Proyecto DestinoJujuy
Materia: Programación y Servicios Web (APU)


Decisiones de Diseño y Código
1. Cards de destinos destacados con efectos hover
Para la visualización de los destinos turísticos, se implementó un sistema de tarjetas (Cards) estructuradas.

Maquetación: Se utilizó CSS Grid para la disposición adaptable de las tarjetas en la grilla principal.

Interactividad: Al realizar el evento :hover, se combinan dos transformaciones: el contenedor principal se eleva en el eje Y generando un efecto de flotación con sombra dinámica, mientras que la imagen interna realiza un ligero acercamiento.

2. Contador animado con CSS Keyframes
Se desarrolló un contador de estadísticas que se anima automáticamente al cargar.

Se empleó la regla @keyframes en combinación con la manipulación de variables mediante @property. Esto permite que el navegador interpole valores numéricos.

Inyección de contenido: El valor numérico actualizado por la animación se inyecta directamente en el DOM utilizando la propiedad content dentro de un pseudoelemento ::after y la función counter(), manteniendo el HTML limpio.

3. Carrusel de testimonios usando solo CSS
Para la sección de testimonios se evito librerías externas o scripts, logrando el comportamiento de carrusel puramente con CSS.

Estructura: Se utilizó un contenedor con display: flex y overflow-x: auto para habilitar el desplazamiento horizontal.

Al contenedor padre se le aplicó scroll-snap-type: x mandatory, y a cada tarjeta hija scroll-snap-align: center. Esto obliga a que, al arrastrar o hacer scroll, la tarjeta se detenga y se alinee perfectamente en el centro de la pantalla.

4. Footer completo y estructurado
El pie de página se diseñó utilizando la etiqueta semántica <footer> y se dividió en tres columnas funcionales mediante CSS Flexbox/Grid para mantener el equilibrio visual.

Mapa Embebido: Se integró un <iframe> interactivo provisto por OpenStreetMap, ajustando su tamaño (width="100%") para que responda al ancho de su columna contenedora.

5. Responsividad de la sección
El uso de funciones como repeat(auto-fit, minmax(300px, 1fr)) en CSS Grid garantizó que las tarjetas de destinos y las columnas del footer se reacomoden automáticamente según el ancho disponible en pantalla.

Media Queries: Se aplicaron reglas @media (max-width: 768px) de forma estratégica para colapsar el menú de navegación en dispositivos móviles y ajustar los márgenes y tamaños tipográficos (rem y vw), asegurando una lectura cómoda en celulares.