import './pages-style.css/skills-style.css'
import { useState, useEffect } from 'react';
import { 
    JavaScript_range, 
    HTML_range,
    CSS_range,
    React_range,
    Mysql_range
} from '../Shared/Components/Components-Style.css/SkillsRange';

const Skills = () => {
    const [context, setContext] = useState();

    useEffect(() => {
        setContext(<HTML_range />);
    },[])

    return (
        <div className="skills">
            <div className="skills-content">
                <div className="skills-context">
                    <h1>My Professional <span>Skills</span></h1>
                    <p>I'm a Full-stack Developer based in Philippines. 
                        To ensure business growth, I am here with expertise 
                        in Web Development as well as in Graphic Designs. 
                        I'm finding unique solutions to complex problems and 
                        I'm doing it all while doing various tasks all at once.</p>
                </div>

                <div className="skills-range">
                    {context}
                </div>
            </div>

            <div className="skills-logo">
                <div className="skills-img" onMouseOver={() => {
                    setContext( <HTML_range /> )
                }}>
                    <img src="/html-logo-vector.png" alt="html-logo-vector.png" />
                </div>

                <div className="skills-img" onMouseOver={() => {
                    setContext( <CSS_range /> )
                }}>
                    <img src="/CSS3_logo_and_wordmark.svg.png" alt="CSS3_logo_and_wordmark.svg.png" />
                </div>
                
                <div className="skills-img" onMouseOver={() => {
                    setContext( <JavaScript_range /> );
                }}>
                    <img src="/JavaScript-Logo - Copy.png" alt="JavaScript-Logo - Copy.png" />
                </div>

                <div className="skills-img" onMouseOver={() => {
                    setContext( <React_range /> )
                }}>
                    <img src="/1631026680-logo-react-native.png" alt="1631026680-logo-react-native.png" />
                </div>

                <div className="skills-img" onMouseOver={() => {
                    setContext( <Mysql_range /> )
                }}>
                    <img src="/mysql-3.png" alt="mysql-3.png" />
                </div>
            </div>
        </div>
    )
}

export default Skills;