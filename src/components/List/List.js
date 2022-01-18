import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaceDetail from "../PlaceDetails/PlaceDetails";

import "./styles.css";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);

  return (
    <div className="List__container">
      <section className="List__titleContainer">
        <Typography variant="h5" className="List__title flex-center">
          Planning your trip!🗺️
        </Typography>
        <div className="List__inputsContainer">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Rating</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rating}
              label="Rating"
              onChange={(e) => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>

      <section className="List__placesContainer">
        <Grid container spacing={3} className="flex-center">
          <Grid item xs={12}>
            <PlaceDetail />
          </Grid>
          <Grid item xs={12}>
            <PlaceDetail />
          </Grid>
          <Grid item xs={12}>
            <PlaceDetail />
          </Grid>

          {/* {places?.map((place, index) => {
            return (
              <Grid item key={index} xs={12}>
                <PlaceDetail place={place} />
              </Grid>
            );
          })} */}
        </Grid>
      </section>
    </div>
  );
};

export default List;
