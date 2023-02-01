import logo from "../../images/Header/Logo.svg"
import  { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";
import useScroll from "../../hooks/useScroll";

export function Header (props)  {
  const [isOpen, setIsOpen] = useState(false);
  const Scrolling = useScroll();
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = (a) => () => {
    const element = document.getElementById(a);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      console.log(a);
    }

    handleHamburger();
  };
  return (
    <div id="Home" className={`Header ${Scrolling === "down" ? "" : "scroll"}`}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={handleHamburger}
        aria-label="menu">
        <span className={isOpen ? "bar_close_1" : "bar"}></span>
        <span className={isOpen ? "bar_close_2" : "bar"}></span>
        <span className={isOpen ? "bar_close_3" : "bar"}></span>
      </button>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        {props.home ? (
          <NavLink
            to='/'
            aria-label={props.home}
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              handleHamburger();
            }}>
            {props.home}
          </NavLink>
        ) : (
          <Link to="/">Home</Link>
        )}

        {props.name ? (
         <NavLink to={`/#${props.name}`} aria-label={props.name} onClick={handleClick(props.name)}>
          {props.name}
        </NavLink>
        ) : (
          ""
        )}
        <Link to="/Menu" aria-label="Menu">
          Menu
        </Link>
        <Link to="/Reservation" aria-label="Reservation">
          Reservation
        </Link>
        <Link to="/Order" aria-label="Order">
          Order Online
        </Link>
        <Link to="/Login" aria-label="Login">
          Login
        </Link>
      </nav>
    </div>
  );
};
