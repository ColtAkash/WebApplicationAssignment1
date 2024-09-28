import React from 'react';
import project1 from '../src/assets/Myport.jpg';
import project2 from '../src/assets/Ecomm.jpg';
import project3 from '../src/assets/collo.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css';

export default function Project() {
  return (
    <>
      <section id="works" className="projectsSection">
        <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">
        I have a strong focus on precision, making sure every detail is perfect in my work. I’m excited to use my expertise to help businesses build a powerful online presence and reach their objectives.
          Here are some of the projects I've worked on:
        </span>
        
        <div className="worksImgs">
          <div className="projectCard">
            <img src={project1} alt="Project 1" className="worksImg" />
            <h3>Personal Portfolio Website</h3>
            <p>A showcase of my work and skills, built using React and styled-components. The site includes responsive design features and a smooth user experience.</p>
          </div>
          <div className="projectCard">
            <img src={project2} alt="Project 2" className="worksImg" />
            <h3>ECommerce App</h3>
            <p>A user-friendly eCommerce app offering seamless browsing, personalized recommendations, secure payments, order tracking, and customer reviews. It provides an intuitive experience with product filtering, a wishlist feature, and real-time purchase updates.</p>
          </div>
          <div className="projectCard">
            <img src={project3} alt="Project 3" className="worksImg" />
            <h3>Collaborative Task Management App</h3>
            <p>A task management platform for teams to collaborate on projects in real-time. Users can create projects, assign tasks, track progress, and communicate with team members all in one place. The app is ideal for remote teams to stay organized and productive.</p>
          </div>
         
        </div>

       
      </section>
    </>
  );
}
