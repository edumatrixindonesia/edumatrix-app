import { useRef } from "react";
import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img
        className="logo-edm"
        src="https://edukids.co.id/static/media/logoedu-putih.7b3ed33ad33f3ca41bca.png"
        alt=""
      />
      <nav ref={navRef}>
        <div className="btn-ourtry">
          <a href="/#" className="program-tryout">
            Our Program
          </a>
          <button className="btn-nav">Tryout</button>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Navbar;
