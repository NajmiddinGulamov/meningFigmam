import React from 'react';
import './Blog.css';
import Img from "../../assets/blue.png"
import Img1 from "../../assets/led.png"
import Img2 from "../../assets/yellow.png"
function Blog() {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <div className="header-left">
            <p className="subtitle">OUR BLOG</p>
            <h1>Latest posts</h1>
          </div>
          <button className="go-blog-btn">Go to blog</button>
        </div>

        <div className="blog-grid">
          <div className="blog-card">
            <div className="img-box blue-bg">
              <img src={Img} alt="post" />
              <span className="badge">Podcast</span>
            </div>
            <div className="meta">
              <span>Marketing</span> | <span>September 4, 2020</span> | <span>36 min</span>
            </div>
            <h3>What is traffic arbitrage and does it really make money?</h3>
            <p>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
            <a href="#" className="read-more">Listen →</a>
          </div>

          <div className="blog-card">
            <div className="img-box green-bg">
              <img src={Img1} alt="post" />
              <span className="badge">Video</span>
            </div>
            <div className="meta">
              <span>Management</span> | <span>August 25, 2020</span> | <span>45 min</span>
            </div>
            <h3>What to do and who to talk to if you want to get feedback on the product</h3>
            <p>Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...</p>
            <a href="#" className="read-more">Watch →</a>
          </div>

          <div className="blog-card">
            <div className="img-box yellow-bg">
              <img src={Img2} alt="post" />
              <span className="badge">Article</span>
            </div>
            <div className="meta">
              <span>Design</span> | <span>August 8, 2020</span>
            </div>
            <h3>Should you choose a creative profession if you are attracted to creativity?</h3>
            <p>Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</p>
            <a href="#" className="read-more">Read →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;