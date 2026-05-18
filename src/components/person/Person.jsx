import "./Person.css"
import DoctorImg from "../../assets/doctor.png"
function Person() {
    return (
        <div className="start">
            <div className="start">
                <img src={DoctorImg} alt="doctor" />

                <div className="right-side">
                    <h5>WHO WE ARE</h5>
                    <h3>Why Createx?</h3>

                    <div className="texts">
                        <h5>A fermentum in morbi pretium aliquam adipiscing donec tempus.</h5>
                        <h5>Vulputate placerat amet pulvinar lorem nisl.</h5>
                        <h5>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</h5>
                        <h5>Etiam duis lobortis in fames ultrices commodo nibh.</h5>
                        <h5>Tincidunt sagittis neque sem ac eget.</h5>
                        <h5>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</h5>
                        <button>More about us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;