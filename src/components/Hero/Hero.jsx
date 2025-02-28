import React from "react";
import styles from "./Hero.module.css";
import Headphone from "../../assets/hero_headphones.svg";

function Hero() {
	return (
		<div className={styles.hero}>
			<div>
                <h1>100 Thousand songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <img src={Headphone} width={212} alt="headphones" />
		</div>
	);
};

export default Hero;
