import React from "react";
import imghome from "../assets/img/landing.png";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <div>
            <Navbar />
        
      <div className="bg-stone-700">
        <div className="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={imghome}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-white font-bold">Smart Task!</h1>
              <p className="py-6 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-info text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}