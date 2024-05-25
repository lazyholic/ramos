import SUBL from "./SlideUpByLetter";

const Section3 = () => {
  return (
    <section className="section-3">
      <div className="part-1">
        <div className="top">
          <div className="flex">
            <SUBL text="Maximize " />
            <span className="gray-text">
              <SUBL text="efficiency " startCount={9} />
            </span>
          </div>
          <SUBL text="with our intuitive" />
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
          Explore traffic sources, page behavior, conversations and more to gain
          deep insight
          <br />
          into your audience. With us, your business doesn&apos;t just adapts -
          it evolves
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
  );
};

export default Section3;
