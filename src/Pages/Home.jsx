import React from 'react'

function Home() {
  return (
    <div>
  

  <section id="hero">
    <div className="hero-container" data-aos="fade-in">
      <h1>Welcome to eStartup</h1>
      <h2>Elegant Bootstrap Template for Startups, Apps &amp; more...</h2>
      <img
        src="Assests/img/hero-img.png"
        alt="Hero Imgs"
        data-aos="zoom-out"
        data-aos-delay={100}
      />
      <a href="#get-started" className="btn-get-started scrollto">
        Get Started
      </a>
      <div className="btns">
        <a href="#">
          <i className="fa fa-apple fa-3x" /> App Store
        </a>
        <a href="#">
          <i className="fa fa-play fa-3x" /> Google Play
        </a>
        <a href="#">
          <i className="fa fa-windows fa-3x" /> windows
        </a>
      </div>
    </div>
  </section>
  {/* End Home Section */}
  <main id="main">
    {/* ======= Get Started Section ======= */}
    <section id="get-started" className="padd-section text-center">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>simple systeme fordiscount </h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="feature-block">
              <img src="Assests/img/svg/cloud.svg" alt="img" />
              <h4>introducing whatsapp</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="feature-block">
              <img src="Assests/img/svg/planet.svg" alt="img" />
              <h4>user friendly interface</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="feature-block">
              <img src="Assests/img/svg/asteroid.svg" alt="img" />
              <h4>build the app everyone love</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
              <a href="#">read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</main> 
</div>

  )
}

export default Home
