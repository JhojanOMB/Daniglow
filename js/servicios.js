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

    servicios.forEach(([titulo, icono, resumen, detalles], index) => {
      // Ícono Neumórfico
      const iconCircle = create('div', {
        class: 'w-14 h-14 rounded-2xl bg-neumo-paper shadow-neumo flex items-center justify-center text-2xl text-vinotinto-700 mb-4 group-hover:scale-110 transition-transform duration-300',
        html: `<i class="bi ${icono}" aria-hidden="true"></i>`
      });

      // Título
      const tituloElemento = create('h3', {
        class: 'text-xl font-bold font-display text-vinotinto-900 mb-2 group-hover:text-vinotinto-700 transition-colors',
        text: titulo
      });

      // Resumen / Bajada
      const resumenElemento = create('p', {
        class: 'text-sm font-semibold text-vinotinto-600 mb-3',
        text: resumen
      });

      // Separador sutil
      const separador = create('hr', {
        class: 'border-vinotinto-900/10 mb-3 w-full'
      });

      // Detalles explicativos
      const detallesElemento = create('p', {
        class: 'text-xs text-neumo-ink/80 leading-relaxed mt-auto',
        text: detalles
      });

      // Contenedor de la tarjeta estática
      const card = create(
        'div',
        {
          class: 'group bg-neumo-paper rounded-2xl shadow-neumo p-6 flex flex-col justify-between border border-white/60 hover:-translate-y-1 transition-all duration-300 h-full',
          'data-aos': 'fade-up',
          'data-aos-delay': `${(index + 1) * 100}`
        },
        [iconCircle, tituloElemento, resumenElemento, separador, detallesElemento]
      );

      container.appendChild(card);
    });
  }

  // Auto-ejecución al cargar la vista
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderServicios);
  } else {
    renderServicios();
  }

  window.appServicios = { renderServicios };
})();