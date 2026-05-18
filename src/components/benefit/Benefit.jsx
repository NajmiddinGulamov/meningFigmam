import "./Benefit.css"
import BoyImg from "../../assets/boy.png"
function Benefit() {
    return(
        <div>
            <div className="benefit">
                <h4>Our benefits</h4> <br />
                <h1>That’s how we do it</h1> 
            </div> <br />
            <div className="brands">
                <h4>Experienced Tutors</h4>
                <h4>Feedback & Support</h4>
                <h4>24/7 Online Library</h4>
                <h4>Community</h4>
            </div>
            <h3>Only practicing tutors</h3> <br />
            <div className="need">
                <h5>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames <br /> dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis <br /> augue. Nunc, sodales tortor sit diam <br /> mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. <br /> Amet enim, nisi tempus vehicula.</h5>
                <img src={BoyImg} alt="boy and girl" />
            </div>
        </div>
    )
}
export default Benefit;