import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import FilterTabs from "../../components/FilterTabs/FilterTabs";
import { useOutletContext } from "react-router-dom";
import styles from "./HomePage.module.css";

function Home(props) {

	const { data } = useOutletContext();
	const { topAlbums, newAlbums, allSongs, songFilters } = data;
	console.log(allSongs, "Home");

	return (
		<>
			<Hero />
			<div className={styles.sectionWrapper}>
				<Section title="Top Albums" data={topAlbums} type="album" />
				<Section title="New Albums" data={newAlbums} type="album" />
			</div>
			<div className={styles.filter_songs_wrapper}>
				<div>
					<h3 className={styles.tabsTitle}>Songs</h3>
				</div>
				<FilterTabs data={allSongs} filters={songFilters} />
			</div>
		</>
	);
}

export default Home;
