import React from "react";
import "./Home.css";
import box from "../../../assets/box.png";

const Home = () => {
  return (
    <div className="main-section">
      <div className="container jumbotron bg-transparent main-content">
        <div className="row mb-lg-5 align-items-center">
          <div className="col-md ml-lg-5" width="70%">
            <h1 className="fa-4x text-uppercase">ideas?</h1>
            <h2 className="fa-2x">This is just a place holder.</h2>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us.
            </p>
            <div className="d-flex justify-content-lg-center">
              <div className="my-lg-3 my-md-3">
                <button className="text-uppercase d-block m-auto try-it-btn">
                  Try It Now!
                </button>
                <small>Don’t worry it’s for free</small>
              </div>
            </div>
          </div>
          <div className="col-md mx-lg-3 text-center box">
            <img src={box} alt="box" width="90%" />
          </div>
        </div>
        <h2 className="ml-lg-3 fa-2x title">This is just a place holder.</h2>
        {/* <br /> */}
        <div className="row ">
          <div className="col-md mx-lg-3">
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us.
            </p>
            <p>
              This is just a place holder, so you can see what the site would
              look like.
            </p>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us. This is just a place holder, so you can see what the site
              would look like.
            </p>
          </div>
          <div className="col-md mx-lg-3">
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us.
            </p>
            <p>
              This is just a place holder, so you can see what the site would
              look like.
            </p>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us. This is just a place holder, so you can see what the site
              would look like.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Home;
