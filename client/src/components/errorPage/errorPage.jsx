import React from "react";
import ErrorImage from "../../page_not_found.png";
import Navbar from "../home/navbar/navbar";

const ErrorPage = () => {
  return (
    <div id="wrapper">
      < Navbar />
      <img
        src={ErrorImage}
        alt="Error Image"
        className="w-3/5 h-screen m-auto"
      />
    </div>
  );
};

export default ErrorPage;
