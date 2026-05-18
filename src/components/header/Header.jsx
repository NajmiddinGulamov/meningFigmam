import "./Header.css"
import PlayImg from "../../assets/Play.png"
import WomanImg from "../../assets/woman.png"
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="header">
            <div className="start">
                <Link to={'Contacts'}>CREATE X</Link>
                <Link>About Us</Link>
                <Link to={'Bloging'}>Courses</Link>
                <Link to={'Page'}>Events</Link>
                <Link to={'List'}>Blog</Link>
                <Link to={'EventsGrid'}>Contacts</Link>
                <button className="btn">Get consultation</button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#424551"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" /></svg>
                <Link to={'sign-in'}><a className="login-btn">Log in / Register</a></Link>
            </div>
            <div className="play">
                <img src={PlayImg} alt="play img" />
                <h5>Play showreel</h5>
            </div>
            <div className="enjoy">
                <h1>Enjoy studying <br /> with Createx <br /> Online Courses</h1>
                <img src={WomanImg} alt="" /> <br />
            </div>
            <div className="only-btn">
                <button className="about-btn">About us</button>
                <button className="btn">Explore courses</button>
            </div>
            <div className="last">
                <h1>1200 </h1> <h5>Students graduated</h5>
                <h1>84</h1> <h5>Completed courses</h5>
                <h1>16</h1> <h5>Qualified tutors</h5>
                <h1>5</h1> <h5>Years of experience</h5>
            </div>
        </div>
    )
}

export default Header;