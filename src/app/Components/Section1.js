import SUBL from "./SlideUpByLetter";

const BoltIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-lightning-charge-fill"
    viewBox="0 0 16 16"
  >
    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
  </svg>
);

const LineGraph = () => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="30.000000pt"
    height="30.000000pt"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#ffffff"
      stroke="none"
    >
      <path
        d="M4550 3673 c-47 -10 -145 -60 -189 -97 -169 -142 -214 -370 -113
-566 l38 -75 -273 -248 -274 -248 -53 49 c-63 57 -121 86 -214 108 -183 43
-395 -51 -491 -218 l-27 -47 -309 250 -310 249 -12 88 c-20 140 -64 221 -163
306 -98 84 -204 117 -338 105 -236 -20 -404 -197 -419 -444 -7 -108 24 -68
-330 -428 l-254 -259 -43 40 c-172 158 -444 160 -617 4 -158 -142 -200 -354
-108 -547 37 -79 78 -127 149 -175 93 -63 166 -83 287 -78 93 4 109 8 177 41
84 42 176 131 214 209 39 80 55 181 43 268 l-11 74 97 101 c54 55 181 184 282
287 l185 187 69 -65 c151 -143 348 -174 534 -83 47 23 155 121 184 167 14 23
17 20 332 -234 176 -142 320 -262 322 -268 1 -6 7 -38 14 -71 31 -167 160
-307 327 -356 71 -20 206 -16 275 9 111 40 204 120 256 220 46 88 57 140 51
255 l-5 102 293 265 c162 146 300 264 307 262 6 -1 34 -12 62 -24 30 -12 81
-22 130 -25 144 -9 266 38 362 140 219 231 154 592 -133 733 -73 36 -83 39
-178 40 -56 1 -112 0 -126 -3z"
      />
    </g>
  </svg>
);

const Circles = () => {
  return (
    <div className="circles">
      <div className="circle-1" data-aos="zoom-in" data-aos-duration="800">
        <BoltIcon />
      </div>
      <div
        className="circle-2"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <LineGraph />
      </div>
    </div>
  );
};

const Section1 = () => {
  return (
    <section className="section-1" data-aos="fade-up">
      <div className="flex">
        <div className="left-col">
          <div className="line-1">
            <Circles />
            <h1>
              <SUBL text="Analytics" />
            </h1>
          </div>
          <h1 className="line-2">
            <SUBL text="that " />
            <span className="gray-text">
              <SUBL text="helps " startCount={5} />
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
