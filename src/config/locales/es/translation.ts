export const translationES = {
  app: {
    add: 'Añadir',
    remove: 'Eliminar',
    links: 'Enlaces',
    no: 'No',
    confirm: 'Confirm',
    more: 'Más',
    language: 'Idioma',
    theme: 'Tema',
    btntheme: 'Tema Botones',

    es: 'Español (ES)',
    en: 'Inglés (US)',

    home: {
      title: 'Inicio',
      subtitle: 'Raíz de este Sitio Web',
      description: `Esto es un Sitio Web de Destino basado en <strong>
      React/Redux</strong> y <strong>Bootstrap</strong> con un montón de
      personalizaciones para adaptarlo a mis propias preferencias. El Sitio está
      estructurado como una <strong>SPA (Aplicación de Una Sola Página)</strong>
      con diversas <strong>rutas</strong>, alguna de las cuales son pequeñas
      <strong>Aplicaciones Demo</strong> que permiten comprobar las capacidades
      de <strong>React/Redux</strong> y de <strong>Bootstrap</strong>.
      De hecho, la idea base detrás de este proyecto es recorrer las capacidades
      de ambos frameworks, comprobarlas, mejorar su implementación con buenas
      prácticas, y disponer así de una buena plantilla para iniciar cualquier
      proyecto web. Espero que os guste!`,
      navbarTitle: 'Barra de Navegación',
      navbar: `La <strong>barra de navegación principal</strong> es fija en la
      parte superior y está compuesta por varios elementos bien diferenciados:
      una <strong>barra de título</strong>; una <strong>barra con los enlaces principales</strong>; diversos
      <strong>widgets</strong> entre los que se encuentran un <strong>selector de idioma</strong>,
      un <strong>contador</strong>, un
      <strong>reloj</strong> y un <strong>selector de tema</strong>; finalmente
      están los botones de apertura de menús que se desplegan
      a izquierda, derecha, arriba y abajo de la pantalla. Estos elementos se
      adaptan al tamaño del dispositivo, y desaparecen si no hay espacio
      suficiente para mostrarlos. A mayor tamaño de pantalla, más "herramientas"
      accesibles de forma inmediata. Pero todas ellas están disponibles para
      cualquier tamaño de pantalla, solo que organizadas de diferente manera.
      Esta es mi manera de entender una barra de navegación: aprovechar el
      tamaño de pantalla para hacer más accesibles un mayor número de elementos,
      pero que estén igualmente disponibles en tamaño pequeño.
      <strong>Se debe poder hacer lo mismo desde un
      pc de escritorio que desde un móvil</strong>.`,
      routeTitle: 'Rutas',
      route: `Para la colección de rutas de este Sitio se ha utilizado la
      clásica estructura <strong>routes</strong> del
      <strong>createBrowserRouter</strong> de <strong>React-Router</strong> y su
      método <strong>loader</strong>, que se aprovecha para incorporar atributos
      adicionales como <strong>título</strong>, <strong>subtítulo</strong>,
      <strong>icono</strong> y <strong>descripción</strong>. Estos atributos
      se utilizan en los menús de navegación, en los datos de cabecera de cada
      ruta y también en el pie de página, lo que permite mantener la homogeneidad
      de los datos descriptivos de cada ruta en todas las secciones en donde
      aparezcan.
      `,
      layoutTitle: 'Plantilla de Página y Barra de Navegación Secundaria',
      layout: `Las rutas cargan dentro de una <strong>Plantilla de Página</strong> para que
      todas las vistas mantengan un formato homogéneo y, sobretodo, para que
      cualquier cambio de diseño pueda aplicarse de forma extremadamente fácil
      y sencilla.<br />
      La <strong>Plantilla de Página</strong> actual consta de una zona de <strong>título</strong>, que incluye
      <strong>subtitulo</strong> y <strong>descripción</strong> opcionales, y una
      <strong>Barra de Navegación Secundaria</strong>
      que al desplazarse hacia abajo se "adhiere" a la <strong>Barra de Navegación
      Principal</strong>, quedando ambas fijas en la zona superior.
      Esta <strong>Barra de Navegación Secundaria</strong> se define en cada ruta para establecer
      las opciones necesarias en cada vista.<br />
      Un detalle interesante de esta barra es que,
      al desplazarse hacia abajo, el gran titular que aparece en cabecera se
      incorpora a esta barra en un tamaño más compacto, con el objetivo de tener
      siempre a la vista la ruta en la que nos encontramos, junto con las
      opciones y herramientas de la misma. Como no podría ser de otra manera,
      todos estos elementos tiene <strong>diseño adaptable</strong> y se ajustan perfectamente
      al tamaño de pantalla, colapsando en un botón de menú desplegable cuando
      es necesario.`,
      bootstrapTitle: 'Personalización de Bootstrap',
      bootstrap: `La librería para Frontend <strong>Bootstrap</strong> permite la personalización
      a través de sus variables <strong>Sass</strong> y <strong>Css</strong>, y también sobreescribiendo directamente
      algunos atributos Css. Algunos de los ajustes que se han incorporado en este
      proyecto son estos:`,
      bootstrapItems: [
        `Suavizar los <strong>bordes redondeados</strong> para hacerlos algo más <strong>cuadrados</strong>
        y ofrecer una imagen más regular.`,
        `Reajustar los <strong>tamaños</strong> de las barras de navegación, botones, inputs y otros
        elementos.`,
        `Modificar el color de fondo de las <strong>barras de navegación</strong> principales con
        efectos de <strong>transparencia</strong> y <strong>difuminado</strong>.`,
        `Incorporar leves efectos de <strong>sombra</strong> en las cabeceras.`,
        `<strong>Ajustes específicos en diseño adaptable</strong>, como la desaparición de etiquetas
        de texto en botones al reducir el tamaño de pantalla, aparición de scroll
        horizontal en ciertas colecciones de elementos que no caben en pantalla, y
        otros.`,
        `Modificación del color diferencial del <strong>componente acordeón</strong> para homogeneizarlo
        con el resto de componentes.`,
        `Incorporar algunos <strong>efectos leves</strong> de <strong>iluminación</strong> en botones, iconos y texto
        al situar el ratón encima o hacer clic.`,
      ],
      // de idioma,
      //  Algunos menús de
      // navegación solo aparecen si la pantalla es lo suficientemente grande como
      // para que su presencia esté bien acomodada. Si existe espacio suficiente
      // se muestran algunas de las rutas principales de navegación, disponibles en
      // el menú de navegación. Los botones especificados como principales
      // permanecen en todos los tamaños, incluído el dispositivo móvil, a modo de
      // barra principal.<br />
      // Se incluyen algunos widgets genéricos, como un interruptor para cambiar
      // entre tema claro y oscuro, un selector de idioma o un mini contador. Todos
      // estos parámetros se almacenan en el LocalStorage del dispositivo.
      // El botón izquierdo abre el menú de navegación con todas las rutas
      // disponibles, también agrupadas en carpetas para una mejor clasificación.
      // Se ha optado por utilizar la estructura <strong>routes</strong> y su
      // método <strong>loader</strong> para almacenar la colección de rutas con
      // todos los atributos necesarios, como título, subtítulo, descripción,
      // icono, y así poder utilizarla no solo para el manejo del Routing, sino también
      // para mostrar los menús, la barra de navegación e incluso la sección de
      // título de cada página.<br />
      // Se ha creado también una barra de navegación secundaria, que no es global,
      // sino que depende de cada ruta cargada y permite incorporar opciones
      // especiales en cada una de ellas. Esta barra secundaria se combina con un
      // título amplio que, al desplazarse hacia abajo, se fusionan. De ese modo
      // siempre queda a la vista el título de la ruta actual y sus opciones
      // principales. Ambas barras de navegación tienen un leve efecto de
      // transparencia que, además de proporcionar un toque moderno y elegante a la
      // interfaz, aportan mayor sensación de "flotar" sobre el contenido.
      // `,
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: '</>',
      description: 'Información sobre mi historia profesional',

      viewMyCert: 'Ver mi Cert.',

      omegazeta: `<strong>CIRCA - Panel Omega Zeta</strong> pertenece a la
      <strong>Corporación Omega Zeta</strong>, que trabaja en <strong>Europa,
      Asia y África</strong>, desarrollando productos y servicios que favorezcan
      el conocimiento, la salud, el bienestar, el medio ambiente y la innovación
      para mejorar el futuro de las personas, a las que sitúa en
      el centro de toda su actividad.<br />
      La <strong>Corporación Omega Zeta</strong> nace, hace 50 años, de la mano
      de su presidente, <strong>Carlos Fradera Pellicer</strong>, empresario e
      inventor, propietario de <strong>500 patentes internacionales (PCT's)</strong>,
      fruto de la visión de su fundador y de su experiencia personal.`,
      arghos: `Ingeniería, Consultoría y Software.`,
      aernnova: `Diseño, fabricación, mantenimiento y servicios de Aeroestructuras.`,

      summaryTitle: 'Resumen Ejecutivo',
      summary: `Tengo una dilatada experiencia en el <strong>desarrollo de
      aplicaciones industriales y de gestión</strong>, especializado en el 
      <strong>desarrollo de servidores web de tipo SaaS</strong> que explotan
      la información recogida por SCADAs, MES y otros softwares de planta.
      Me gustan las <strong>UI atractivas, funcionales y bien diseñadas</strong>.
      Entusiasta de los <strong>últimos frameworks</strong> mejor valorados y de
      integración ágil.
      Me siento cómodo gestionando los proyectos con <strong>metodología Agile</strong>:
      disponer de un producto básico y funcional en un plazo reducido, que
      incremente sus funcionalidades con ayuda del <strong>feedback del usuario
      final</strong>, y esto como herramienta de <strong>mejora continua</strong>. 
      Apasionado del <strong>código bien organizado</strong> y con un buen balance
      entre <strong>optimización y legibilidad</strong>. También he estado al
      frente de la <strong>gestión TI</strong>, decidiendo, planificando y ejecutando con éxito los avances tecnológicos
      requeridos para <strong>reducir costes</strong>, reforzar la
      <strong>seguridad y fiabilidad</strong>, y <strong>simplificar la gestión</strong>.`,

      experienceTitle: 'Experiencia',
      experience: [
        {
          title: [
            'Responsable de Desarrollo de Software',
            'Desarrollador Fullstack',
            'Responsable TI',
          ],
          year: '2015 - 2022',
          subtitle: [
            'Corporación Omega Zeta S.L.',
            'CIRCA, S.A.',
            'New Building Materials Co. Ltd.',
            'Clínica Omega Zeta',
          ],
          details: [
            `Desarrollo del software <strong>OZ-MES</strong> a medida para la
            <strong>fábrica de Panel Omega Zeta en CIRCA, S.A. y New Building
            Materials Co. Ltd.</strong>, que controla todo el ciclo de fabricación:
            planificación, formulación, materias primas, producto semielaborado,
            producto final y expedición. Soporte multi-idioma con traducción al
            chino (realizada por los propios empleados desde el inglés) para la planta de Nanjing. Se basó en las 
            últimas tecnologías del momento: <strong>HTML/CSS/JS/Bootstrap</strong>
            con <strong>AngularJS</strong> (Frontend), <strong>Java y Spring</strong>
            (Backend), <strong>PostgreSQL</strong> (motor de base de datos) y
            <strong>GlassFish/Payara</strong> (Application Server), alojado en 
            <strong>Ubuntu Server</strong>. Interfase con <strong>NAVISION</strong>
            para consolidar datos en el ERP de la compañía. Código fuente 
            gestionado con <strong>servidor GitLab propio</strong>. Librerías CAD
            para la lectura automatizada de datos en planos de corte, como cotas
            y ubicación de casquillos y varillas. Preparación e impartición de
            diversos cursos de formación de OZ-MES en inglés al personal productivo
            y técnico de la planta en Nanjing`,
            `Desarrollo de <strong>otros softwares, derivados de OZ-MES</strong>,
            para cubrir necesidades en compañías del grupo: <strong>OZ-Medic</strong>,
            para el control contable de caja; <strong>OZ-ProNET</strong>, para el
            control de ocupación de salas, agenda médica y facturación (Bufetmedic Expansion S.L.).`,
            `Optimización en la <strong>infraestructura IT</strong>: transición de servidores 
            <strong>VMWare</strong> en 5 sedes y Data Warehouse local a servicios
            <strong>Microsoft SharePoint Online</strong>; migración de la 
            gestión de cuentas a <strong>AzureAD/Office 365</strong>; automatización
            de backups cloud/local con <strong>Microsoft PowerAutomate</strong>
            y <strong>RClone</strong>; gestión de proveedores y servicios externos.`,
          ],
        },
        {
          title: [
            'Proyectos Industriales',
            'Desarrollo de Software Industrial',
          ],
          year: '2000 - 2015',
          subtitle: [
            'ARGHOS Engineering, Consulting and Software (AERnnova group)',
            'PYSSA',
          ],
          details: [
            `<strong>SEAT Martorell</strong>: Desarrollo de servidores de datos,
            supervisión, monitorizado y reporting, PYMAN V8 Web Reporting, PYMAN
            V8 PyArgos, FERGAL PYMANSRV.`,
            `<strong>VW Navarra</strong>: Desarrollo de servidores Pyman Web Server.`,
            `<strong>KH Lloreda</strong>: paletización, sistema de robot-picking
            basado en PYMAN, con sistema de etiquetado automático de palets e
            interfase con almacén MECALUX.`,
            `<strong>ENERTRON/VPC (Valencia Power Converters)</strong>: sistema MES basado en PYMAN para la fabricación de cabinas eléctricas, con sistema 
            automatizado de control de AGVs y transelevador, e interfase con
            sistemas <strong>CAPTOR</strong> y <strong>SAP</strong>.`,
          ],
        },
      ],

      academicTitle: 'Formación Académica',
      academic: [
        {
          title: 'Ingeniero Técnico en Informática de Sistemas',
          year: '2015',
          entity: 'Universitat Oberta de Catalunya',
          logo: 'uoc',
          details: `Proyecto de Grado: Desarrollo en Dispositivos Móviles - Android<br />
          Itinerarios: Tecnología Computacional, Programación, Administración de Sistemas,
          Programación Orientada a Objetos, Gestión de Redes<br />`,
          leftLink: 'https://www.linkedin.com/school/uoc/',
          rightLink: 'https://www.uoc.edu/',
        },
        {
          title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
          year: '2001',
          entity: 'Institut Escola del Treball',
          logo: 'iet',
          details: 'Desarrollo de Aplicaciones Web',
          leftLink:
            'https://www.linkedin.com/school/institut-escola-del-treball/',
          rightLink: 'https://escoladeltreball.org/',
        },
        {
          title:
            'Técnico Superior en Administración de Sistemas Informáticos en Red',
          year: '2000',
          entity: 'Institut Escola del Treball',
          logo: 'iet',
          details: 'Administración de Sistemas Informáticos en Red',
          leftLink:
            'https://www.linkedin.com/school/institut-escola-del-treball/',
          rightLink: 'https://escoladeltreball.org/',
        },
      ],

      certificationTitle: 'Cursos y Certificaciones ',
      certification: [
        {
          title: 'Full Stack Open CI/CD',
          year: 'Aug 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's CI/CD part in 1 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/ae3753610f55012168f706b8bc05c3e1',
        },
        {
          title: 'Full Stack Open React Native',
          year: 'Jun 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's React Native part in 2 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/a6533fa902bfa3748e5cbd0f148ace54',
        },
        {
          title: 'Full Stack GraphQL',
          year: 'Apr 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's GraphQL part in 1 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/dac5ac6a094bdf74e9240237f9751c19',
        },
        {
          title: 'Full Stack Open 2023',
          year: 'Apr 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `This is to certificate that you have successfully completed the 7 ECTS online course with grade 5.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/12dff53307ab85fb1f5e5d7e842d9516',
        },
        {
          title: 'Full Stack Open TypeScript',
          year: 'Apr 2023',
          entity: 'University of Helsinki',
          logo: 'uoh',
          details: `Has successfully completed the course's TypeScript part in 1 ECTS credits.`,
          leftLink: 'https://www.helsinki.fi/en',
          rightLink:
            'https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/b81a965d6ab13be10f8b78d708ad9f77',
        },
        {
          title: 'Microsoft Certified: Power Platform App Maker Associate',
          year: 'Feb 2023',
          entity: 'Microsoft',
          logo: 'ms',
          details: `Earning the Power Platform App Maker Associate certification
          validates candidate skills and knowledge to build solutions to simplify,
          automate, and transform tasks and processes for themselves and their
          team where they have deep expertise in the solution domain.`,
          leftLink: 'https://learn.microsoft.com/es-es/credentials/',
          rightLink:
            'https://www.credly.com/badges/e5475702-06a8-4c22-a293-15dcd4ddcf12/',
        },
        {
          title: 'Front End Development Libraries',
          year: 'Jan 2023',
          entity: 'freeCodeCamp',
          logo: 'fcc',
          details: `Developer Certification on January 7, 2023<br />
          representing approximately 300 hours of work.`,
          leftLink: 'https://www.freecodecamp.org/',
          rightLink:
            'https://www.freecodecamp.org/certification/fccbff75bbc-30e2-4e2f-8f3e-a414f15c1668/front-end-development-libraries',
        },
        {
          title: 'Javascript Algorithms and Data Structures',
          year: 'Nov 2022',
          entity: 'freeCodeCamp',
          logo: 'fcc',
          details: `Developer Certification on November 22, 2022<br />
          representing approximately 300 hours of work.`,
          leftLink: 'https://www.freecodecamp.org/',
          rightLink:
            'https://www.freecodecamp.org/certification/fccbff75bbc-30e2-4e2f-8f3e-a414f15c1668/javascript-algorithms-and-data-structures',
        },
        {
          title: 'Responsive Web Design',
          year: 'Nov 2022',
          entity: 'freeCodeCamp',
          logo: 'fcc',
          details: `Developer Certification on November 10, 2022<br />
          representing approximately 300 hours of work.`,
          leftLink: 'https://www.freecodecamp.org/',
          rightLink:
            'https://www.freecodecamp.org/certification/fccbff75bbc-30e2-4e2f-8f3e-a414f15c1668/responsive-web-design',
        },
        {
          title: 'Pivotal Core Spring 5.0.b',
          year: 'Oct 2019',
          entity: 'Spring Latam',
          logo: 'spring',
          details: `Curso online en vivo de 32 horas impartido del 28 de Septiembre al 19 de Octubre de 2019.`,
          leftLink: 'https://www.springla.io/',
          rightLink:
            './src/assets/spring/Certificado_Jose_Antonio_Anacleto.pdf',
        },
      ],

      skillsTitle: 'Skills',
      skills: [
        {
          title: 'Fullstack',
          details: `Tecnologías, lenguages, frameworks y librerías relacionados
          con el desarrollo de backend, frontend y diferentes tipos de aplicaciones.`,
          logo: 'fullstack',
          skills: [
            { logo: 'html5', label: 'HTML5' },
            { logo: 'css3', label: 'CSS3' },
            { logo: 'js', label: 'JavaScript' },
            { logo: 'ts', label: 'TypeScript' },
            { logo: 'bootstrap', label: 'Bootstrap' },
            { logo: 'materialize', label: 'Materialize' },

            { logo: 'react', label: 'React' },
            { logo: 'vue', label: 'Vue' },
            { logo: 'vite', label: 'Vite' },
            { logo: 'angular', label: 'AngularJS' },
            { logo: 'jquery', label: 'jQuery' },

            { logo: 'java', label: 'Java' },
            { logo: 'spring', label: 'Spring' },
            { logo: 'nodejs', label: 'NodeJS' },
            { logo: 'graphql', label: 'Apollo / GraphQL' },
            { logo: 'rest', label: 'RestAPI / WebServices' },

            { logo: 'powerplatform', label: 'Microsoft Power Platform' },
            { logo: 'powerautomate', label: 'Microsoft Power Automate' },
            { logo: 'csharp', label: 'C#' },
            { logo: 'vbnet', label: 'VB.NET' },
          ],
        },
        {
          title: 'IDE / Source Control',
          details: `Entornos integrados de desarrollo, control de versiones y otras
            herramientas de desarrollo.`,
          logo: 'ide',
          skills: [
            { logo: 'vscode', label: 'Visual Studio Code' },
            { logo: 'visualstudio', label: 'Visual Studio' },
            { logo: 'netbeans', label: 'NetBeans' },
            { logo: 'eclipse', label: 'Eclipse' },
            { logo: 'intellij', label: 'IntelliJ' },
            { logo: 'git', label: 'Git' },
            { logo: 'github', label: 'GitHub' },
            { logo: 'gitlab', label: 'GitLab' },
          ],
        },
        {
          title: 'SGBD',
          details: 'Sistemas gestores de base de datos',
          logo: 'database',
          skills: [
            { logo: 'mongodb', label: 'MongoDB' },
            { logo: 'postgresql', label: 'PostgreSQL' },
            { logo: 'mysql', label: 'MySQL' },
            { logo: 'sqlserver', label: 'SQL Server' },
            { logo: 'oracle', label: 'Oracle' },
          ],
        },
        {
          title: 'Inteligencia de Negocio',
          details: 'Informes y análisis de datos.',
          logo: 'businessintelligence',
          skills: [
            { logo: 'jasperreports', label: 'Jasper Reports' },
            { logo: 'crystalreports', label: 'Crystal Reports' },
            { logo: 'cognospowerplay', label: 'Cognos Powerplay' },
          ],
        },
        {
          title: 'SO / Virtualización',
          details: 'Sistemas operativos y sistemas de virtualización.',
          logo: 'virtualization',
          skills: [
            { logo: 'windows', label: 'Windows 11 - 3.x' },
            { logo: 'ubuntu', label: 'Ubuntu' },
            { logo: 'linuxmint', label: 'Linux Mint' },
            { logo: 'os2warp', label: 'OS/2 Warp' },
            { logo: 'vmware', label: 'VMware' },
            { logo: 'docker', label: 'Docker' },
          ],
        },
        {
          title: 'Lenguages',
          logo: 'world',
          skills: [
            { logo: 'spanish', label: 'Español (Nativo)' },
            { logo: 'catalan', label: 'Catalán (Nativo)' },
            { logo: 'english', label: 'Inglés (Profesional)' },
          ],
        },
      ],

      hobbiesTitle: 'Aficiones',
      hobbies: [
        {
          title: 'Videojuegos',
          logo: 'xboxbg',
          skills: [
            { logo: 'simonbelmont', label: 'Retrogaming' },
            { logo: 'msx', label: 'MSX, mi ordenador de 8 bits favorito' },
            {
              logo: 'xbox',
              label: 'PC Gaming y emulación de consolas/arcades',
            },
          ],
        },
        {
          title:
            'Sintetizadores virtuales. Composición de música ambiente y electrónica.',
          logo: 'synthbg',
          skills: [
            { logo: 'bandlab', label: 'Bandlab' },
            { logo: 'cakewalk', label: 'Cakewalk SONAR' },
            { logo: 'vsynth', label: 'Virtual Synthesizers' },
            { logo: 'guitar', label: 'Spanish and acoustic guitar' },
          ],
        },
        {
          title: 'Listening music and podcasts',
          details:
            'New Retro Wave, Synthwave, 80s, 90s, 2000s, New Age, Industrial, Rock, Rap Metal',
          logo: 'headphones',
          skills: [
            { logo: 'newretrowave', label: 'New Retro Wave' },
            { logo: 'synthwave', label: 'Synthwave' },
            { logo: 'newage', label: 'New Age' },
            { logo: 'industrial', label: 'Industrial' },
            { logo: 'numetal', label: 'Nu Metal' },
            { logo: 'rock', label: 'Rock' },
            // { logo: 'd70', label: '70s' },
            // { logo: 'd80', label: '80s' },
            // { logo: 'd90', label: "90's" },
            // { logo: 'd2000', label: "2000's" },
            // { logo: 'videoclips', label: 'Videoclips' },
          ],
        },
        {
          title: 'Streaming Services',
          details: 'Cine, Series y Documentales',
          logo: 'streaming',
          skills: [
            { logo: 'netflix', label: 'Netflix' },
            { logo: 'hbomax', label: 'HBO Max' },
            { logo: 'primevideo', label: 'Prime Video' },
          ],
        },
      ],
    },
    creation: {
      title: 'Creación',
      subtitle: 'Detalles sobre mis aficiones',
      description:
        'En esta sección recopilo algunas de las publicaciones digitales más destacadas relacionadas con mis aficiones',
      creationMusic: 'Creaciones Musicales',
      creationRetrogaming: 'Gameplays MSX (ordenador de 8 bits)',
    },

    todo: {
      title: 'Tareas',
      subtitle: 'La más sencilla aplicación de Lista de Tareas',
      description: `Esta es una sencilla aplicación de Lista de Tareas
            basada en <strong>Arrays</strong> y en <strong>almacenamiento
            local</strong>. Incluye las acciones de añadir, eliminar, vaciar
            todo y búsqueda. Las tareas se muestran en una <strong>tabla con
            diseño flexible</strong>.`,
      search: 'Buscar tareas...',
      content: 'Contenido tarea...',
      tasks: 'Tareas',
      removeAll: 'Eliminar todas',
      removeAllWarning: 'Se van a eliminar todas las tareas. Continuar?',
    },
    counter: {
      title: 'Contador',
      subtitle: 'Una simple aplicación de contador',
      description: 'Una simple aplicación de contador',
      increment: 'Incremento',
      decrement: 'Decremento',
      clear: 'Reinicio',
      addSync: 'A.Sínc',
      addAsync: 'A.Asínc',
      addIfOdd: 'A.siImpar',
    },
    playground: {
      lorem: {
        loremTitle: 'Lorem',
        loremSubtitle: 'Contenido Lorem Ipsum',
        loremDescription: 'Esto es un generador aleatorio de Lorem Ipsum',
      },
    },
    footer: {
      bio: `Diseñado, desarrollado y desplegado con pasión por
      <strong>JoseA</strong> mientras aprende y disfruta con los más excitantes
      frameworks y librerías. Por ahora, éste es mi stack favorito.`,
    },
  },
  translations: {
    More: 'Más',
    Playground: 'Zona de Pruebas',
    Section: 'Sección',
    Footer: 'Pie de Página',
    'Todo List': 'Lista Tareas',
    Appearance: 'Apariencia',
    Language: 'Idioma',
    Clock: 'Reloj',
    'Clock Mode': 'Modo Reloj',
    Welcome: 'Bienvenido',
    Navigation: 'Navegación',
    Settings: 'Ajustes',
    'Please, Sign In': 'Por favor, inicia sesión',
    'Sign In': 'Entrar',
    'Sign Out': 'Salir',
    'To get started, edit <1>src/App.js</1> and save to reload.':
      'Starte in dem du, <1>src/App.js</1> editierst und speicherst.',
    'Welcome to React': 'Willkommen bei React und react-i18next',
    'Main Sections': 'Secciones Principales',
    'Secondary Sections': 'Secciones Secundarias',
  },
}
