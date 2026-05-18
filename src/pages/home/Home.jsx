import Benefit from "../../components/benefit/Benefit";
import Blog from "../../components/blog/Blog";
import Certificate from "../../components/certificate/Certificate";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Last from "../../components/last/Last";
import Learn from "../../components/learn/Learn";
import Opinion from "../../components/opinion/Opinion";
import Person from "../../components/person/Person";
import Team from "../../components/team/Team";
import WorkShop from "../../components/workshop/WorkShop";
import Page from "../course/Course";
import List from "../list/List";
import EventsGrid from "../View/View";
import Contacts from "../Contacts/Contacs";
import SignIn from "../Sign-in/Sign-in";
import SignUp from "../Sign-up/Sign-up";
import Bloging from "../Blog/Blog";
import AboutPage from "../About/AboutPage";
export function Home() {
    return (
        <div>
            <Header/>
            <Person/>
            <Learn/>
            <Benefit/>
            <WorkShop/>
            <Certificate/>
            <Team/>
            <Opinion/>
            <Blog/>
            <Last/>
            <Footer/>
            <Page/>
            <List/>
            <EventsGrid/>
            <Contacts/>
            <SignIn/>
            <SignUp/>
            <Bloging/>
            {/* <AboutPage/> */}
        </div>
    )
}

export default Home