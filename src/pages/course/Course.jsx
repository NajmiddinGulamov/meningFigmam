import "./course.css"
import LogoImg from "../../assets/logo.png"
import Opinion from "../../components/opinion/Opinion"
import FinisherImg from "../../assets/finisher.png"
import FacebookImg from "../../assets/socials.png"
import IllustrationImg from "../../assets/illustration.png"
import TwoImg from "../../assets/two.png"
import Manimg from "../../assets/person1.png"
import FullImg from "../../assets/horisontal.png"
import FullImg2 from "../../assets/full.png"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom"

function Page() {
    return (
        <div className="course-page">
            <div className="header-wrapper">
                <header className="head">
                    <img src={LogoImg} alt="Createx" className="logo"  />
                    <nav className="nav-links">
                        <Link className="link">About Us</Link>
                        <Link className="link active">Courses</Link>
                        <Link className="link">Events</Link>
                        <Link className="link">Blog</Link>
                        <Link className="link">Contacts</Link>
                    </nav>
                    <div className="header-actions">
                        <button className="btn">Get consultation</button>
                        <div className="auth-box">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="#424551" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 17C17 14.2386 13.866 12 10 12C6.13401 12 3 14.2386 3 17" stroke="#424551" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="login-text">Log in / Register</span>
                        </div>
                    </div>
                </header>

                <section className="hero">
                    <span className="hero-subtitle">COURSE</span>
                    <h1 className="hero-title">User Experience. Principles of Human-Centered Design</h1>
                </section>
            </div>

            <section className="about-section">
                <div className="about-container">
                    <div className="about-content">
                        <h2 className="section-title">About the course</h2>
                        <p className="description">
                            Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum.
                        </p>
                        <h3 className="list-title">You will learn:</h3>
                        <ul className="learn-list">
                            <li>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li>Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li>Fringilla in nec risus congue venenatis pretium posuere nec.</li>
                            <li>Cursus eu pretium, vulputate tempus quam massa sed at.</li>
                        </ul>
                    </div>
                    <aside className="course-sidebar">
                        <div className="info-card">
                            <div className="info-group">
                                <h6>DATES</h6>
                                <h4>Sept 7 - Nov 2</h4>
                                <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                            </div>
                            <div className="info-group">
                                <h6>DURATION</h6>
                                <h4>2 months - 8 lessons</h4>
                                <p>Rhoncus pellentesque auctor auctor orci vulputate faucibus.</p>
                            </div>
                            <div className="info-group">
                                <h6>PRICE</h6>
                                <h4>$120 per month</h4>
                                <p>Adipiscing mauris quam ac elit tristique dis.</p>
                            </div>
                            <button className="join-btn">Join the course</button>
                        </div>
                    </aside>
                </div>
            </section>

            <section className="benefit-section">
                <div className="container benefit-grid">
                    <div className="benefit-header">
                        <span className="subtitle">FOR WHOM?</span>
                        <h2 className="section-title">Who will benefit from the course:</h2>
                    </div>
                    <div className="benefit-list">
                        <div className="benefit-item">Specialists with more than 1 year of active work experience</div>
                        <div className="benefit-item">Mobile app designers who want to improve their skills</div>
                        <div className="benefit-item">Professional designers who want to feel more confident in UX</div>
                        <div className="benefit-item">Specialists who would like to structure their knowledge</div>
                    </div>
                </div>
            </section>

            <section className="curator-section">
                <div className="curator-container">
                    <div className="curator-image">
                        <img src={FinisherImg} alt="Cody Fisher" />
                    </div>
                    <div className="curator-info">
                        <span className="curator-label">COURSE CURATOR</span>
                        <h2 className="curator-name">Cody Fisher</h2>
                        <p className="curator-job">Senior UX designer in IT Product Company</p>
                        <div className="curator-stats">
                            <div className="stat-item"><span className="orange">★</span> 4.9 rate</div>
                            <div className="stat-item"><span className="orange">◎</span> 4 courses</div>
                            <div className="stat-item"><span className="orange">👥</span> 350 students</div>
                        </div>
                        <p className="curator-bio">
                            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis.
                        </p>
                        <div className="social-links">
                            <img src={FacebookImg} alt="Facebook" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="program-section">
                <div className="container program-flex">
                    <div className="program-content">
                        <span className="subtitle">COURSE PROGRAM</span>
                        <h2 className="section-title">What will you learn</h2>
                        <div className="accordion">
                            <div className="accordion-item active">
                                <div className="accordion-header">
                                    <span className="toggle-icon">−</span>
                                    <span className="lesson-text"><span className="orange">Lesson 1.</span> Aliquet lectus urna viverra in odio.</span>
                                </div>
                                <div className="accordion-body">
                                    Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris.
                                </div>
                            </div>
                            {[2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <div key={num} className="accordion-item">
                                    <div className="accordion-header">
                                        <span className="toggle-icon">+</span>
                                        <span className="lesson-text"><span className="orange">Lesson {num}.</span> Lorem ipsum dolor sit amet consectetur.</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="program-image">
                        <img src={IllustrationImg} alt="Learning" />
                    </div>
                </div>
            </section>
            <Opinion />
            <section className="benefit-section">
                <div className="container benefit-grid">
                    <div className="benefit-header">
                        <span className="subtitle">FOR WHOM?</span>
                        <h2 className="section-title">Who will benefit from the course:</h2>
                    </div>

                    <div className="benefit-list">
                        <div className="benefit-item">
                            <p>Specialists with more than 1 year of active work experience</p>
                        </div>
                        <div className="benefit-item">
                            <p>Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</p>
                        </div>
                        <div className="benefit-item">
                            <p>Professional designers who want to feel more confident in UX</p>
                        </div>
                        <div className="benefit-item">
                            <p>Specialists who would like to structure their knowledge, fill in the gaps</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="registration-section">
                <div className="container registration-grid">
                    <div className="registration-image">
                        <img src={TwoImg} alt="Register illustration" />
                    </div>

                    <div className="registration-form-wrap">
                        <span className="subtitle">LEAVE A REQUEST NOW AND GET 20% OFF!</span>
                        <h2 className="section-title">Register for the course</h2>

                        <form className="course-form">
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your full name" />
                            </div>

                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your working email" />
                            </div>

                            <div className="input-group">
                                <label>Phone</label>
                                <input type="text" placeholder="Your phone number" />
                            </div>

                            <button type="submit" className="form-btn">Join the course</button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="recommendations-section">
                <div className="container">
                    <div className="recommendations-header">
                        <div className="header-text">
                            <span className="subtitle">CHECK OTHER COURSES</span>
                            <h2 className="section-title">You may also like</h2>
                        </div>
                        <div className="slider-arrows">
                            <button className="arrow-btn">←</button>
                            <button className="arrow-btn">→</button>
                        </div>
                    </div>

                    <div className="courses-grid">
                        <img src={FullImg} alt="" />
                        <img src={FullImg2} alt=""/>
                    </div>
                </div>
                <div className="btns">
                    <h4>Do you want more courses? <button className="btn">View all courses</button></h4>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Page;