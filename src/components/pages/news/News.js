import React from "react";

import "./News.css";
import SampleNews from "./SampleNews";
import ReadMoreBtn from "./ReadMoreBtn";

function News() {
  return (
    <div className="container jumbotron bg-transparent">
      <div className="row">
        <div className="col-md-9">
          <div className="px-lg-4">
            <h2>This is just a place holder.</h2>
            <hr />
            <div>
              <SampleNews ellipsis={true} />
              <div className="d-flex justify-content-end">
                <ReadMoreBtn />
              </div>
              <hr />
              <SampleNews ellipsis={true} />
              <div className="d-flex justify-content-end">
                <ReadMoreBtn />
              </div>
              <hr />
              <SampleNews ellipsis={true} />
              <div className="d-flex justify-content-end">
                <ReadMoreBtn />
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-3 px-lg-4 right">
          <h2>This is just a place holder.</h2>
          <hr />
          <h5>This is just a place holder.</h5>
          <p>
            You can remove any link to our website from this website template,
            you're free to use this website template without linking back to us.
          </p>
          <hr />
          <h5>This is just a place holder.</h5>
          <p>
            This is just a place holder, so you can see what the site would look
            like.
          </p>
          <hr />
          <h5>This is just a place holder.</h5>
          <p>
            You can remove any link to our website from this website template,
            you're free to use this website template without linking back to us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
