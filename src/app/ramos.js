"use client";

import { useEffect } from "react";

const Ramos = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <nav className="text-white flex justify-between items-center">
        <div className="nav-logo">
          <img src="ramos.png" alt="logo" />
          <span>ramos</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Documents</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>

        <button className="btn">Sign Up</button>
      </nav>

      <section className="section-1" data-aos="fade-up">
        <div className="flex">
          <div className="left-col">
            <div className="line-1">
              <img
                src="section-1-left.png"
                alt="image"
                data-aos="zoom-in"
                data-aos-duration="1000"
              />
              <span>Analytics</span>
            </div>
            <div className="line-2">
              that <span className="gray-text">help</span> you
            </div>
          </div>

          <div>
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src="section-1-right.png"
              alt="image"
            />
          </div>
        </div>

        <div className="line-3">
          shape{" "}
          <img
            src="line-3-img.png"
            alt="image"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />{" "}
          the future
        </div>
      </section>

      <section className="section-2">
        <div className="part-1">
          <div className="left-panel">
            <div data-aos="fade-up">
              Your key to strategic <br />
              success through analytics
            </div>
          </div>
          <div className="right-panel">
            <div data-aos="fade-up">
              Ready for exciting, instantaneous,
              <br />
              all-accessible insights in real time?
            </div>
          </div>
        </div>

        <div className="part-2">
          <div className="left-panel">
            <img src="section-2-left.png" alt="img" />
          </div>
          <div className="right-panel">
            <img src="section-2-right.png" alt="img" />
          </div>
        </div>

        <div className="part-3">
          <div>
            <span className="upto">Up to</span>
            <span className="percentage">45%</span>
          </div>
          <span className="paragraph" data-aos="fade-up">
            Increase your analytics efficiency by up to 45%.
            <br />
            Unique algorithms provide insights from data, reduce time for
            analysis
            <br />
            and save time for making important informed decisions
          </span>
        </div>
      </section>

      <section className="section-3">
        <div className="part-1">
          <div className="top">
            <span>Maximize</span> <span className="gray-text">efficiency</span>
            <br />
            with our intuitive
          </div>

          <div className="bottom">
            <img src="section-3-circles.png" alt="img" />

            <div
              id="yellow-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div id="scroll-text">analytics service</div>
            </div>
          </div>
        </div>

        <hr className="my-10" />

        <div className="part-2">
          <div>
            Explore traffic sources, page behavior, conversations and more to
            gain deep insight
            <br />
            into your audience. With us, your business doesn&apos;t just adapts
            - it evolves
          </div>

          <div>
            <button className="btn demo" data-aos="zoom-in">
              Request a demo
            </button>
            <button className="btn free-trial" data-aos="zoom-in">
              Start for free
            </button>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="top">
          <div>
            Turn data into real
            <br />
            actions and ideas.
          </div>

          <ul>
            <li data-aos="fade-up">
              <span>Instant Insights</span>
              <button className="icon">
                <i className="fa fa-plus"></i>
              </button>
            </li>
            <li data-aos="fade-up">
              <span>AI Technology</span>
              <button className="icon">
                <i className="fa fa-plus"></i>
              </button>
            </li>
            <li data-aos="fade-up">
              <span>Easy Integration</span>
              <button className="icon">
                <i className="fa fa-plus"></i>
              </button>
            </li>
          </ul>
        </div>

        <div className="giant-ramos">Ramos</div>
      </section>

      <section className="section-5">
        <div>
          We give you full <br />
          <span className="gray-text">control</span> over your data
        </div>

        <div>
          <img src="section-5-duo.png" alt="img" />
        </div>
      </section>

      <section className="section-6">
        <div className="logo" data-aos="zoom-out">
          <img src="ramos.png" alt="ramos" />
        </div>

        <div id="get-started">Get Started</div>
        <div className="info gray-text">
          Turn information into advantage! Start using <br />
          Ramos today. Sign up for a free trial.
        </div>
        <div>
          <button className="btn demo" data-aos="zoom-in">
            Request a demo
          </button>
          <button className="btn free-trial" data-aos="zoom-in">
            Start for free
          </button>
        </div>
      </section>

      <footer>
        <div className="flex justify-between items-center" data-aos="fade-up">
          <ul className="nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>

          <div className="email">hello@ramos.com</div>
        </div>

        <hr className="my-10" />

        <div className="flex justify-between" data-aos="fade-up">
          <div className="flex">
            <div className="address">
              <div className="add-name">Raleigh</div>
              <span>
                125 N Harrington StreetRaleigh,
                <br />
                NC 27603919.833.6413
              </span>
            </div>

            <div className="address">
              <div className="add-name">Charlotte</div>
              <span>
                221 Easy Peterson DriveCharlotte,
                <br />
                NC 27603919.833.6413
              </span>
            </div>
          </div>

          <div>
            <ul className="social">
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div id="footer-ramos">Ramos&reg;</div>

          <div>
            <ul className="legal">
              <li>Privacy Policy</li>
              <li>License Agreement</li>
            </ul>
          </div>

          <div className="qr-code" data-aos="zoom-in">
            <img src="qr-code.png" alt="qr-code" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Ramos;
