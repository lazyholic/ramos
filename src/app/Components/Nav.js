const Nav = () => {
  return (
    <nav className="text-white flex justify-between items-center overflow-hidden">
      <div className="nav-logo" data-aos="fade-up" data-aos-duration="1000">
        <img src="ramos.png" alt="logo" />
        <span>ramos</span>
      </div>

      <ul className="nav-links " data-aos="fade-up" data-aos-duration="1000">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Documents</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>

      <button className="btn" data-aos="fade-up" data-aos-duration="1000">
        Sign Up
      </button>
    </nav>
  );
};

export default Nav;
