const Section4 = () => {
  return (
    <section className="section-4">
      <div className="flex">
        <div className="top">
          <h2>
            <div data-aos="fade-up">Turn data into real</div>
            <div data-aos="fade-up" data-aos-delay="100">
              actions and ideas.
            </div>
          </h2>

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

        <div>
          <img
            className="ramos-desktop"
            src="section-4-desktop.png"
            alt="desktop"
            data-aos="fade-up"
          />

          <img
            className="ramos-mobile"
            src="ramos-mobile.png"
            alt="ramos-mobile"
            data-aos="fade-up"
            data-aos-delay="100"
          />
        </div>
      </div>

      <div className="giant-ramos">Ramos</div>
    </section>
  );
};

export default Section4;
