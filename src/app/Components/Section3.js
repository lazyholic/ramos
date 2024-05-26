import SUBL from "./SlideUpByLetter";

const ActivityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-activity"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"
    />
  </svg>
);

const Circles = () => {
  return (
    <div className="circles">
      <div
        className="circle-1"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <ActivityIcon />
      </div>
      <div className="circle-2" data-aos="zoom-in" data-aos-duration="800">
        <h2>45%</h2>
        <p>
          System grow <br /> faster
        </p>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <section className="section-3">
      <div className="part-1">
        <h1 className="top">
          <div className="flex">
            <SUBL text="Maximize " />
            <span className="gray-text">
              <SUBL text="efficiency " startCount={9} />
            </span>
          </div>
          <SUBL text="with our intuitive" />
        </h1>

        <div className="bottom">
          <Circles />
          <div
            id="yellow-container"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h1 id="scroll-text">analytics service</h1>
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
