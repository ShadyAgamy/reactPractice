import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./header.scss";

function Header() {
  return (
    <nav className="header navbar navbar-light bg-light protectedNav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" />
        </Link>
        <form className="d-flex">
          <Link to="/store" type="button" className="btn  mx-3">
            My Store
          </Link>
          <Link to="/addproduct" type="button" className="btn ">
            Add New Property
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Header;
