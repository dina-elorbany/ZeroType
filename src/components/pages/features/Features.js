import React from "react";

import recyclImg from "../../../assets/recycle.png";
import boxImg from "../../../assets/box-of-icons.png";

function Features() {
  return (
    <div className="container jumbotron bg-transparent text-justify">
      <h1 className="">This is just a place holder.</h1>
      <p>
        You can remove any link to our website from this website template,
        you're free to use this website template without linking back to us.
      </p>

      <div className="row mt-md-5">
        <div className="col-sm-3 text-center">
          <img
            src={recyclImg}
            alt="Zero-Type"
            width="100%"
            className="mt-md-5"
          />
        </div>
        <div className="col-sm-9">
          <h2>This is just a place holder.</h2>
          <p>
            This is just a place holder, so you can see what the site would look
            like. This is just a place holder.
          </p>
          <h2>This is just a place holder.</h2>
          <p>
            You can remove any link to our website from this website template,
            you're free to use this website template without linking back to us.
            This is just a place holder, so you can see what the site would look
            like. This is just a place holder.
          </p>
        </div>
      </div>

      <div className="row mb-md-5">
        <div className="col-sm-3 text-center">
          <img src={boxImg} alt="Zero-Type" width="100%" className="mt-md-5" />
        </div>
        <div className="col-sm-9">
          <h2>This is just a place holder.</h2>
          <p>
            You can remove any link to our website from this website template,
            you're free to use this website template without linking back to us.
          </p>
          <h2>This is just a place holder.</h2>
          <p>
            This is just a place holder, so you can see what the site would look
            like. This is just a place holder.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
