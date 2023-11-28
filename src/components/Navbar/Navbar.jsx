import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Nabvar() {
	return (
		<nav className={styles.navbar}>
			<a href="/">
                <Logo />
            </a>
			<Search placeholder="Search a song of your choice" />
			<Button>Give Feedback</Button>
		</nav>
	);
};

export default Nabvar;
