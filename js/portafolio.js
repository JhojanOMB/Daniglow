(() => {
  // Datos del portafolio adaptados a Dani Glow
  const proyectos = [
    {
      nombre: 'Maquillaje Social de Noche',
      descripcion: 'Piel blindada de alta duración con delineado gráfico y tonos cálidos ideal para eventos nocturnos.',
      imagen: 'img/portafolio/social-noche.webp',
      category: 'social',
      tech: ['Smokey Eyes', 'Piel Luminosa', 'Larga Duración'],
      linkInstagram: 'https://www.instagram.com/daniglow_beauty/'
    },
    {
      nombre: 'Look de Novia Glam',
      descripcion: 'Acabado natural con enfoque en iluminación sutil, labios nude y preparación profunda de piel.',
      imagen: 'img/portafolio/novia-glam.webp',
      category: 'novia',
      tech: ['Bridal Glam', 'Soft Skincare', 'Resistente al Agua'],
      linkInstagram: 'https://www.instagram.com/daniglow_beauty/'
    },
    {
      nombre: 'Editorial Color Creative',
      descripcion: 'Maquillaje de alto impacto visual para sesiones fotográficas con tonos contrastantes y acabados artísticos.',
      imagen: 'img/portafolio/editorial-color.webp',
      category: 'editorial',
      tech: ['Editorial', 'Fotografía', 'Color Power'],
      linkInstagram: 'https://www.instagram.com/daniglow_beauty/'
    },
    {
      nombre: 'Maquillaje Quinceañera Soft',
      descripcion: 'Efecto fresco y juvenil destacando la luminosidad natural del rostro y tonos rosados suaves.',
      imagen: 'img/portafolio/quinceanera-soft.webp',
      category: 'novia',
      tech: ['Soft Glam', 'Quinceañera', 'Glow Natural'],
      linkInstagram: 'https://www.instagram.com/daniglow_beauty/'
    }
  ];

  function renderPortafolio(items = proyectos) {
    const grid = document.getElementById('portafolio-grid');
    const template = document.getElementById('portafolio-card-template');
    if (!grid || !template) return;

    const { create } = window.appDom || {};
    grid.replaceChildren();

    if (items.length === 0) {
      if (create) {
        const emptyMsg = create('p', {
          class: 'col-span-full text-center text-gray-500 py-8 text-sm font-medium',
          text: 'No se encontraron looks que coincidan con tu búsqueda.'
        });
        grid.appendChild(emptyMsg);
      }
      return;
    }

    items.forEach((proyecto) => {
      const card = template.content.cloneNode(true);
      const image = card.querySelector('img');
      const title = card.querySelector('[data-role="title"]');
      const description = card.querySelector('[data-role="desc"]');
      const tags = card.querySelector('[data-role="tags"]');
      const action = card.querySelector('[data-role="action"]');

      if (image) {
        image.src = proyecto.imagen;
        image.alt = proyecto.nombre;
        image.onerror = () => {
          image.onerror = null;
          image.src = 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop';
        };
      }

      if (title) title.textContent = proyecto.nombre;
      if (description) description.textContent = proyecto.descripcion;

      // Renderizado de badges/etiquetas con tonos rosa/vinotinto
      if (tags && create) {
        tags.replaceChildren(
          ...proyecto.tech.map((tecnologia) =>
            create('span', {
              class: 'rounded-full border border-rose-200 bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-900 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-200',
              text: `#${tecnologia}`
            })
          )
        );
      }

      // Renderizado del botón de acción hacia Instagram
      if (action && create) {
        const link = create('a', {
          href: proyecto.linkInstagram,
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'inline-flex items-center gap-2 rounded-full bg-rose-900 px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-rose-950 hover:-translate-y-0.5',
          'aria-label': `Ver ${proyecto.nombre} en Instagram`
        });
        link.innerHTML = '<i class="fa-brands fa-instagram text-sm"></i> Ver en Instagram';
        action.replaceChildren(link);
      }

      grid.appendChild(card);
    });
  }

  function setupPortafolioControls() {
    const input = document.getElementById('portafolio-search');
    const buttons = [...document.querySelectorAll('#portafolio-filtros button, .btn-neumorph[data-cat]')];
    const debounce = window.appDom?.debounce;

    if (!input && !buttons.length) return;

    let category = 'all';

    const filter = () => {
      const query = input ? input.value.trim().toLowerCase() : '';
      renderPortafolio(
        proyectos.filter(
          (proyecto) =>
            (category === 'all' || proyecto.category === category) &&
            (proyecto.nombre.toLowerCase().includes(query) ||
             proyecto.descripcion.toLowerCase().includes(query) ||
             proyecto.tech.some((t) => t.toLowerCase().includes(query)))
        )
      );
    };

    if (input) {
      input.oninput = debounce ? debounce(filter) : filter;
    }

    buttons.forEach((button) => {
      button.onclick = () => {
        buttons.forEach((item) => {
          item.classList.remove('bg-rose-100', 'text-rose-900');
          item.classList.add('text-gray-600');
        });

        button.classList.remove('text-gray-600');
        button.classList.add('bg-rose-100', 'text-rose-900');

        category = button.dataset.cat || 'all';
        filter();
      };
    });

    filter();
  }

  window.appPortafolio = { renderPortafolio, setupPortafolioControls };
})();