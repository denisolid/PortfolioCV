import project1 from '../img/projects/1.jpg';
import project1Retina from '../img/projects/1-2x.jpg';
import project2 from '../img/projects/2.jpg';
import project2Retina from '../img/projects/2-2x.jpg';
import project3 from '../img/projects/3.jpg';
import project3Retina from '../img/projects/3-2x.jpg';
import project4 from '../img/projects/4.jpg';
import project4Retina from '../img/projects/4-2x.jpg';
import project5 from '../img/projects/5.jpg';
import project5Retina from '../img/projects/5-2x.jpg';
import project6 from '../img/projects/6.jpg';
import project6Retina from '../img/projects/6-2x.jpg';
import project7 from '../img/projects/7.jpg';
import project7Retina from '../img/projects/7-2x.jpg';
import project8 from '../img/projects/8.jpg';
import project8Retina from '../img/projects/8-2x.jpg';
import project9 from '../img/projects/9.jpg';
import project9Retina from '../img/projects/9-2x.jpg';
import project10 from '../img/projects/10.jpg';
import project10Retina from '../img/projects/10-2x.jpg';

import svgArrow from '../img/icons.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const projects = [
  {
    imgSrc: project10,
    imgSrcSet: `${project10} 1x, ${project10Retina} 2x`,
    alt: 'Interview Ai Coach',
    tech: 'React, JavaScript, Supabase, Git, Tailwind CSS',
    description: 'interview ai coach',
    link: 'https://cute-puffpuff-a5c980.netlify.app/',
  },

  {
    imgSrc: project1,
    imgSrcSet: `${project1} 1x, ${project1Retina} 2x`,
    alt: 'Task-Pro',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'task pro',
    link: 'https://task-pro-frontend-iota.vercel.app/welcome',
  },

  {
    imgSrc: project2,
    imgSrcSet: `${project2} 1x, ${project2Retina} 2x`,
    alt: 'ResumeAI ',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'Resume AI ',
    link: 'https://resume-ai-app-back.onrender.com/',
  },
  {
    imgSrc: project3,
    imgSrcSet: `${project3} 1x, ${project3Retina} 2x`,
    alt: 'DataAnalyzer',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'Data Analyzer',
    link: 'https://spectacular-lokum-9fbb06.netlify.app/',
  },
  {
    imgSrc: project4,
    imgSrcSet: `${project4} 1x, ${project4Retina} 2x`,
    alt: 'mimino-website',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'mimino website',
    link: 'https://denisolid.github.io/Mimino-Project/',
  },
  {
    imgSrc: project5,
    imgSrcSet: `${project5} 1x, ${project5Retina} 2x`,
    alt: 'green-harvest-online-store',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'Green harvest online store',
    link: 'https://boreddarkness.github.io/GreenHarvest/',
  },
  {
    imgSrc: project6,
    imgSrcSet: `${project6} 1x, ${project6Retina} 2x`,
    alt: 'Yukon-Family-Adventure',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'Yukon Family Adventure',
    link: 'https://velykobrat.github.io/Yukon-Family-Adventure/',
  },
  {
    imgSrc: project7,
    imgSrcSet: `${project7} 1x, ${project7Retina} 2x`,
    alt: 'Interview with AI Coaching',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'Interview with AI Coaching',
    link: 'https://cute-puffpuff-a5c980.netlify.app/auth',
  },
  {
    imgSrc: project8,
    imgSrcSet: `${project8} 1x, ${project8Retina} 2x`,
    alt: 'fruitbox-online-store',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'fruitbox online store',
    link: '#',
  },
  {
    imgSrc: project9,
    imgSrcSet: `${project9} 1x, ${project9Retina} 2x`,
    alt: 'English-excellence-webservice',
    tech: 'React, JavaScript, Node JS, Git',
    description: 'vyshyvanka vibes Landing Page',
    link: '#',
  },
];
const projectsPerPage = 4;
let currentPage = 0;
const projectsUl = document.querySelector('.projects-ul');
const loadMoreBtn = document.querySelector('.btn-load-more');

function loadProjects() {
  const start = currentPage * projectsPerPage;
  const end = start + projectsPerPage;
  const projectsToLoad = projects.slice(start, end);

  projectsToLoad.forEach(project => {
    const li = document.createElement('li');
    li.classList.add('projects-li');

    li.innerHTML = `
      <img
        class="projects-img"
        srcset="${project.imgSrcSet}"
        src="${project.imgSrc}"
        alt="${project.alt}"
        width="320"
      />
      <div class="div-list">
        <h3 class="projects-sub">${project.tech}</h3>
        <p class="projects-p">${project.description}</p>
        <a href="${project.link}" class="visit-btn" target="_blank" rel="noopener noreferrer">
          VISIT
          <svg class="btn-visit-icon" width="24" height="24">
            <use href="${svgArrow}#icon-Vector-Projects"></use>
          </svg>
        </a>
      </div>
    `;

    projectsUl.appendChild(li);
  });

  currentPage++;

  if (currentPage * projectsPerPage >= projects.length) {
    loadMoreBtn.style.display = 'none';
    iziToast.info({
      title: 'Info',
      message: "That's all for now",
      position: 'topCenter',
      timeout: 3000,
    });
  }
}

loadMoreBtn.addEventListener('click', loadProjects);
loadProjects();
