import SUBL from "./SlideUpByLetter";

const Section5 = () => {
  return (
    <section className="section-5">
      <div>
        <SUBL text="We give you full" />
        <div className="flex">
          <span className="gray-text">
            <SUBL text="control " />
          </span>
          <SUBL text="over your data" startCount={8} />
        </div>
      </div>

      <div>
        <img src="section-5-duo.png" alt="img" />
      </div>
    </section>
  );
};

export default Section5;
