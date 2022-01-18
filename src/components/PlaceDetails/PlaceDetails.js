import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import restaurant_photo from "../../img/restaurant.jpg";

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          // image={place.photo? place.photo.images.small : restaurant_photo}
          image={restaurant_photo}
          alt="place photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name
            {/* {place.name} */}
          </Typography>

          <Rating name="read-only" value={3} readOnly />
          {/* <Rating name="read-only" value={place.rating} readOnly /> */}
          <Typography>(123)</Typography>
          {/*  <Typography >{`(${place.num_reviews})`}</Typography> */}
          <Typography>#9 of 7,687 Restaurants in Toronto</Typography>
          <Typography variant="body2">$$ | 2.8km | Open</Typography>
          {/* <Typography variant="body2">
           `${place.price_level} | ${place.distance_string} | ${place.open_now_text}`
          </Typography> */}
          <Typography variant="caption">{"111 Queen St E, Toronto"}</Typography>
          {/* <Typography variant="subtitle1">{`${place.address_obj.street1}, ${place.address_obj.city}`}</Typography> */}
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />
          </Stack>
          {/* {place.cuisine?.map((p) => (
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={p.name} /> 
            </Stack>
          ))} */}

          <Typography>+1 416-901-4724</Typography>
          {/*  <Typography>{place.phone}</Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">Website</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PlaceDetails;
