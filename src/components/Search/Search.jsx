import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function SearchBar({placeholder}) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
	return (
		<div>
			<form className={styles.wrapper} onSubmit={onSubmit}>
				<input className={styles.search} required placeholder={placeholder} />
				<button className={styles.searchButton} type="submit">
					<SearchIcon />
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
