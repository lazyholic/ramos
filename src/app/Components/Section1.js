import SUBL from "./SlideUpByLetter";

const Section1 = () => {
  return (
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
            <h1>
              <SUBL text="Analytics" />
            </h1>
          </div>
          <h1 className="line-2">
            <SUBL text="that " />
            <span className="gray-text">
              <SUBL text="help " startCount={5} />
            </span>{" "}
            <SUBL text="you" startCount={8} />
          </h1>
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

      <h1 className="line-3 flex justify-end items-center">
        <SUBL text="shape" />
        <img
          src="line-3-img.png"
          alt="image"
          data-aos="zoom-in"
          data-aos-duration="1000"
        />
        <SUBL text="the future" startCount={6} />
      </h1>
    </section>
  );
};

export default Section1;
