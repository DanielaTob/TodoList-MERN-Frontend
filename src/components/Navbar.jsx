import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
          <a className="btn btn-ghost normal-case text-xl">Smart Task!</a>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/Tasks">
              <a>Tasks</a>
              </Link>
            </li>
            <li>
              <Link to="Profile">
              <a>Profile</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
