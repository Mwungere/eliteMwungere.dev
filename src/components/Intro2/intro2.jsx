/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="intro-text">
                <h6>Passionate Full-stack Developer</h6>
              </div>
              <h1 className="mb-10 fw-600"><span className='color-font'>Elite Mwungere</span>, Crafting Solutions.</h1>
              <p>
                As a seasoned full-stack developer, I specialize in crafting innovative solutions that drive success. Let&lsquo;s build something remarkable together.
              </p>

              <Link
                href={`/about/about-dark`}
              >
                <a className="butn bord curve mt-30">
                  <span>About Me</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="/img/slid/001.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2