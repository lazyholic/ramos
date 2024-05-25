const Nav = () => {
  return (
    <nav className="text-white flex justify-between items-center">
      <div className="nav-logo">
        <img src="ramos.png" alt="logo" />
        <span>ramos</span>
      </div>

      <ul className="nav-links">
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

      <button className="btn">Sign Up</button>
    </nav>
  );
};

export default Nav;
