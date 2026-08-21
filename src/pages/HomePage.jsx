import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Link to="/" className="nav-name">
          Hi, Angelo Here!
        </Link>
      </nav>

      <div className="home">
        <h1>Welcome to My Portfolio</h1>

        <p>
          I'm an IT student who enjoys learning about technology
          and creating simple websites.
        </p>
      </div>
    </div>
  );
}

export default HomePage;