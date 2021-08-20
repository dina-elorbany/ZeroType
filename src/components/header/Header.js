import React from "react";
import "./Header.css";

import logoImg from "../../assets/logo.png";

import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Link, NavLink, Switch, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Features from "../pages/features/Features";
import News from "../pages/news/News";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import ReadMore from "../pages/news/DetailedNews";

function Header() {
  return (
    <BrowserRouter>
      <Navbar expand="lg" className="nav">
        <div className="container">
          <Navbar.Brand
            as={Link}
            to="/"
            className="brand d-flex flex-column mx-lg-5"
          >
            {" "}
            <img
              alt="Zero Type"
              src={logoImg}
              width="50"
              height="80"
              className="d-inline-block align-top m-auto"
            />
            <small>ZERO TYPE</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink exact to="/" className="nav-link px-lg-5">
                Home
              </NavLink>

              <NavLink to="/features" className="nav-link px-lg-5">
                Features
              </NavLink>

              <NavLink to="/news" className="nav-link px-lg-5">
                News
              </NavLink>

              <NavLink to="/about" className="nav-link px-lg-5">
                About
              </NavLink>

              <NavLink to="/contact" className="nav-link px-lg-5">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/news" component={News} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/readmore" component={ReadMore} />
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
