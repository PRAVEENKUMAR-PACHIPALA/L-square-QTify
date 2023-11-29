import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import styles from "./FilterTabs.module.css";

// const FilterTabs = (data, filters) => {

// 	const [value, setValue] = useState(0);

// 	const _handleTabs = (e, val) => {
// 		setValue(val);
// 	};

	// function TabPanel(props) {
	// 	const { children, value, index } = props;
	// 	return <div>{value === index && <>{children}</>}</div>;
	// }

// 	// Filter data based on the selected tab value.
// 	const filteredData = (tabIndex) => {
// 		if (tabIndex === 0) {
// 			return data; // Show all data for the "All" tab.
// 		} else {
// 			const tabLabel = filters[tabIndex - 1];
// 			return data?.filter(
// 				(item) => item?.genre?.key === tabLabel.key
// 			);
// 		}
// 	};

// 	return (
// 		<div className={styles.filterSectionWrapper}>
// 			<Box sx={{ width: "100%" }}>
// 				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
// 					<Tabs
// 						value={value}
// 						onChange={_handleTabs}
// 						aria-label="basic tabs"
// 						id={styles.tabs_wrapper}>
// 						{filters && filters.map((each, idx) => (
// 							<Tab label={each.label} key={each.key} sx={{ color: "white" }} />
// 						))}
// 					</Tabs>
// 				</Box>

// 				{filters && filters.map((ele, index) => (
// 					<TabPanel key={index} value={value} index={index}>
// 						<div>
// 							<Section
// 								data={filteredData(index)}
// 								type="songs"
// 								header={"filterAll"}
// 							/>
// 						</div>
// 					</TabPanel>
// 				))}
// 			</Box>
// 		</div>
// 	);
// };

// export default FilterTabs;
  
  function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }}>
			{children}
		  </Box>
		)}
	  </div>
	);
  }
  
  function a11yProps(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
  }
  
  export default function FilterTabs({data, filters}) {
	console.log(data, "Filters");
	const [value, setValue] = useState(0);
  
	const handleChange = (event, newValue) => {
		console.log(newValue);
	  	setValue(newValue);
	};

	const filteredData = (index) => {
		if(index === 0){
			console.log(data, index)
			return data;
		}
		let cardData = data?.filter((item) => (filters[index].key === item.genre.key));
		console.log(cardData, index)
		return cardData;
	}
  
	return (
	  <Box sx={{ width: '100%' }}>
		<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
		  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
		  		{filters && filters.map((each, idx) => (
 					<Tab label={each.label} key={each.key} {...a11yProps(idx)} sx={{ color: "white" }} />
				))}
		  </Tabs>
		</Box>

		{filters && filters.map((ele, index) => (
			<TabPanel key={index} value={value} index={index}>
				<div>
					<Section
						data={filteredData(index)}
						type="songs"
						header={"filterAll"}
					/>
				</div>
			</TabPanel>
		))}
	  </Box>
	);
  }
