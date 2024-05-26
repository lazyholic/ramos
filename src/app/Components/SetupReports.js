const SetupReports = () => {
  return (
    <div className="setup-reports">
      <div className="w-1/2 flex flex-col justify-between items-start">
        <span className="yellow-tag" data-aos="fade-down">
          Setting up reports
        </span>
        <div>
          <h3 data-aos="fade-up">
            Fast and easy access <br /> to analytics
          </h3>
          <p data-aos="fade-up">
            One platform is a comprehensive system of solutions that will be the
            first step towards digitalization of your business!
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src="sales-statistics.png"
          alt="sales statistics"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default SetupReports;
