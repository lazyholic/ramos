import WidgetControl from "./WidgetControl";

const Section2 = () => {
  return (
    <section className="section-2">
      <div className="part-1">
        <div className="left-panel overflow-hidden">
          <h2>
            <div data-aos="fade-up">Your key to strategic</div>
            <div data-aos="fade-up" data-aos-delay="100">
              success through analytics
            </div>
          </h2>
        </div>
        <div className="right-panel">
          <h3 data-aos="fade-up">
            Ready for exciting, instantaneous,
            <br />
            all-accessible insights in real time?
          </h3>
        </div>
      </div>

      <div className="part-2">
        <div className="left-panel">
          <img src="section-2-left.png" alt="img" />
        </div>
        <div className="right-panel">
          <WidgetControl />
        </div>
      </div>

      <div className="part-3">
        <div>
          <span className="upto">Up to</span>
          <h1 className="percentage inline">45%</h1>
        </div>
        <span className="paragraph" data-aos="fade-up">
          Increase your analytics efficiency by up to 45%.
          <br />
          Unique algorithms provide insights from data, reduce time for analysis
          <br />
          and save time for making important informed decisions
        </span>
      </div>
    </section>
  );
};

export default Section2;
