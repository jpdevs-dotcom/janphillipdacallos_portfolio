import './pages-style.css/projects-style.css';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-container">
                <div className="projects-heading">
                    <h1>Take a view of my <span>Projects.</span></h1>
                    <p>These are just few of my projects that I made recently. 
                        Work with me as we create an innovative platforms!
                    </p>
                </div>

                <div className="projects-content">
                    <div className="project-1">
                        <div className="img">
                            <img src="/marvel_proj.jpg" alt="marvel_proj.jpg" />
                        </div>

                        <h3><span>Doctor Strange Website using Marvel API</span></h3>

                        <ul className="resources-used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Marvel API</li>
                        </ul>
                    </div>
                    
                    <div className="project-2">
                        <div className="img">
                            <img src="/dictionary_proj.jpg" alt="dictionary_proj.jpg" />
                        </div>
                        <h3><span>Custom Dictionary using Dictionary API</span></h3>

                        <ul className="resources-used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Dictionary API</li>
                        </ul>
                    </div>
                    
                    <div className="project-3">
                        <div className="img">
                            <img src="/resort_proj.jpg" alt="resort_proj.jpg" />
                        </div>
                        <h3><span>Sunrise Floating Resto Website</span></h3>

                        <ul className="resources-used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>MYSQL</li>
                        </ul>
                    </div>
                    
                    <div className="project-4">
                        <div className="img">
                            <img src="/student-data_proj.jpg" alt="student-data_proj.jpg" />
                        </div>
                        <h3><span>UEP Student's Data</span></h3>

                        <ul className="resources-used">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>ReactJs</li>
                            <li>MYSQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;