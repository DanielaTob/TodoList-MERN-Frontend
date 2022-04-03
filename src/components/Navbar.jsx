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
            <li tabindex="0">
              <a>
                Go to app
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a>Sing up</a>
                </li>
              </ul>
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
