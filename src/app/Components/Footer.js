const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between items-center" data-aos="fade-up">
        <ul className="nav">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Why Us</a>
          </li>
          <li>
            <a href="#">Platform</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>

        <div className="email">hello@ramos.com</div>
      </div>

      <hr className="my-10" />

      <div className="flex justify-between" data-aos="fade-up">
        <div className="flex">
          <div className="address">
            <div className="add-name">Raleigh</div>
            <span>
              125 N Harrington StreetRaleigh,
              <br />
              NC 27603919.833.6413
            </span>
          </div>

          <div className="address">
            <div className="add-name">Charlotte</div>
            <span>
              221 Easy Peterson DriveCharlotte,
              <br />
              NC 27603919.833.6413
            </span>
          </div>
        </div>

        <div>
          <ul className="social">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div id="footer-ramos">Ramos&reg;</div>

        <div>
          <ul className="legal">
            <li>Privacy Policy</li>
            <li>License Agreement</li>
          </ul>
        </div>

        <div className="qr-code" data-aos="zoom-in">
          <img src="qr-code.png" alt="qr-code" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
