import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsVinyl } from "react-icons/bs";

import SearchRecord from "./SearchRecord";
import "../styles/Navbar.scss";
import CartButton from "./cart/CartButton";
import { DataContext } from "../contexts/Context";
import { logout } from "../api/usersApi";

const Nav = () => {
  const { usersState, usersDispatch } = useContext(DataContext);
  const { isUserLoggedIn } = usersState;

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(usersDispatch);
    navigate("/");
  };

  const LoggedUsersLinks = () => {
    return (
      <>
        <Link className="nav-link" onClick={handleLogout}>
          Logout
        </Link>
      </>
    );
  };

  const GuestLinks = () => (
    <>
      <Link to="/login" className="nav-link">
        <p>Login</p>
      </Link>
      <Link to="/signup" className="nav-link">
        <p>Register</p>
      </Link>
    </>
  );

  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <Link to={"/"} className="logo">
          <BsVinyl className="logo-icon" />
          <span>E-11 Records</span>
        </Link>

        {location.pathname.startsWith("/records") ? (
          <SearchRecord />
        ) : (
          <Link to="/records" className="browse-button">
            Explore Our Collection
          </Link>
        )}

        <div className="items">
          {isUserLoggedIn ? <LoggedUsersLinks /> : <GuestLinks />}
          {isUserLoggedIn && <CartButton />}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
