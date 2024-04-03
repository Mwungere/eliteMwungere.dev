/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import blogData from "../../data/blog1.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Kigali, Kigali City, Rwanda</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Me</h6>
                    <p>mwungereelite56@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Me</h6>
                    <p>+250793095605</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                {blogData.slice(0, 2).map((item, index) => (
                  <li key={item.id}>
                    <div className="img">
                      <Link href="/blog-details/blog-details-dark">
                        <a>
                          <img src={item.image} alt={`blog ${item.id}`} />
                        </a>
                      </Link>
                    </div>
                    <div className="sm-post">
                      <Link href="/blog-details/blog-details-dark">
                        <a>
                          <p>{item.title}</p>
                        </a>
                      </Link>
                      <div>
                        <Link href="/blog/blog-dark">
                          <a>
                            <span className="date">
                              {item.date.day} {item.date.month} {item.date.year}{" "}
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}

              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a target="blank" href="https://www.linkedin.com/in/mwungere-elite-050002263/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a target="blank" href="https://twitter.com/EliteMwungere">
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="blank" href="https://github.com/Mwungere">
                <i className="fab fa-github"></i>
                </a>
                <a target="blank" href="https://www.instagram.com/elilay56/">
                  <i className="fab fa-instagram"></i>
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
