import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import { fetchFixtures } from "./lib/fetch-data";
import { data } from "./lib/dummy-data";
import Table from "./components/table";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fixture from "./components/fixture";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CachedIcon from "@mui/icons-material/Cached";

function App() {
  const [fixtures, setFixtures] = useState(data);

  // Uncomment this part if you want it to  fetch data from RAPIDAPI
  // const fetchInfo = async () => {
  //   const data = await fetchFixtures();
  //   setFixtures(data);
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);

  console.log(fixtures);

  const refresh = () => window.location.reload(true);

  return (
    <div className="w-full md:w-[700px]  lg:w-[800px] m-auto">
      <NavBar />

      <button
        onClick={refresh}
        className="btn btn-sm fixed bottom-3 right-2 z-40"
      >
        <CachedIcon />
      </button>

      {fixtures.length == 0 ? (
        <div className="h-screen bg-white w-full text-center p-10">
          <Box>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Table data={fixtures} />}></Route>
            <Route
              path="/fixture/:matchID"
              element={<Fixture data={fixtures} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
