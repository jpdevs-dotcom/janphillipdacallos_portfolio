import Navbar from "../Components/Navbar";
import Medias from "../Components/Medias";
import './rootLayout-style.css';

const RootLayout = ({ children }) => {
    return (
        <div className="root-layout ">
            <video src="/Plexus Background White.mp4" autoPlay loop ></video>

            <Navbar />
            <div className="portfolio-body container">
                <div className="portfolio-medias">
                    <Medias />
                </div>
                <div className="layout-children">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default RootLayout;