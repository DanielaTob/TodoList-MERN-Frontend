import React from "react";
import { Link } from "react-router-dom";
import imghome from "../assets/img/landing.png";
import Scroll from "../components/Scroll";


export default function Landing() {
  return (
    <div>
      <Scroll />
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <img
              src={imghome}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-white font-bold">Smart Task!</h1>
              <p className="py-6 text-white">
              Regain your clarity and peace of mind by taking all those tasks out of your 
              head to put on your Smart Task!, no matter where you are.
              Smart Task! gives you the peace of mind of knowing that everything is properly organized
              and registered so that you can progress in the things that are really important to you.
              </p>
              <Link to="/Tasks">
              <button className="btn btn-info text-white">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
