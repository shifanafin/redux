import React from 'react'

function Screenshot() {
  return (
    <div>
      
      {/* ======= Screenshots Section ======= */}
    <section id="screenshots" className="padd-section text-center">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>App Gallery</h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>
        <div className="screens-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img src="Assests/img/screen/1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="Assests/img/screen/2.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="Assests/img/screen/3.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="Assests/img/screen/4.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="Assests/img/screen/5.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="Assests/img/screen/6.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="Assests/img/screen/7.jpg" className="img-fluid" alt="" />
            </div>
            <div className="swiper-slide">
              <img src="Assests/img/screen/8.jpg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>
    {/* End Screenshots Section */}
    
    </div>
  )
}

export default Screenshot
