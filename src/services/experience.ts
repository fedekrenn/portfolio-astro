const tags = {
  ANGULAR: {
    name: "Angular",
    image: "angular.svg",
  },
  DJANGO: {
    name: "Django",
    image: "django.svg",
  },
  EXPRESS: {
    name: "Express",
    image: "express.svg",
  },
  FIREBASE: {
    name: "Firebase",
    image: "firebase.svg",
  },
  JAVA: {
    name: "Java",
    image: "java.svg",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    image: "javascript.svg",
  },
  MATERIAL: {
    name: "Material UI",
    image: "material-ui.svg",
  },
  MONGO: {
    name: "MongoDB",
    image: "mongodb.svg",
  },
  MYSQL: {
    name: "MySQL",
    image: "mysql.svg",
  },
  NODE: {
    name: "NodeJS",
    image: "nodejs.svg",
  },
  PYTHON: {
    name: "Python",
    image: "python.svg",
  },
  REACT: {
    name: "React",
    image: "react.svg",
  },
  SASS: {
    name: "Sass",
    image: "sass.svg",
  },
  SEQUELIZE: {
    name: "Sequelize",
    image: "sequelize.svg",
  },
  SPRING: {
    name: "Spring Boot",
    image: "spring.svg",
  },
  SQLITE: {
    name: "SQLite",
    image: "sqlite.svg",
  },
  TAILWIND: {
    name: "TailwindCSS",
    image: "tailwindcss.svg",
  },
  SWIPER: {
    name: "SwiperJS"
  },
  FORMSPREE: {
    name: "Formspree"
  },
  AUTOANIMATE: {
    name: "AutoAnimate"
  },
  AUTH: {
    name: "Firebase Auth"
  },
  NODEMAILER: {
    name: "Nodemailer"
  }
}

export const data = [
  {
    id: 1,
    title: "Hogar el Alba",
    client: "Hogar el Alba",
    description: "Sitio web institucional para el Hogar El Alba, Asociación Civil fundada por William Case Morris y dedicada, desde 1925, a brindar un espacio de contención, crecimiento, abrigo y protección a niños, niñas y adolescentes con derechos vulnerados.",
    meta: "Descubre cómo el Hogar El Alba ofrece contención y protección a niños y adolescentes vulnerables desde 1925. Conoce nuestra historia de apoyo y crecimiento",
    date: "Marzo 2023",
    tecnologies: [tags.REACT],
    newTool: tags.SWIPER,
    stack: "Frontend",
    deploy: "https://hogarelalba.org.ar/",
    repository: "https://github.com/fedekrenn/hogar-el-alba",
    image: "1-hogar-el-alba.webp"
  },
  {
    id: 2,
    title: "Alkimia Studio",
    client: "Alkimia Studio",
    description: "Landing page para la agencia de márketing digital cordobesa 'Alkimia Estudio'. Junto a un equipo de UX-UI, PM y desarrolladores realizamos el sitio web de la empresa que refleja su misión, cuenta los servicios que ofrecen, despliega su portfolio y brinda la opción de contactarse con la empresa.",
    meta: "Alkimia Estudio, equipo de expertos, ofrece soluciones de marketing digital en Córdoba. Explora nuestra web y contáctanos para potenciar tu marca.",
    date: "Agosto 2022",
    tecnologies: [tags.JAVASCRIPT],
    newTool: tags.FORMSPREE,
    stack: "Frontend",
    deploy: "http://alkimiaestudio.com/",
    repository: "https://github.com/fedekrenn/Alkimia-estudio",
    image: "2-alkimia.webp"
  },
  {
    id: 3,
    title: "Track360",
    client: "Empresas de atención al cliente",
    description: "Sistema para carga de gestiones de atención al cliente para empresas de contact center. El objetivo es resolver el problema de unificar la persistencia de datos, dar seguimiento y trazabilidad a través de gestión de usuarios. Además cuentra con gráfica para ver la trazabilidad de las gestiones.",
    meta: "Optimiza la atención al cliente con el sistema de gestión track360, unificando datos y ofreciendo seguimiento detallado. Solución integral para empresas",
    date: "Julio 2023",
    tecnologies: [tags.REACT, tags.FIREBASE, tags.MATERIAL],
    newTool: tags.AUTOANIMATE,
    stack: "Frontend",
    deploy: "https://control-gestiones-mac.vercel.app/",
    repository: "https://github.com/fedekrenn/control-gestiones",
    image: "3-track-360.webp"
  },
  {
    id: 4,
    title: "Gestión de restaurantes",
    client: "Proyecto personal",
    description: "Webapp permite administrar un modelo de negocio de restaurante y allí poder consultar, crear, modificar y eliminar recetas de cocina, cociner@s, restaurantes (de por ejemplo una red de partners) y proveedores. Cuenta con un registro para que los usuarios puedan hacer CRUD de los modelos.",
    meta: "Gestiona tu restaurante de manera eficiente. Consulta, crea, edita y elimina recetas, cocineros, restaurantes y proveedores fácilmente. Con sistema de registro.",
    date: "Septiembre 2023",
    tecnologies: [tags.PYTHON, tags.DJANGO, tags.SQLITE, tags.JAVASCRIPT],
    newTool: tags.DJANGO,
    stack: "Fullstack",
    deploy: "https://cocinando-ando.vercel.app/",
    repository: "https://github.com/fedekrenn/django-mvt-cocina",
    image: "4-gestion-cocina.webp"
  },
  {
    id: 5,
    title: "Krennflix",
    client: "Proyecto personal",
    description: "Single Page Application donde podés conocer las últimas películas, ver detalles, valoraciones, críticas, trailers, guardarlas en favortitos, aplicar filtros de categoría y una barra de búsqueda para encontrar tus películas favoritas.",
    meta: "Descubre las últimas películas y series. Encuentra y añade a favoritos fácilmente tu contenido preferido. ¡Explora el mundo del cine hoy!",
    date: "Diciembre 2022",
    tecnologies: [tags.REACT, tags.SASS, tags.FIREBASE],
    newTool: tags.AUTH,
    stack: "Frontend",
    deploy: "https://krennflix-peliculas.vercel.app/",
    repository: "https://github.com/fedekrenn/api-movieDb-peliculas",
    image: "5-krennflix.webp"
  },
  {
    id: 6,
    title: "Bike Store",
    client: "Proyecto personal",
    description: "E-commerce de bicicletas. Permite a los usuarios conocer un catálogo de productos, filtrarlos, agregarlos al carrito, y realizar el checkout.",
    meta: "Explora nuestro store de bicicletas, con un amplio catálogo y opciones de compra seguras. Encuentra tu bicicleta ideal y completa tu pedido fácilmente.",
    date: "Agosto 2022",
    tecnologies: [tags.REACT, tags.FIREBASE, tags.MATERIAL],
    newTool: tags.MATERIAL,
    stack: "Frontend",
    deploy: "https://ecommerce-react-seven.vercel.app/",
    repository: "https://github.com/fedekrenn/ecommerce-react",
    image: "6-bike-store.webp"
  },
  {
    id: 7,
    title: "API Rest - Ecommerce",
    client: "Proyecto personal",
    description: "API + Frontend para gestionar un ecommerce. Cuenta con funcionalidad de logueo/creación de cuenta con un tiempo de sesión configurable, además de tener un perfil administrador. Se puede puede ver el propio historial de pedidos. Además cuenta con una sección de chat donde cada usuario se puede poner en contacto con el administrador para realizar consultas en tiempo real.",
    meta: "Potencia tu e-commerce con nuestra API. Gestiona fácilmente logueo, perfiles de usuario, historial de pedidos y chat en tiempo real con el administrador. ",
    date: "Enero 2023",
    tecnologies: [
      tags.NODE,
      tags.EXPRESS,
      tags.MONGO,
    ],
    newTool: tags.NODEMAILER,
    stack: "Backend",
    deploy: "https://proyecto-final-mtbh.onrender.com/",
    repository: "https://github.com/fedekrenn/backend-api-rest",
    image: "7-api-ecommerce.webp"
  },
  {
    id: 8,
    title: "Sorteo equipos",
    client: "Proyecto personal",
    description: "Aplicación web para gestionar el sorteo de parejas/equipos para juegos de fútbol virtual como Fifa, PES, etc. Podemos sortear sólo equipos random o bien ingresar nombres de jugadores y que se les asigne un equipo aleatorio, como así también jugar por parejas.",
    meta: "Organiza el sorteo para juegos de fútbol virtual. Equipos/jugadores aleatorios para las partidas. ¡Simplifica la organización y aumenta la diversión!",
    date: "Febrero 2024",
    tecnologies: [tags.REACT],
    newTool: tags.TAILWIND,
    stack: "Frontend",
    deploy: "https://sorteo-equipos.vercel.app/",
    repository: "https://github.com/fedekrenn/sorteo-equipos",
    image: "8-sorteo-equipos.webp"
  },
  {
    id: 9,
    title: "API Rest - Gestión Biblioteca",
    client: "Proyecto personal",
    description: "Api de librerías y libros, con la posibilidad de crear, editar, eliminar y listar librerías y libros. Con función de registro/logueo de users para operaciones que requieran autenticación.",
    meta: "Descubre la API de gestión de librerías. Crea, edita y elimina tus colecciones. Accede con seguridad para operaciones autenticadas ¡Explora el mundo de la lectura!",
    date: "Junio 2023",
    tecnologies: [
      tags.NODE,
      tags.EXPRESS,
      tags.SQLITE,
    ],
    newTool: tags.SEQUELIZE,
    stack: "Backend",
    deploy: null,
    repository: "https://github.com/fedekrenn/library-api",
    image: "9-library-api.webp"
  },
  {
    id: 10,
    title: "CV editable",
    client: "Proyecto personal",
    description: "Proyecto fullstack para crear un CV online. El objetivo es que cada usuario pueda crear su CV, agregarlo, eliminarlo, modificarlo y compartirlo.",
    meta: "Crea, modifica y comparte tu CV online con nuestra plataforma fullstack. Personaliza tu currículum fácilmente y destaca tus habilidades.",
    date: "Septiembre 2022",
    tecnologies: [tags.ANGULAR, tags.JAVA, tags.SPRING, tags.MYSQL],
    newTool: tags.SPRING,
    stack: "Fullstack",
    deploy: null,
    repository: "https://github.com/fedekrenn/Portfolio-AP-Backend",
    image: "10-cv-fullstack.webp"
  }
]