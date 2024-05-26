import { useEffect, useRef } from "react";

const UpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-up"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
    />
  </svg>
);

function increaseNumberAnimation(element, endNumber, speed = 20) {
  if (!element) return;

  const animationRunning = JSON.parse(
    element.dataset.animationRunning ?? false
  );
  if (animationRunning) return;
  element.dataset.animationRunning = true;
  incNbrRec(0, endNumber, element, speed);
}

function incNbrRec(currentNumber, endNumber, element, speed) {
  if (currentNumber <= endNumber) {
    element.innerHTML = currentNumber + "K";
    setTimeout(function () {
      incNbrRec(currentNumber + 1, endNumber, element, speed);
    }, speed);
  } else {
    element.dataset.animationRunning = false;
  }
}

const WidgetControl = () => {
  const numberRef = useRef(null);

  useEffect(() => {
    if (numberRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            increaseNumberAnimation(numberRef.current, 43);
          } else {
            numberRef.current.dataset.animationRunning = false;
          }
        });
      });

      observer.observe(numberRef.current);
    }
  }, [numberRef.current]);

  return (
    <div className="widget-control">
      <div className="flex items-center justify-center">
        <div className="card overflow-hidden" data-aos="fade-left">
          <img src="widget-control.png" alt="widget-control" />
        </div>
        <div
          className="card text-white flex flex-col justify-between p-5"
          data-aos="fade-right"
        >
          <span>Transactions</span>
          <small>
            <UpIcon /> +14%
          </small>
          <h2 ref={numberRef}>43K</h2>
        </div>
      </div>
      <div>
        <h3 className="text-center mb-5" data-aos="fade-up">
          Widget control
        </h3>
        <p className="text-center" data-aos="fade-up" data-aos-delay="100">
          Reports provide a comprehensive overview <br /> of important aspects
          of web analytics
        </p>
      </div>
    </div>
  );
};

export default WidgetControl;
