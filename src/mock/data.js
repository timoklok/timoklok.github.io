import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Timo Klok | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: ' I\'m a developer based in Utrecht (nl). ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi 👋, my name is',
  name: 'Timo Klok',
  subtitle1: 'I\'m ',
  subtitle2: 'front-end developer',
  subtitle3: ', based in Utrecht, NL',
  cta: 'short summary',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-tk.jpg',
  paragraphOne: 'Front-end developer with a background in (motion-) design, over a decade of work experience and a pasison for purpose-driven projects and accessibility.',
  paragraphTwo: 'Besides my technical trackrecord, I have experience in mentoring, product ownership, facilitating hackathons & Google design sprints. I enjoy solving problems, enabling others to do so, and generally discussing tech from a user\'s perspective.',
  paragraphThree: 'AFK you\'ll probably find me on a <a target="_blank" href="https://www.instagram.com/p/Bh2EoL9n9rQ/">bike</a>, or with a <a target="_blank" href="https://www.facebook.com/riverdistrictmusic/photos/t.1281742892/1054020127971038">bassguitar</a> around my shoulders.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'vpro1.jpg',
    title: 'VPRO ',
    info: 'For several years, I was part of the digital team at Netherlands\' most progressive broadcaster. We continuously maintained & improved the main VPRO platform as well as developing program specific one-off sites and apps',
    info2: '',
    tags: ['front-end', 'React', 'ES6', 'Node/NPM'],
    url: 'https://www.vpro.nl'
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'kortebroek1.png',
    title: 'Kan ik een korte broek aan?',
    info: 'Twitterbot and website that answers arguable one of the most important questions in life, "Can I wear shorts today?" Serves 22k tweeps every day.',
    info2: '',
    url: 'https://twitter.com/kortebroek',
    urlTitle: 'Twitter',
    tags: ['twitter API', 'React', 'node']
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'poms1.jpg',
    title: 'POMS ',
    info: ' POMS (Publieke Omroep Media Service) is the meta-data application for all public broadcasters in the Netherlands, for which developed the GUI using AngularJS',
    info2: 'Image by designer Niels Pikker',
    tags: ['front-end', 'angularJS']
    //url: ''
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rd2.png',
    title: 'Riverdistrict',
    info: 'Together with designer Jasper Jongeling, I developed the website for my indie band Riverdistrict. Proud to have received a bronze medal in the European Design Awards for it.',
    info2: '',
    url: 'https://riverdistrict.breun.nl',
    urlTitle: 'dive in',
    tags: ['front-end', 'hobby project', 'music']
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'hackathon1.jpg',
    title: 'Design Sprints & Hackathons',
    info: 'I don\'t only enjoy solving problems through developing, but also by facilitating others to do so. I have experience with facilitating design sprints and hackathons. ',
    info2: '',
    url: '',
    urlTitle: 'look & listen',
    tags: []
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'spieker1.jpg',
    title: 'Hotel Spieker: a interactive smart speaker whodunnit',
    info: 'Hotel Spieker was an investigation in the narrative & game possibilities offered by smart speakers. This whodunnit-game was specifically designed to be played with a group.',
    info2: '(developed at VPRO)',
    url: 'https://www.vpro.nl/medialab/projecten/overzicht/hotel-spieker.html',
    urlTitle: 'more info',
    tags: ['JS', 'Google Dialogflow']
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ongesigneerd4.jpg',
    title: 'Ongesigneerd',
    info: 'Interactive fictional map for VPRO\'s podcast Ongesigneerd, that highlights (overlooked) design objects found in everyday urban life.',
    info2: 'Illustrations by Sylvain Tegroeg.',
    url: 'https://files.vpro.nl/ongesigneerd/',
    urlTitle: 'look & listen',
    tags: ['front-end', 'leaflet']
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },

  {
    id: uuidv1(),
    img: 'bello1-new.jpg',
    title: '"The only thing we fear..." Cycling cap',
    info: 'As a cycling friendly Brewpub, De Kromme Haring commissioned me to design this Shitty Beer cap. Now commonly seen in the Utrecht region..  ',
    info2: '',
    url: 'https://www.bellocyclist.co.uk/product/de-kromme-haring-x-bello-cyclist-cycling-cap/?v=796834e7a283',
    urlTitle: 'order',
    tags: ['hobby project']
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would like to work with me, or hear what I\'m up to at the moment? Great!',
  btn: 'Get in touch',
  email: 'mail@timoklok.nl',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/timoklok/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/timoklok/',
    },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
