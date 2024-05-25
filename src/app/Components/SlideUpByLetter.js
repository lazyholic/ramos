const SlideUpByLetter = ({ text, startCount = 0 }) => {
  const letters = text.split("");

  const generateDivs = () => {
    const step = 50;
    let count = startCount;

    return letters.map((letter) => {
      if (letter === " ") return <span>&nbsp;</span>;
      return (
        <div data-aos="fade-up" data-aos-delay={`${count++ * step}`}>
          {letter}
        </div>
      );
    });
  };

  return (
    <div className="flex" style={{ overflow: "hidden" }}>
      {generateDivs()}
    </div>
  );
};

export default SlideUpByLetter;
