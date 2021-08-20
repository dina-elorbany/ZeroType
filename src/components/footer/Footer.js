import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="d-flex align-items-center fixed-bottom">
      <div className="container d-flex align-items-center justify-content-between px-md-5 footer-text">
        <small className="">
          © 2021 <a href="https://github.com/dina-elorbany">Dina Elorbany</a>.
          All Rights Reserved.
        </small>
        <div className="">
          <button className="btn p-0">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </button>

          <button className="btn p-0 ml-md-3">
            <i className="fa fa-google-plus-square" aria-hidden="true"></i>
          </button>

          <button className="btn p-0 ml-md-3">
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </button>

          <button className="btn p-0 ml-md-3">
            <i className="fa fa-pinterest-square" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
