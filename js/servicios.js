(() => {
  const servicios = [
    [
      'Maquillaje Social y de Gala',
      'bi-brush',
      'Elegancia y perfección para tus eventos.',
      'Técnicas de alta duración, contorno avanzado, iluminación y diseño de mirada adaptado a tu estilo.'
    ],
    [
      'Maquillaje de Novias',
      'bi-heart',
      'Tu look ideal para el día más especial.',
      'Incluye prueba previa, diseño personalizado, alta resistencia al agua y cobertura de larga duración.'
    ],
    [
      'Clases de Automaquillaje',
      'bi-mortarboard',
      'Aprende a realzar tu belleza natural.',
      'Técnicas de skincare previo, uso correcto de brochas, corrector, base y transformación de día a noche.'
    ],
    [
      'Maquillaje Editorial y Pasarela',
      'bi-camera',
      'Arte y tendencia para producciones.',
      'Maquillaje de alta definición (HD), efectos creativos, fotografía y desfiles de moda.'
    ],
    [
      'Diseño y Planchado de Cejas',
      'bi-eye',
      'Enmarca tu rostro con simetría.',
      'Diseño personalizado según la forma de tu rostro, depilación precisa y laminado o nutrición.'
    ],
    [
      'Lifting de Pestañas',
      'bi-stars',
      'Curvatura natural y volumen impactante.',
      'Elevación desde la raíz, tinte opcional y tratamiento hidratante con queratina para cuidar tus pestañas.'
    ],
    [
      'Asesoría de Imagen',
      'bi-palette',
      'Descubre los tonos que te favorecen.',
      'Estudio de colorimetría personal, tipología de rostro y recomendación de paletas de maquillaje ideales.'
    ],
    [
      'Skincare y Preparación de Piel',
      'bi-droplet',
      'El lienzo perfecto antes del color.',
      'Limpieza profunda, hidratación express, diagnóstico de tipo de piel y aplicación de primers específicos.'
    ]
  ];

  function renderServicios() {
    const container = document.getElementById('contenedor-servicios');
    const { create, clearChildren } = window.appDom || {};

    if (!container || !create || !clearChildren) {
      return;
    }

    clearChildren(container);

    servicios.forEach(
      ([titulo, icono, resumen, detalles], index) => {

        // =====================================================
        // TARJETA
        // =====================================================

        const card = create('div', {
          class: 'servicio-flip',
          tabindex: '0',
          role: 'button',
          'aria-label': `${titulo}. Ver detalles`,
          'data-aos': 'fade-up',
          'data-aos-delay': `${(index + 1) * 100}`
        });


        // =====================================================
        // CONTENEDOR 3D
        // =====================================================

        const inner = create('div', {
          class: 'servicio-flip-inner'
        });


        // =====================================================
        // CARA FRONTAL
        // =====================================================

        const front = create('div', {
          class: 'servicio-flip-front'
        });


        // Icono

        const iconCircle = create('div', {
          class: 'servicio-flip-icon',
          html: `
            <i
              class="bi ${icono}"
              aria-hidden="true">
            </i>
          `
        });


        // Título

        const tituloElemento = create('h3', {
          text: titulo
        });


        // Resumen

        const resumenElemento = create('p', {
          text: resumen
        });


        front.append(
          iconCircle,
          tituloElemento,
          resumenElemento
        );


        // =====================================================
        // CARA TRASERA
        // =====================================================

        const back = create('div', {
          class: 'servicio-flip-back'
        });


        // Título

        const detallesTitulo = create('h4', {
          text: 'Detalles'
        });


        // Separador

        const separador = create('hr');


        // Detalles

        const detallesTexto = create('p', {
          text: detalles
        });


        back.append(
          detallesTitulo,
          separador,
          detallesTexto
        );


        // =====================================================
        // ENSAMBLAR
        // =====================================================

        inner.append(
          front,
          back
        );

        card.appendChild(inner);


        // =====================================================
        // CLICK
        // =====================================================

        card.addEventListener('click', () => {
          card.classList.toggle('is-flipped');

          const volteada = card.classList.contains('is-flipped');

          card.setAttribute(
            'aria-label',
            volteada
              ? `${titulo}. Ocultar detalles`
              : `${titulo}. Ver detalles`
          );
        });


        // =====================================================
        // TECLADO
        // =====================================================

        card.addEventListener('keydown', (event) => {

          if (
            event.key === 'Enter' ||
            event.key === ' '
          ) {

            event.preventDefault();

            card.classList.toggle('is-flipped');

            const volteada =
              card.classList.contains('is-flipped');

            card.setAttribute(
              'aria-label',
              volteada
                ? `${titulo}. Ocultar detalles`
                : `${titulo}. Ver detalles`
            );
          }
        });


        container.appendChild(card);
      }
    );
  }


  window.appServicios = {
    renderServicios
  };
})();