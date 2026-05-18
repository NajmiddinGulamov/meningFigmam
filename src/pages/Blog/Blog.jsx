import React from 'react';
import './blog.css';
import Footer from '../../components/footer/Footer';

const Bloging = () => {
    return (
        <div className="blog-page">
            <header className="main-header">
                <div className="header-container">
                    <a href="/" className="logo">CREATE<span>X</span></a>
                    <nav className="main-nav">
                        <a href="#" className="nav-link">About Us</a>
                        <a href="#" className="nav-link">Courses</a>
                        <a href="#" className="nav-link">Events</a>
                        <a href="#" className="nav-link active">Blog</a>
                        <a href="#" className="nav-link">Contacts</a>
                    </nav>
                    <div className="header-actions">
                        <button className="consult-btn">Get consultation</button>
                        <a href="#" className="auth-link">Log in / Register</a>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="blog-hero">
                    <span>Our Blog</span>
                    <h1>Createx School Journal</h1>
                </div>

                <div className="blog-controls">
                    <div className="blog-tabs">
                        <button className="tab-btn active">All</button>
                        <button className="tab-btn">Articles</button>
                        <button className="tab-btn">Videos</button>
                        <button className="tab-btn">Podcasts</button>
                    </div>
                    <input type="text" className="search-input" placeholder="Search blog..." />
                </div>

                <div className="blog-grid">
                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#E1F5FE' }}><span className="card-tag">Podcast</span></div>
                        <div className="card-meta">Marketing | September 4, 2020 | 36 min</div>
                        <h3 className="card-title">What is traffic arbitrage and does it really make money?</h3>
                        <p className="card-desc">Phasellus ullamcorper iaculis viverra parturient sed id velit. Domitilla poio dignissime larao, purn a gravida...</p>
                        <div className="card-link">Listen <span>next</span></div>
                    </div>

                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#F5F5F5' }}><span className="card-tag">Article</span></div>
                        <div className="card-meta">Development | September 1, 2020</div>
                        <h3 className="card-title">How to choose the first programming language for a beginner</h3>
                        <p className="card-desc">Turpis sed sit magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...</p>
                        <div className="card-link">Read <span>next</span></div>
                    </div>

                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#FFF9C4' }}><span className="card-tag">Video</span></div>
                        <div className="card-meta">Design | August 8, 2020 | 40 min</div>
                        <h3 className="card-title">Should you choose a creative profession if you are attracted to creativity?</h3>
                        <p className="card-desc">Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</p>
                        <div className="card-link">Watch <span>next</span></div>
                    </div>

                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#F5F5F5' }}><span className="card-tag">Article</span></div>
                        <div className="card-meta">HR & Recruiting | August 3, 2020</div>
                        <h3 className="card-title">HR statistics: job search, interviews, hiring and recruiting</h3>
                        <p className="card-desc">Massa, lectus nibh consectetur aliquet nunc interdum senectus. Leo hac enim bibendum diam adipiscing...</p>
                        <div className="card-link">Read <span>next</span></div>
                    </div>

                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#E0F2F1' }}><span className="card-tag">Video</span></div>
                        <div className="card-meta">Management | August 2, 2020 | 45 min</div>
                        <h3 className="card-title">What to do and who to talk to if you want to get feedback on the product</h3>
                        <p className="card-desc">Neque u, senectus consectetur odio in aliquet nec eu. Ut fclis ye niit urna urna sagittis faucibus...</p>
                        <div className="card-link">Watch <span>next</span></div>
                    </div>

                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#F3E5F5' }}><span className="card-tag">Podcast</span></div>
                        <div className="card-meta">Design | July 28, 2020 | 36 min</div>
                        <h3 className="card-title">What are color profiles and how they work in graphic design</h3>
                        <p className="card-desc">Aliquam vulputate hendrerit quam nallu in dlu urna enim viverra gravida. Consectetur orto arcu eleifend...</p>
                        <div className="card-link">Listen <span>next</span></div>
                    </div>

                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#FBE9E7' }}><span className="card-tag">Video</span></div>
                        <div className="card-meta">Management | July 15, 2020 | 45 min</div>
                        <h3 className="card-title">Startup: how to build a team that will live longer than a year</h3>
                        <p className="card-desc">Nisi, massa nibh faucibus et diam. Fauclbus at malesuada et justo urter isque in nisi urna...</p>
                        <div className="card-link">Watch <span>next</span></div>
                    </div>

                    <div className="blog-card">
                        <div className="card-image" style={{ backgroundColor: '#F5F5F5' }}><span className="card-tag">Article</span></div>
                        <div className="card-meta">Marketing | July 9, 2020</div>
                        <h3 className="card-title">How to get customers to love your business from the start</h3>
                        <p className="card-desc">Malesuada in augue nisl feugiat murbi a aliquet mdui. Elementum lacus, pellentesque etiam orca tristique...</p>
                        <div className="card-link">Read <span>next</span></div>
                    </div>
                </div>

                <div className="pagination">
                    <span className="page-num active">1</span>
                    <span className="page-num">2</span>
                    <span className="page-num">3</span>
                    <span className="page-num">4</span>
                    <span className="page-num">next</span>
                </div>
            </div>

            <section className="newsletter">
                <div className="container newsletter-content">
                    <div className="newsletter-img">
                        <div style={{ width: '350px', height: '350px', background: '#e5e5e5' }}></div>
                    </div>
                    <div className="newsletter-text">
                        <h2>Want to get the best articles weekly?<br />Subscribe to our newsletter!</h2>
                        <form className="sub-form">
                            <input type="email" className="sub-input" placeholder="Your working email" />
                            <button type="submit" className="sub-btn">Subscribe</button>
                        </form>
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            I agree to receive communications from Createx Online School
                        </label>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Bloging;