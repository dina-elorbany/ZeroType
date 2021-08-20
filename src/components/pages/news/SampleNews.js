import React from "react";
import { BrowserRouter } from "react-router-dom";

function SampleNews() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div className="row">
        <div className="col-lg-2 text-lg-center">
          <p className=" p-lg-1 date">03 2023</p>
        </div>
        <div className="col-lg-10">
          <h3>This is just a place holder.</h3>
          <pre>Brian Ferry</pre>
          <div className="">
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us. This is just a place holder, so you can see what the site
              would look like. This is just a place holder.
            </p>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us.
            </p>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us. This is just a place holder, so you can see what the site
              would look like.
            </p>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us. This is just a place holder, so you can see what the site
              would look like. This is just a place holder.
            </p>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us.
            </p>
            <p>
              You can remove any link to our website from this website template,
              you're free to use this website template without linking back to
              us. This is just a place holder, so you can see what the site
              would look like.
            </p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default SampleNews;
