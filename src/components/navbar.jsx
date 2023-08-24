import React from "react";
import "../css/navbar.css"; // Make sure to create this CSS file
import myImg from "../assets/logo.png";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div>
				<img src={myImg} className="navbar-logo" />
			</div>
		</nav>
	);
};

export default Navbar;
