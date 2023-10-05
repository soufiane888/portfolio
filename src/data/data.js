import { GitHub, LinkedIn } from '@material-ui/icons';

export const heroInfo = {
  name: 'Soufiane SADDIK',
  image: '/images/myImage.jpeg',
  title: [
    'Développeur Fullstack',
    'Ingenieur DevOps',
    'Développeur Java/Angular',
    'Développeur React/NodeJS',
      ],
  contacts: [
    {
      id: 1,
      name: 'GitHub',
      icon: GitHub,
      username: 'soufiane888',
      link: 'https://github.com/soufiane888',
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedIn,
      username: 'soufiane-saddik-a28b981b9',
      link: 'https://www.linkedin.com/in/soufiane-saddik-a28b981b9/',
    },
  ],
};

export const resumes = [
  {
    id: 1,
    year: 'Avril 2023 - Présent',
    role: 'Développeur Java/DevOps',
    companyName: 'Capgemini',
    companyUrl: 'https://www.capgemini.com/',
    description:
      "J'ai intégré capgimini après une formation Java/DevOps où j'ai pu consolidé mes connaissances sur les différent techno du cloud (AWS, Ansible, kubernetes...), monté en compétences en Java et j'ai obtenu la certification Devops foundation et je me suis formé et certifier AWS cloud practioner."
  },
  {
    id: 2,
    year: 'Janvier 2022 - Novembre 2022',
    role: 'Développeur Fullstack React',
    companyName: 'La Capsule',
    companyUrl: 'https://www.lacapsule.fr/',
    description:
      "Bootcamp durant lequel j'ai appris le développement web en construisant des produits tech avec React/NodeJs. C'est apprendre à coder avec l'approche par projet ou Project-Based Learning. À travers une dizaine de projets, j'ai appris à coder en immersion complète dans un environement Agile/Scrum. Chaque jour, les nouvelles notions sont immédiatement mises en pratique au sein d’un projet que je développe."
  },
  {
    id: 3,
    year: 'janvier 2021 - Decembre 2021',
    role: 'Développeur Web',
    companyName: 'Hexagone Digitale',
    companyUrl: 'https://hexagonedigitale.com/',
    description:
      "Stage de 2 mois pour la validation du Titre de Développeur web et web mobile + première expérience d'un CDD de 9 mois en poste de  développeur Java/Angular qui ma permi d'approfondir plus mes connaissance en développement et monter en compétences en Java et angular dans un contexte agile/scrum."
  },
  {
    id: 4,
    year: 'Septembre 2010 - Aout 2020',
    role: 'Téchnicien Télécom',
    companyName: 'RT.Télécom',
    companyUrl: 'https://rttelecom.com/',
    description:
      "Technicien télécom itinérant sur le réseau cuivre d'orange. Je m'occupé des installations et dépannages des lignes téléphoniques et ADSL chez les particuliers et professionnelles, la vérification de la conformité des installations chez les abonnés par rapport à la demande,renseignement des supports de suivi des interventions et la transmission des informations et rapport au service concerné"
  },
];

export const educations = [
  {
    id: 1,
    year: 'Janvier 2022 - Avril 2022',
    universityName: 'La Capsule',
    department: 'Développeur fullstack JS Chef de projet',
    description: 'Titre RNCP de BAC+4',
  },
  {
    id: 2,
    year: 'Aout 2020 - Mars 2021',
    universityName: 'NextFormation',
    department: 'Développeur Web et web Mobile',
    description: 'Titre RNCP de BAC+2',
  },
  {
    id: 3,
    year: 'Septembre 2008 - Juin 2009',
    universityName: 'Université Libre de Liège',
    department: 'Master en Biotechnologies et Biologie appliquée',
    description: 'Master II',
  },
];

export const projects = [
  {
    id: 1,
    image: '/images/todoAppReactWithFirebase.png',
    name: 'Todo App',
    description: `This is a simple Todo app. You can store your todo list. Also you can Add, Edit,\
     Delete and View. As front end I used JavaScript library called 'React'. For designing I used\
     'Material-UI'. And Realtime Database or Cloud Firestore I used 'Firebase'. That's why the app is \
     so faster and robust.`,
    tools: ['javascript', 'react', 'firebase'],
    live: 'https://react-firebase-todo-app-d37d1.web.app/',
    source: 'https://github.com/sakilk130/react-firebase-todo-app',
  },
  {
    id: 2,
    image: '/images/reactWeatherApp.png',
    name: 'Weather App',
    description: `This is a Weather app. Where you can search a city and see current weather temperature, \
    wind speed etc. As front end I used JavaScript library called 'React'. I used 'OpenWeather' APIs For request \
    data and  display data.`,
    tools: ['javascript', 'react'],
    live: 'https://react-weather-app-v1.netlify.app/',
    source: 'https://github.com/sakilk130/react-weather-app',
  },
  {
    id: 3,
    image: '/images/portfolioUsingReact.png',
    name: 'My Portfolio Website',
    description: `This is my Portfolio Website. Also this is a part of projects. Where people can see some information \
    about me. There are 6 pages like Home, Resume, Portfolio, Contacts, Skills and Educations. For this project i \
    used 'React' for front end and 'Material-UI'.`,
    tools: ['javascript', 'react'],
    live: 'https://sakilkhan.netlify.app/',
    source: 'https://github.com/sakilk130/react-portfolio-website',
  },
];

export const skills = [
  {
    title: 'HTML',
    logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
  },
  {
    title: 'JavaScript',
    logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
  },
  {
    title: 'MongoDB',
    logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg',
  },

  {
    title: 'CSS',
    logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
  },
  {
    title: 'TypeScript',
    logo: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg',
  },
  {
    title: 'Firebase',
    logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  },
  {
    title: 'Bootstrap',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
  },
  {
    title: 'ReactJS',
    logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg',
  },
  // msql
  {
    title: 'MySQL',
    logo: 'https://seeklogo.com/images/M/mysql-logo-69B39F7D18-seeklogo.com.png',
  },

  {
    title: 'Material-UI',
    logo: 'https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667',
  },

  {
    title: 'NodeJS',
    logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  },
  {
    title: 'PHP',
    logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg',
  },
  {
    title: 'VS Code',
    logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg',
  },

  {
    title: 'ExpressJS',
    logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
  },

  {
    title: 'Git',
    logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  },
  {
    title: 'Linux',
    logo: 'https://www.freepnglogos.com/uploads/linux-png/file-icons-flat-linux-svg-wikimedia-commons-6.png',
  },
  {
    title: 'npm',
    logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg',
  },
  {
    title: 'GitHub',
    logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
  },
];
