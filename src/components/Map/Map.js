import React from "react";
import GoogleMapReact from "google-map-react";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./styles.css";
import { Marker } from "@react-google-maps/api";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import { Paper, Stack, Typography } from "@mui/material";
import restaurant_photo from "../../img/restaurant.jpg";

const Map = ({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="Map__container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map(
          (place, i) =>
            place.name && (
              <div
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                className="Map__PlaceMarker"
              >
                {isMobile ? (
                  <LocationOnOutlinedIcon
                    color="primary"
                    fontSize="large"
                    className="Map__markerIcon"
                  />
                ) : (
                  <Paper elevation={3} className="Map__PlaceMaker__paper">
                    <Stack direction="row">
                      <KeyboardDoubleArrowLeftOutlinedIcon fontSize="small" />
                      <Typography variant="subtitle2">{place.name}</Typography>
                    </Stack>

                    <img
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : restaurant_photo
                      }
                      alt="img"
                    />
                  </Paper>
                )}
              </div>
            )
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
