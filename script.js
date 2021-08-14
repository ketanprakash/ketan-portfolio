const githubImage = document.querySelector('.github-image');
const linkedInImage = document.querySelector('.linked-in-image');
const aboutLink = document.querySelector('.about-link');
const projectLink = document.querySelector('.project-link');
const skillsLink = document.querySelector('.skills-link');
const nav = document.querySelector('nav');
const aboutSection = document.querySelector('.about');
const projectsSection = document.querySelector('.projects');
const skillsSection = document.querySelector('.skills');
const navSmall = document.querySelector('.nav-small');

const main = document.querySelector('main');

githubImage.addEventListener('click', () => {
  window.open("https://github.com/ketanprakash", "_blank");
})

linkedInImage.addEventListener('click', () => {
  window.open("https://www.linkedin.com/in/ketan-prakash-36ba89202/", "_blank");
})

aboutLink.addEventListener('click', () => {
  projectLink.classList.remove('nav-link-active');
  skillsLink.classList.remove('nav-link-active');
  aboutLink.classList.add('nav-link-active');
  skillsSection.classList.add('does-not-exist');
  projectsSection.classList.add('does-not-exist');
  aboutSection.classList.remove('does-not-exist');
})

projectLink.addEventListener('click', () => {
  aboutLink.classList.remove('nav-link-active');
  skillsLink.classList.remove('nav-link-active');
  projectLink.classList.add('nav-link-active');
  skillsSection.classList.add('does-not-exist');
  projectsSection.classList.remove('does-not-exist');
  aboutSection.classList.add('does-not-exist');
});

skillsLink.addEventListener('click', () => {
  aboutLink.classList.remove('nav-link-active');
  projectLink.classList.remove('nav-link-active');
  skillsLink.classList.add('nav-link-active');
  aboutSection.classList.add('does-not-exist');
  projectsSection.classList.add('does-not-exist');
  skillsSection.classList.remove('does-not-exist');
});

let x = window.matchMedia("(max-width: 768px)");

if (x.matches){
  // nav.classList.add('does-not-exist');
  nav.classList.add('invisible');
  main.addEventListener('click', (e)  => {
    // nav.classList.add('does-not-exist');
    nav.classList.add('invisible');
  })  
}

navSmall.addEventListener('click', () => {
  // nav.classList.toggle('does-not-exist');
  nav.classList.toggle('invisible');
  // console.log(nav);
})