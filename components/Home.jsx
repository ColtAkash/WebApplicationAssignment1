import BBG from '../src/assets/Akash123.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';

export default function Home() {
    return (
        <>
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introText">
                        I am <span className="introName">Akash Sukumaran</span>, 
                        <br />FullStack Developer
                    </span>
                    <img src={BBG} alt="profile" className="bbg" />
                    <p className="introPara">
                    I am a highly skilled and passionate Full Stack Developer with a robust background in creating dynamic, 
                    visually appealing, and user-friendly web applications. With proficiency in both front-end and back-end technologies,
                    I am experienced in developing seamless user interfaces as well as architecting scalable, efficient backend systems. 
                    I possess a strong command of HTML, CSS, JavaScript, and modern frameworks such as React and Node.js, along with
                    backend technologies like Express, MongoDB, and SQL.
                    </p>
                    <p className="introPara">
                    In addition to my development expertise, I have a keen eye for design, honed through my experience with tools like Adobe Photoshop and Illustrator. This unique blend of design and coding allows me to deliver websites and 
                    applications that are not only functional but also aesthetically engaging, offering a superior user experience.
                    </p>
                    <p className="introPara">
                    I am committed to continuous learning, staying updated with the latest trends and best practices in both software development and design. My goal is to build solutions that solve complex problems while delivering a user-centric approach.


                    </p>

                    <div className="skills">
                        <h3>Skills:</h3>
                        <ul>
                            <li>HTML, CSS, JavaScript, React/Angular</li>
                            <li>Node.js/Express, databases (SQL, NoSQL)</li>
                            <li>Git, cloud platforms (AWS, Azure), CI/CD.</li>
                            <li>Adobe Photoshop, Illustrator, Figma, wireframing</li>
                            <li>GitHub Version Control</li>
                        </ul>
                    </div>

                    <div className="buttons">
                         <a href="/assets/Akash Resume (1).pdf" download className="btn">Download My Resume</a>
                         <Link to="/contact" className="btn">Contact Me</Link> 
                    </div>

                    <div className="socialIcons">
                        <a href="https://www.linkedin.com/in/akashee/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/Linkedin.jpeg" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/ColtAkash" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/ghub.jpeg" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
