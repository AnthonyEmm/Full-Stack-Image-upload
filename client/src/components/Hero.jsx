import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <h1>Welcome to File Uploader</h1>
      <p>Here you can upload files to Cloudinary</p>
      <button className="btn-hero">
        <Link to="/products">Go to File Uploader</Link>
      </button>
    </>
  );
};

export default Hero;
