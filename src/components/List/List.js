import { Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import PlaceDetail from "../PlaceDetails/PlaceDetails";
import Inputs from "./Inputs";

import "./styles.css";

const List = ({ places, childClicked }) => {
  console.log({ childClicked });
  return (
    <div className="List">
      <section className="List__titleContainer">
        <Typography variant="h5" className="List__title flex-center">
          Planning your trip!🗺️
        </Typography>
        <Inputs />
      </section>
      <Grid
        container
        spacing={3}
        overflow="auto"
        m={0}
        justifyContent="center"
        alignItems="center"
      >
        {places?.map(
          (place, index) =>
            place.name && (
              <Grid item xs={12} className="List__places">
                <PlaceDetail place={place} key={index} />
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default List;
