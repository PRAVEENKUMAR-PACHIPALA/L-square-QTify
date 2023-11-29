import React, {useState, useEffect} from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from '@mui/material';
import { fetchAllGenres, fetchTopAlbums } from './api/api';
import { fetchNewAlbums } from './api/api';
import { fetchAllSongs } from './api/api';

function App() {

  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return {...prevState, [key]: data};
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("allSongs", fetchAllSongs);
    generateData("songFilters", fetchAllGenres);
  }, [])

  const { topAlbums=[], newAlbums=[], allSongs=[], songFilters=[] } = data;
  console.log(data)

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{data: {topAlbums, newAlbums, allSongs, songFilters}}} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
