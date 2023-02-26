import './pages-style.css/home-style.css'
import NextButton from '../Shared/Components/NextButton';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-context">
             <div className="home">
                <div className="home-context">
                    <div className="home-details">
                        <h1>Hello, I'm <span>Jan Phillip</span></h1>
                        <h4><span>Graphic Designer / Full-Stack Developer</span></h4>

                        <p>High level in graphic designing, web/software development, 
                            and server side knowledge wherein I produce high quality work 
                            in each of them. I am passionate about problem solving business 
                            problems through human-centered design. Curious by nature and business 
                            minded.</p>

                        <div className="home-btn">
                            <Link to="/contact">Contact <img src="/icons/paper_plane_40px.png" alt="paper_plane_40px.png" /></Link>
                        </div>
                    </div>

                    <div className="home-image">
                        <img src="/pelep.jpg" alt="pelep.jpg" />
                    </div>
                </div>  

                <div className="next-btn">
                    <Link to="/about"><NextButton /></Link>
                </div>
            </div>

            <footer className="wave-footer">
                    <img src="/home-wave.png" alt="home-wave.png" />
            </footer>
        </div>
    )
}

export default Home;