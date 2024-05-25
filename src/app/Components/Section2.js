const Section2 = () => {
  return (
    <section className="section-2">
      <div className="part-1">
        <div className="left-panel overflow-hidden">
          <div>
            <div data-aos="fade-up">Your key to strategic</div>
            <div data-aos="fade-up" data-aos-delay="100">
              success through analytics
            </div>
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
          Unique algorithms provide insights from data, reduce time for analysis
          <br />
          and save time for making important informed decisions
        </span>
      </div>
    </section>
  );
};

export default Section2;
