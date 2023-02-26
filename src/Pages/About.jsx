import './pages-style.css/about-style.css'
import NextButton from '../Shared/Components/NextButton';
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-profile">
                    <div className="about-image">
                        <img src="/_DSC0550.jpg" alt="_DSC0550.jpg" />
                    </div>

                    <div className="about-context">
                        <h5>Hi, I'm <span>Jan Phillip M. Dacallos</span></h5>
                        <h1><span>Graphic Designer and Full-Stack Developer</span></h1>

                        <p>I am a graphic designer and full-stack developer with 1 year of 
                            experience in Javascript programming language which specializes 
                            in Reactjs framework. I am familiar with Tailwind css and Bootstrap. 
                            Aside from that, I am knowledgeable in with server-side applications 
                            such as MYSQL.</p>

                        <div className="about-btn">
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlqmmkwsVsqzVjdDRFprhGtpqXvFHhkqkLXKlNNBnQckHVbNWNJzqdwFWQMhdXGHJwXJB" target={"_blank"}>Email <img src="/icons/paper_plane_40px.png" alt="paper_plane_40px.png" /></a>
                            <a href="#">Download CV <img src="/icons/download_from_cloud_40px.png" alt="download_from_cloud_40px.png" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="wave-footer">
                <img src="/about-wave.png" alt="about-wave.png" />
            </footer>
        </div>
    )
}

export default About;