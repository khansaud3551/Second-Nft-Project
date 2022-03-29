import React, { useRef, useEffect } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "../css/Header.css";

function Header() {
  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains("menu-collapse")) {
      navbarLinks.current.classList.add("menu-collapse");
    }
  };
  return (
    <div>
      <nav className="navbars">
        <div className="navbar-container ">
          <a href="#" className="brand-title">
            <img
              className="logo"
              src="https://www.doodledogsnft.com/wp-content/uploads/2021/11/doodle-dogs-text-logo-blk-min-1024x199.png"
              alt=""
            />
          </a>
          <button
            onClick={(e) => {
              handleNavbarButton(e);
            }}
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div ref={navbarLinks} className="navbar-links menu-collapse">
            <ul className="links-lists m-0">
              <li className="nav-items">
                <NavLink
                  activeclassname="is-active"
                  className="nav-links"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-items">
                <NavLink
                  activeclassname="is-active"
                  className="nav-links"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-items">
                <NavLink
                  activeclassname="is-active"
                  className="nav-links"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-items">
                <NavLink
                  activeclassname="is-active"
                  className="nav-links"
                  to="/contact"
                >
                  <i className="bi bi-discord nav__icon" />
                </NavLink>
              </li>
              <li className="nav-items">
                <NavLink
                  activeclassname="is-active"
                  className="nav-links "
                  to="/contact"
                >
                  <i className="bi bi-twitter nav__icon" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <AllRoutes
          hideMenu={() => {
            hideNavMenu();
          }}
        ></AllRoutes>
      </div>
    </div>
  );
}

function AllRoutes({ hideMenu }) {
  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/about" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

function Home() {
  return <h1 className="m-0"></h1>;
}

function About() {
  return <h1>This is about page</h1>;
}

function Contact() {
  return <h1>This is contact page</h1>;
}

export default Header;
