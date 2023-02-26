import './skillsRange.css';

const JavaScript_range = () => {
    return (
        <div className="skills-range">
            <h3><span>JAVASCRIPT</span></h3>
            <p>JavaScript, often abbreviated as JS, is a 
                programming language that is one of the core 
                technologies of the World Wide Web, 
                alongside HTML and CSS.</p>

            <span className="bar-background"><span className="bar javascript"></span></span>
        </div>
    )
}

const HTML_range = () => {
    return (
        <div className="skills-range">
            <h3><span>HTML</span></h3>
            <p>The HyperText Markup Language or the HTML is 
                the standard markup language for documents 
                designed to be displayed in a web browser.</p>
                
            <span className="bar-background"><span className="bar html"></span></span>
        </div>
    )
}

const CSS_range = () => {
    return (
        <div className="skills-range">
            <h3><span>CSS</span></h3>
            <p>Cascading Style Sheets is a style sheet language used 
                for describing the presentation of a document written 
                in a markup language such as HTML or XML</p>

            <span className="bar-background"><span className="bar css"></span></span>
        </div>
    )
}

const React_range = () => {
    return (
        <div className="skills-range">
            <h3><span>ReactJs</span></h3>
            <p>React is a free and open-source front-end 
                JavaScript library for building user 
                interfaces based on UI components. It is 
                maintained by Meta and a community of 
                individual developers and companies.</p>

            <span className="bar-background"><span className="bar react"></span></span>
        </div>
    )
}

const Mysql_range = () => {
    return (
        <div className="skills-range">
            <h3><span>MYSQL</span></h3>
            <p>MySQL is a relational database management 
                system (RDBMS) developed by Oracle that is 
                based on structured query language (SQL). 
                A database is a structured collection of 
                data. </p>

            <span className="bar-background"><span className="bar mysql"></span></span>
        </div>
    )
}

export {
    JavaScript_range,
    HTML_range,
    CSS_range,
    React_range,
    Mysql_range
};