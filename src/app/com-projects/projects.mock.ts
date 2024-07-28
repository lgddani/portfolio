export const projectsList: Project[] = [
    {
      img: '../../assets/img/proyecto1.jpg',
      alt: 'App para fiestas - App para beber',
      title: 'Trago Loco',
      description: 'Una divertida app con minijuegos de bebida, perfecta para disfrutar con amigos o familiares en reuniones y fiestas.',
      link: 'https://10038-rdenriquez2.github.io/trago_loco/',
      showButton: true
    },
    {
      img: '../../assets/img/proyecto2.jpg',
      alt: 'ESPE - página universidad',
      title: 'Página ESPE',
      description: 'Una página web principal para la Universidad de las Fuerzas Armadas ESPE, incluyendo los requirimientos de WCAG para fácil acceso a personas con discapacidad.',
      link: 'https://10038-rdenriquez2.github.io/pagina-espe/',
      showButton: true
    },
    {
      img: '../../assets/img/proyecto3.jpg',
      alt: 'Juego con tecnologías web',
      title: 'Puzzle',
      description: 'Un entretenido juego de rompecabezas desarrollado con tecnologías web, diseñado para desafiar y entretener a los jugadores.',
      link: 'https://10038-rdenriquez2.github.io/juego-memoria/',
      showButton: true
    },
    {
      img: '../../assets/img/proyecto4.jpg',
      alt: 'Comercio electrónico',
      title: 'E-Commerce',
      description: 'Una completa plataforma de comercio electrónico, con funcionalidades de navegación de productos, carrito de compras y gestión de pagos.',
      link: '',
      showButton: false
    },
    {
      img: '../../assets/img/proyecto5.jpg',
      alt: 'Sistema web para óptica',
      title: 'Sistema Óptica',
      description: 'Una solución integral para la gestión de una óptica, incluyendo inventario, registro de clientes y ventas.',
      link: '',
      showButton: false
    },
    {
      img: '../../assets/img/proyecto6.jpg',
      alt: 'API Rest de países',
      title: 'CRUD Países',
      description: 'Una aplicación que permite Crear, Leer, Actualizar y Eliminar registros de países, demostrando habilidades en el manejo de datos.',
      link: '',
      showButton: false
    }
]

export interface Project {
  img: String;
  alt: String;
  title: String;
  description: String;
  link: string;
  showButton: boolean;
}