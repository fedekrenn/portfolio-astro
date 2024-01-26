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
  },
  SNOWFALL: {
    name: "React Snowfall"
  }
}

export const data = [
  {
    id: 1,
    title: "Hogar el Alba",
    client: "Hogar el Alba",
    description: "Sitio web institucional para el Hogar El Alba, Asociación Civil fundada por William Case Morris y dedicada, desde 1925, a brindar un espacio de contención, crecimiento, abrigo y protección a niños, niñas y adolescentes con derechos vulnerados.",
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
    date: "Septiembre 2023",
    tecnologies: [tags.PYTHON, tags.DJANGO, tags.SQLITE, tags.JAVASCRIPT],
    newTool: tags.DJANGO,
    stack: "Fullstack",
    deploy: "https://cocinando-ando.vercel.app/",
    repository: "https://github.com/fedekrenn/django-mvt-cocina",
    image: "4-django.webp"
  },
  {
    id: 5,
    title: "Krennflix",
    client: "Proyecto personal",
    description: "Single Page Application donde podés conocer las últimas películas, ver detalles, valoraciones, críticas, trailers, guardarlas en favortitos, aplicar filtros de categoría y una barra de búsqueda para encontrar tus películas favoritas.",
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
    title: "Lista de regalos navideños",
    client: "Proyecto personal",
    description: "Aplicación web para gestionar una lista de regalos navideños. El objetivo es que cada usuario pueda crear su lista de regalos, agregarlos, eliminarlos, marcarlos como comprados y compartirlos con sus amigos y familiares.",
    date: "Diciembre 2023",
    tecnologies: [tags.REACT, tags.MATERIAL],
    newTool: tags.SNOWFALL,
    stack: "Frontend",
    deploy: "https://adviency-hazel.vercel.app/",
    repository: "https://github.com/fedekrenn/adviency",
    image: "8-regalos-navidad.webp"
  },
  {
    id: 9,
    title: "API Rest - Gestión Biblioteca",
    client: "Proyecto personal",
    description: "Api de librerías y libros, con la posibilidad de crear, editar, eliminar y listar librerías y libros. Con función de registro/logueo de users para operaciones que requieran autenticación.",
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
    date: "Septiembre 2022",
    tecnologies: [tags.ANGULAR, tags.JAVA, tags.SPRING, tags.MYSQL],
    newTool: tags.SPRING,
    stack: "Fullstack",
    deploy: null,
    repository: "https://github.com/fedekrenn/Portfolio-AP-Backend",
    image: "10-cv-fullstack.webp"
  }
]