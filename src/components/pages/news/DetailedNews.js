import React from "react";
import { Link } from "react-router-dom";
import SampleNews from "./SampleNews";

const detailedNews = () => {
  return (
    <div className="container jumbotron bg-transparent text-justify">
      <div>
        <SampleNews />
      </div>
      <div className="d-flex flex-row-reverse mb-md-5">
        <Link to="/news" className="read-btn p-2">
          Back to News →
        </Link>
      </div>
    </div>
  );
};

export default detailedNews;
