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
const projectImages = document.querySelector('.project-images img');
const main = document.querySelector('main');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

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

arr = []

let s0 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_223133_mxT1V70CGKp.png?updatedAt=1628961790217";
let s1 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_223335_jq73qauGm.png?updatedAt=1628962480737"
let s2 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_223311_s8PUF7AtHLO.png?updatedAt=1628962482454";
let s3 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_232812_1QFo7HYvHBL.png?updatedAt=1628964013151";
let s4 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_232831_Ed48pfWR-.png?updatedAt=1628964012204";
let s5 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_232844_Q33x6PviT3Q.png?updatedAt=1628964011291";
let s6 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_232920_bVQ_W7eez.png?updatedAt=1628964010315";
let s7 = "https://ik.imagekit.io/ketanprakash001/Portfolio_assets/Screenshot_20210814_232938_3va6WQ2aTjS.png?updatedAt=1628964009902";

arr.push(s0);
arr.push(s1);
arr.push(s2);
arr.push(s3);
arr.push(s4);
arr.push(s5);
arr.push(s6);
arr.push(s7);


let i = 0;

projectImages.src = arr[i];

leftArrow.addEventListener('click', (e) => {
  if (i !== 0){
    i--;
  }
  else {
    i = 7;
  }
  projectImages.src = arr[i];
})

rightArrow.addEventListener('click', (e) => {
  if (i !== 7){
    i++;
  }
  else {
    i = 0;
  }
  projectImages.src = arr[i];
})