import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import {styles} from "./HomePage.module.css"

function Home(props) {

	const { data } = useOutletContext();
	const { topAlbums, newAlbums } = data;

	return (
		<>
			<Hero />
			<div className={StyleSheet.wrapper}>
				<Section title="Top Albums" data={topAlbums} type="album" />
				<Section title="New Albums" data={newAlbums} type="album" />
			</div>
		</>
	);
}

export default Home;
