import SUBL from "./SlideUpByLetter";

const Section6 = () => {
  return (
    <section className="section-6">
      <div className="logo" data-aos="zoom-out" data-aos-duration="1000">
        <img src="ramos.png" alt="ramos" />
      </div>

      <div id="get-started">
        <SUBL text="Get Started" />
      </div>
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
  );
};

export default Section6;
