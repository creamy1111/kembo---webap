import React from 'react';
import './AboutUs.css'; // Link to the CSS file
import BlogImg from '../assets/blog.png'
import Aboutus from '../assets/aboutus.png'

function AboutUs() {
    return (
        <div>
            <header>
                <a href="#" className="logo">
                    <img src="" alt="logo" />
                </a>
                <ul className="navbar">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#login">Log In</a>
                    </li>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                </ul>
            </header>

            <div className="box">
                <section className="home" id="home">
                    <div className="home_text">
                        <h1>Đăng nội dung theo cách của bạn</h1>
                        <p>Dễ dàng tạo blog độc đáo và tuyệt đẹp.</p>
                        <a href="#" className="btn">Tạo Blog Của Bạn</a>
                    </div>

                    <div className="home_img">
                        <img src={BlogImg} alt="blog" />
                    </div>
                </section>
            </div>

            <section className="about" id="about">
                <div className="about_img">
                    <img src={Aboutus} alt="aboutus" />
                </div>
                <div className="about_text">
                    <h2>Our</h2>
                    <p>With all that we have, the platform is a gift for those who want to start their journey of sharing ideas online in a professional and easy-to-use way.</p>
                    <p>With an eye-catching, user-friendly interface, a large connected community, ... the platform not only helps you build a personal blog but also helps develop a personal mark, shape your brand, orient the topic to suit many main topics, attract and connect with the global community.</p>
                    <p>So what are you waiting for, start creating your own blog and explore the world of blogging today!</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </section>
        </div>
    );
}
export default AboutUs;
