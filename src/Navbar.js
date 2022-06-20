import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Cost Manager
      </Link>
      <ul>
        <li className="active ">
          <Link to="/newcost">add cost item</Link>
        </li>
        <li className="active ">
          <Link to="/users">users</Link>
        </li>
        <li className="active ">
          <Link to="/report">report</Link>
        </li>
        <li className="active ">
          <Link to="/newuser">new user</Link>
        </li>
      </ul>
    </nav>
  );
}
