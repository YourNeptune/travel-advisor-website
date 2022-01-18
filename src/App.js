import "./App.css";
import { CssBaseline, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import { getPlacesData } from "./api/fetchPlacesData";
import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    // getPlacesData(bounds.ne,bounds.sw).then((data) => {
    //   console.log(data);
    //  setPlaces(data)
    // });
  }, [bounds]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setCoordinates({ lat: crd.latitude, lng: crd.longitude });
    });
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={0} className="App__contentContainer">
        <Grid item xs={12} md={4} className="App__listContainer">
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8} className="App__mapContainer">
          <Map
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
