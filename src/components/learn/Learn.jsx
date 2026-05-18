import "./Learn.css"
import FirstMan from "../../assets/person1.png"
import SecondMan from "../../assets/person2.png"
import ThirdImg from "../../assets/person3.png"
import GirlImg from "../../assets/girl.png"
import WomanImg from "../../assets/girl1.png"
import ManImg from "../../assets/man.png"
function Learn() {
    return(
        <div className="begin-figma">
            <h5>Ready to learn?</h5>
            <div className="courses">
                <h2>Featured Courses</h2>
                <button>View all courses</button>
            </div>
            <div className="people">
                <div className="first-person">
                    <img src={FirstMan} alt="" />
                    <button className="market-btn">Marketing</button> <br />
                    <h2>The Ultimate Google Ads Training <br /> Course</h2>
                    <p className="prise">$100 <a>|by Jerome Bell</a></p>
                </div>
                <div className="second-person">
                    <img src={SecondMan} alt="" />
                    <button className="management-btn">Management</button>
                    <h2>Prduct Management Fundamentals</h2>
                    <p className="cheap">$480 <a>|by Marvin McKinney</a></p>
                </div>
                <div className="third-person">
                    <img src={ThirdImg} alt="third person" />
                    <button className="third-person-btn">HR & Recruting</button>
                    <h2>HR Management and Analytics</h2>
                    <p className="button-person">$200 <a>|by Leslie Alexander Li</a></p>
                </div>
                <div className="girl">
                    <img src={GirlImg} alt="girl" />
                    <button className="marketing">Marketing</button>
                    <h2>Brand Management & PR <br /> Communications</h2>
                    <p className="dollar">$530 <a>|by Kristin Watson</a></p>
                </div>
                <div className="girl-1">
                    <img src={WomanImg} alt="woman-img" />
                    <button className="girl-button">Management</button>
                    <h2>Business Development <br /> Management</h2>
                    <p className="butn">$400 <a>|by Dianne Russell</a></p>
                </div>
                <div className="man">
                    <img src={ManImg} alt="man" />
                    <button className="design">Design</button>
                    <h2>Graphic Design Basic</h2>
                    <p className="style">$500 <a>|by Guy Hawkins</a></p>
                </div>
            </div>
        </div>
    )
}
export default Learn;