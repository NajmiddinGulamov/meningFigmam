import "./about.css"
import LogoImg from "../../assets/logo.png"
import GirlImg from "../../assets/again.png"
import PlayImg from "../../assets/play.png"
import Img from "../../assets/image.png"
import BoxesImg from "../../assets/icon-boxes.png"
import LightImg from "../../assets/light.png"
import PuzzleImg from "../../assets/puzzle.png"
import WoodPeopleImg from "../../assets/wood-people.png"
import GirlItemsImg from "../../assets/girl-items.png"
import DeveloperImg from "../../assets/developer.png"
function AboutPage() {
    return (
        <div className="start-of-figma">
            <div className="figma">
                <img src={LogoImg} alt="" />
                <a>About Us</a>
                <a>Courses</a>
                <a>Events</a>
                <a>Blog</a>
                <a>Contacts</a>
                <button className="btn">Get consultation</button>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#424551"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm296.5-343.5Q560-607 560-640t-23.5-56.5Q513-720 480-720t-56.5 23.5Q400-673 400-640t23.5 56.5Q447-560 480-560t56.5-23.5ZM480-640Zm0 400Z" /></svg>
                <a className="login-btn">Log in / Register</a>
            </div>
            <a>About us</a>
            <h3>Createx Online School</h3> <br />
            <div className="second-part">
                <div>Createx Online School is a leader in online studying. We have lots <br /> of courses and programs from the main market experts.</div> <br />
                <p>We provide relevant approaches to online learning, internships and employment in <br /> the largest companies in the country. Our educational programs help you get a new <br /> specialty from scratch. During your studies, we will help you find a job. Check the <br /> courses and online events that we organise.</p>
                <img src={GirlImg} alt="again girl img" />
                <button className="view-btn">Explore events</button>
                <button className="all-events-btn">Browse courses</button>
            </div>
            <div className="part-time-play">
                <p>Watch Video</p>
                <img src={PlayImg} alt="" />
            </div>
            <img src={Img} alt="" />
            <div className="texts-of-guarend">
                <p>1200 <a>students graduated</a></p>
                <p>84 <a>completed courses</a></p>
                <p>16 <a>qualified tutors</a></p>
                <p>5 <a>years of experience</a></p>
            </div>
            <div className="stand">
                <center>We always stand for</center>
                <h2 style={{textAlign: "center", fontWeight: "100px"}}>Our core values</h2>
                <img src={BoxesImg} alt=""/>
            </div>
            <div className="main">
                <center>our main directions</center>
                <h2 style={{textAlign: "center", fontWeight: "900"}}>What do we teach</h2>
            </div>
            <div className="main-1">
                <div className="first">
                    <img src={LightImg} alt="" />
                    <button className="market-btn">Marketing</button>
                    <a>Odio posuere netus quisque faucibus lectus arcu <br /> donec. Eget dictum eu viverra faucibus. Viverra <br /> scelerisque consequat.</a>
                    <button style={{background: "#FFFF", border: "1px", width: "100px", fontSize: "15px"}}>Check courses</button>
                </div>
                <div className="second">
                    <img src={PuzzleImg} alt="" />
                    <button className="management-btn">Management</button>
                    <a>Odio posuere netus quisque faucibus lectus arcu <br /> donec. Eget dictum eu viverra faucibus. Viverra <br /> scelerisque consequat.</a>
                </div>
                <div className="third">
                    <img src={WoodPeopleImg} alt="wood people" />
                    <button className="third-person-btn">HR & Recruting</button>
                    <a>Odio posuere netus quisque faucibus lectus arcu <br /> donec. Eget dictum eu viverra faucibus. Viverra <br /> scelerisque consequat.</a>
                </div>
                <div className="girl-part">
                    <img src={GirlItemsImg} alt="" />
                    <button className="design">Design</button>
                    <a>Odio posuere netus quisque faucibus lectus arcu <br /> donec. Eget dictum eu viverra faucibus. Viverra <br /> scelerisque consequat.</a>
                    <a>Check courses</a>
                </div>
                <div className="developer">
                    <img src={DeveloperImg} alt="" />
                    <button className="management-btn">Development</button>
                    <a>Odio posuere netus quisque faucibus lectus arcu <br /> donec. Eget dictum eu viverra faucibus. Viverra <br /> scelerisque consequat.</a>
                    <a>Check courses</a>
                </div>
                <div className="finally">
                    <a>New studying program coming soon...</a>
                </div>
            </div>
            <div className="studying">
                <div className="part">
                    <a>Studying process</a> <br />
                    <a>That's how we do it</a>
                </div>
            </div>
            <div className="steps">
                <div className="step-1">
                    <h4 style={{color: "gray"}}>STEP 1</h4>
                    <h4>Watching online video lectures</h4>
                    <h4 style={{color: "grey"}}>Aliquam turpis viverra quam sit interdum blandit posuere <br /> pellentesque. Nisl, imperdiet gravida massa neque.</h4>
                </div>
                <div className="step-2">
                    <h4 style={{color: "grey"}}>STEP 2</h4>
                    <h4>Passing test</h4>
                    <h4 style={{color: "grey"}}>Facilisis pellentesque quis accumsan ultricies. Eu egestas eget <br /> feugiat lacus, amet, sollicitudin egestas laoreet etiam. </h4>
                </div>
                <div className="step-3">
                    <h4 style={{color: "grey"}}>STEP 3</h4>
                    <h4>Curator's feedback</h4>
                    <h4 style={{color: "grey"}}>Eget amet, enim pharetra leo egestas nisi, odio imperdiet <br /> facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. </h4>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;