const mobileMenu = document.querySelector('.mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.querySelector('.desktop_menu');
  desktopMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});
// Function to handle clicks outside the modal
function outsideClick(event) {
  const modal = document.getElementById('project_modal');
  if (event.target === modal) {
    modal.remove();
  }
}

// Function to close the modal
function closeModal() {
  window.removeEventListener('click', outsideClick);
  const modal = document.getElementById('project_modal');

  if (modal) {
    closeModal(); modal.remove();
  }
}

// Function to open the modal
function openModal(project) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = 'project_modal';

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close_btn');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', closeModal);
  modalContent.appendChild(closeButton);

  const modalImage = document.createElement('img');
  modalImage.classList.add('modal_image');
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalContent.appendChild(modalImage);

  const modalTitle = document.createElement('h1');
  modalTitle.textContent = project.title;
  modalContent.appendChild(modalTitle);

  const list = document.createElement('ul');
  list.id = 'modaltechnologies';
  project.technologies.forEach((tech) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = tech;
    list.appendChild(listItem);
  });
  modalContent.appendChild(list);

  const modalDescription = document.createElement('p');
  modalDescription.classList.add('modal_description');
  modalDescription.textContent = project.description;
  modalContent.appendChild(modalDescription);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.style.display = 'flex';

  const modalLinks = document.createElement('div');
  modalLinks.classList.add('modal_links');
  const githubLink = document.createElement('a');
  githubLink.classList.add('abt_btn');
  githubLink.textContent = 'See Source';
  githubLink.href = project.githubLink;
  githubLink.target = '#';
  modalLinks.appendChild(githubLink);

  const liveLink = document.createElement('a');
  liveLink.classList.add('abt_btn');
  liveLink.textContent = 'See Live';
  liveLink.href = project.liveLink;
  liveLink.target = '#';
  modalLinks.appendChild(liveLink);
  modalContent.appendChild(modalLinks);

  // Start listening for clicks outside the modal
  window.addEventListener('click', outsideClick);
}

// Object to store project card properties
const projectCards = [
  {
    image: './assets/images/portfolio_background.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'A platform to share and celebrate stories through multiple posts.',
    githubLink: '#',
    liveLink: '#',
  },
  {
    image: './assets/images/portfolio_background.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'A platform to share and celebrate stories through multiple posts.',
    githubLink: '#',
    liveLink: '#',
  },
  {
    image: './assets/images/portfolio_background.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'A platform to share and celebrate stories through multiple posts.',
    githubLink: '#',
    liveLink: '#',
  },
  {
    image: './assets/images/portfolio_background.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'A platform to share and celebrate stories through multiple posts.',
    githubLink: '#',
    liveLink: '#',
  },
  {
    image: './assets/images/portfolio_background.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'A platform to share and celebrate stories through multiple posts.',
    githubLink: '#',
    liveLink: '#',
  },
  {
    image: './assets/images/portfolio_background.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'A platform to share and celebrate stories through multiple posts.',
    githubLink: '#',
    liveLink: '#',
  },

];

// Function to create a project card
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const picture = document.createElement('img');
  picture.src = project.image;
  picture.alt = project.title;
  card.appendChild(picture);
  const title = document.createElement('h3');
  title.innerHTML = project.title;
  card.appendChild(title);
  const list = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    list.appendChild(listItem);
  });
  card.appendChild(list);
  const cardButton = document.createElement('button');
  cardButton.innerHTML = 'See Project';
  cardButton.type = 'button';
  card.appendChild(cardButton);
  cardButton.addEventListener('click', () => openModal(project));
  return card;
}

// Function to render project cards
function renderProjectCard() {
  const projectCardsContainer = document.querySelector('.projects_cards');
  projectCards.forEach((project) => {
    const projectCard = createProjectCards(project);
    projectCardsContainer.appendChild(projectCard);
  });
}

document.addEventListener('DOMContentLoaded', renderProjectCard);

// Object to store about card properties
const aboutCards = [
  {
    image: './assets/images/icon-languages.svg',
    heading: 'Languages',
    language: ['Javascript', 'Ruby on Rails', 'HTML', 'CSS'],
  },
  {
    image: './assets/images/icon-frameworks.svg',
    heading: 'Frameworks',
    language: ['React.js', 'Ruby on Rails', 'RSpec', 'Capybara', 'Selenium'],
  },
  {
    image: './assets/images/icon-skills.svg',
    heading: 'Skills',
    language: ['Database Management', 'Version Control', 'CLI', 'Web Development', 'API Design'],
  },
];

// Function to create an about card
function createAboutCards(about) {
  const cards = document.createElement('div');
  cards.classList.add('about_card');
  const pics = document.createElement('img');
  pics.src = about.image;
  pics.alt = about.heading;
  cards.appendChild(pics);
  const head = document.createElement('h3');
  head.innerHTML = about.heading;
  cards.appendChild(head);
  const lists = document.createElement('ul');
  about.language.forEach((content) => {
    const listsItems = document.createElement('li');
    listsItems.innerHTML = content;
    lists.appendChild(listsItems);
  });
  cards.appendChild(lists);
  return cards;
}

// Function to render About cards
function renderaboutCards() {
  const abtCard = document.querySelector('.about_cards');
  aboutCards.forEach((about) => {
    const aboutCard = createAboutCards(about);
    abtCard.appendChild(aboutCard);
  });
}

document.addEventListener('DOMContentLoaded', renderaboutCards);