/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About Me.</h4>
              <p className="wow txt" data-splitting>
                I am a creative individual, passionate about advertising and ranked among the finest in the US. I cultivate smart ideas for start-ups and seasoned players alike.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> My Mission
                  </h6>
                  <p>
                    My mission is to deliver impactful solutions that resonate with audiences, leveraging my expertise in the field.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> My Goals
                  </h6>
                  <p>
                    My goals are to continuously innovate, exceed client expectations, and drive meaningful results through my work.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Me?
                  </h6>
                  <p>
                    I bring a unique blend of creativity, strategic thinking, and dedication to every project I undertake, ensuring success and client satisfaction.
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
