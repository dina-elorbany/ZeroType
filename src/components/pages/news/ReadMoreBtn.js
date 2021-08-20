import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function ReadMoreBtn() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Link to="/readmore" className="read-btn p-2">
        Read More →
      </Link>
    </BrowserRouter>
  );
}

export default ReadMoreBtn;
