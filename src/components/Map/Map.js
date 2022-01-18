import React from "react";
import GoogleMapReact from "google-map-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className="Map__container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        yesIWantToUseGoogleMapApiInternals
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
