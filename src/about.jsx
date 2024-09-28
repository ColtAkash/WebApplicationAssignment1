import BBG from '../src/assets/Akash123.jpg';
import ux from '../src/assets/RPS.jpeg';
import web from '../src/assets/DBMS.jpeg';
import app from '../src/assets/API.jpeg';
import '../src/index.css';
import '../src/about.css';

export default function About() {
    return (
        <>
            <section id="skill">
                <div className="skillContainer">
                    <span className="skillTitle">What I Do</span>
                    <img src={BBG} alt="profile" className="bbg" />
                    <span className="skillDesc">
                        
                    </span>I am a skilled and passionate full stack developer with experience in creating visually appealing,
                     user-friendly websites and dynamic web applications. I have a strong understanding of both front-end and back-end technologies, 
                     including HTML, CSS, JavaScript, and backend frameworks. I am also proficient in design tools like Adobe Photoshop and Illustrator,
                      ensuring a seamless integration of aesthetics and functionality. Committed to continuous learning, I constantly strive to enhance my development skills and deliver optimized, user-centered solutions.
                </div>

                <div className="skillBars">
                    <div className="skillBar">
                        <img src={ux} alt="" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Responsive Web Design</h2>
                            <p>
                            I ensure that websites and applications are fully functional and visually appealing
                             across all devices,from desktops to mobile phones, using techniques like media queries and flexible grids.
                            </p>
                        </div>
                    </div>
                    
                    <div className="skillBar">
                        <img src={web} alt="WebDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Database Management</h2>
                            <p>
                            I manage and integrate databases (such as MySQL, MongoDB, or PostgreSQL) 
                            to store, retrieve, and organize data for back-end support in dynamic websites and applications.
                            </p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <img src={app} alt="AppDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>API Integration</h2>
                            <p>
                            I develop and integrate APIs to connect the front end with back-end services, 
                            enabling seamless data exchange and integration with third-party services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
