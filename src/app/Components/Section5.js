import SUBL from "./SlideUpByLetter";

const Section5 = () => {
  return (
    <section className="section-5">
      <h1>
        <SUBL text="We give you full" />
        <div className="flex">
          <span className="gray-text">
            <SUBL text="control " />
          </span>
          <SUBL text="over your data" startCount={8} />
        </div>
      </h1>

      <div className="flex justify-center">
        <div className="card" data-aos="fade-up">
          <img
            src="section-5-left.png"
            alt="section 5 left"
            data-aos="fade-left"
            data-aos-duration="1000"
          />
          <h3 data-aos="fade-up">Improved customer service</h3>
          <p data-aos="fade-up">
            Analytics helps optimize service processes by <br /> providing
            information on how to improve interactions <br /> with customer and
            increase their statisfaction.
          </p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-delay="100">
          <img
            src="section-5-right.png"
            alt="section 5 right"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <h3 data-aos="fade-up">Monitoring key indicators</h3>
          <p data-aos="fade-up">
            Analytics platforms allows businesses to track <br /> KPIs, an
            important tool for measuring success <br /> and achieving goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
