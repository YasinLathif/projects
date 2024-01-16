import React from 'react';
import './About.css';
import banner from '../../../src/assets/banner.png';

const About = () => {
  return (
    <section className='about' data-aos="fade-up" data-aos-duration="1000" id='about'>
      <h2 className='about-title'>About Me</h2>
      <div className='row'>
        <div className='col-lg-6' data-aos="fade-up" data-aos-duration="2000">
          <img src={banner} alt='banner' className='about-photo img-fluid' />
        </div>
        <div className='col-lg-6 about-content' data-aos="fade-up" data-aos-duration="3000">
          <h3 className='text-center'>A dedicated Front-end Developer
            based in Chennai, India 📍</h3>
          <p>"As a Full Stack Java Developer with over 2 years of
            experience in a leading MNC, I have demonstrated my ability to work
            with both front-end and back-end technologies. My expertise in React
            front-end development is evidenced by a successful capstone project.
            I am a certified and relatable professional with a passion for project success.
            My strong communication skills and ability to work collaboratively make me an asset to any team.
            I am always looking for ways to improve my skills and stay up-to-date with the latest technologies."</p>
          <div className="row mb-4">
            <div className="col-sm-4">
              <div className="row g-0">
                <div className="col" id="no_text">2+</div>
                <div className="col" id="text_text">Years of Experience</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row g-0">
                <div className="col" id="no_text">5+</div>
                <div className="col" id="text_text">Completed Projects</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="row g-0">
                <div className="col" id="no_text">6+</div>
                <div className="col" id="text_text">Certificates Earned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
