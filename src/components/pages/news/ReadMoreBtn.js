import React from "react";
import { Link } from "react-router-dom";

function ReadMoreBtn() {
  return (
      <Link to="/readmore" className="read-btn p-2">
        Read More →
      </Link>
  );
}

export default ReadMoreBtn;
