//enables closing burger menu by clicking outside of it
document.addEventListener('click', (event) => {
  const links = document.getElementById('links');
  const icon = document.getElementById('icon');
  if (!links.classList.contains('hidden') && !icon.contains(event.target)) {
    links.classList.add('hidden');
  }
});

const toggleMenu = () => {
  const x = document.getElementById('links');
  if (x.classList.contains('hidden')) {
    x.classList.remove('hidden');
  } else {
    x.classList.add('hidden');
  }
};

const focusAttention = () => {
  const icons = document.querySelectorAll('.contact-ico');
  icons.forEach((icon) => icon.classList.add('fade'));
  setTimeout(
    () => icons.forEach((icon) => icon.classList.remove('fade')),
    1000
  );
};

const scrollFocus = () => {
  window.scrollTo(0, 0);
  setTimeout(() => focusAttention(), window.scrollY / 1.5); // detects how far window is scrolled down and changes delay
};

// expands section about me
const toggleSection = () => {
  const x = document.getElementById('additional-info');
  if (x.classList.contains('slideup')) {
    x.classList.remove('slideup');
    x.classList.add('slidedown');
    setTimeout(() => x.scrollIntoView(), 500);
  } else {
    x.classList.remove('slidedown');
    x.classList.add('slideup');
  }
};

// couldn't add event listener the usuall way as HTML was not build by that time(not every time, just most of the time!!!)
window.onload = () => {
  const contact = document.querySelector('#contact-button');
  const burgerMenu = document.querySelector('#icon');
  const moreInfo = document.querySelector('#more-info');
  contact.addEventListener('click', scrollFocus);
  burgerMenu.addEventListener('click', toggleMenu);
  moreInfo.addEventListener('click', toggleSection);
};

const projects = document.querySelectorAll('.project');

projects.forEach((element) => {
  element.style.opacity = 0;
  console.log('changed opacity to 0');
});

const projectInView = (project, percentageScroll = 100) => {
  const projectTop = project.getBoundingClientRect().top;
  const projectBottom = project.getBoundingClientRect().bottom;
  return (
    projectTop <=
      (window.innerHeight || document.documentElement.clientHeight) *
        (percentageScroll / 100) &&
    projectBottom >=
      (window.innerHeight || document.documentElement.clientHeight) *
        (percentageScroll / 300)
  );
};

const displayScrollElement = (project) => {
  project.classList.remove('slide-out-right');
  project.classList.add('scrolled');
};
const hideScrollElement = (project) => {
  project.classList.remove('scrolled');
  project.classList.add('slide-out-right');
};

const handleScrollAnimation = () => {
  projects.forEach((project) => {
    if (projectInView(project, 75)) {
      displayScrollElement(project);
    } else {
      if (project.classList.contains('scrolled')) hideScrollElement(project);
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});
