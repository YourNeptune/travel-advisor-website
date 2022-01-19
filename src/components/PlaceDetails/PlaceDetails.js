import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import restaurant_photo from "../../img/restaurant.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PlaceDetails = ({ place }) => {
  return (
    <Card sx={{ width: "80%" }}>
      <CardMedia
        component="img"
        height="150"
        image={place.photo ? place.photo.images.large.url : restaurant_photo}
        alt="place photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {place.name ? place.name : "Unknown Restaurant"}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row">
            {place.rating ? (
              <Rating name="read-only" value={place.rating} readOnly />
            ) : (
              <Typography variant="body1">-</Typography>
            )}
            {place.num_reviews ? (
              <Typography variant="body1">{place.num_reviews}</Typography>
            ) : (
              <Typography variant="body1">-</Typography>
            )}
          </Stack>
          <Typography variant="body1">{place.price_level}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" mb={1}>
          {place.open_now_text ? (
            <Typography variant="subtitle1">{place.open_now_text}</Typography>
          ) : (
            <Typography variant="subtitle1">-</Typography>
          )}
          {place.distance_string ? (
            <Typography variant="subtitle1">{place.distance_string}</Typography>
          ) : (
            <Typography variant="subtitle1">-</Typography>
          )}
        </Stack>

        <Grid container spacing={1} mb={2}>
          {place.cuisine?.map((p) => (
            <Grid item>
              <Chip label={p.name} size="small" />
            </Grid>
          ))}
        </Grid>

        {place.address_obj && (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className="flex-center"
            >
              <LocationOnIcon fontSize="small" />
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className="flex-center"
            >
              {`${place.address_obj.street1}, ${place.address_obj.city}`}
            </Typography>
          </Stack>
        )}

        {place.phone && (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className="flex-center"
            >
              <PhoneIcon fontSize="small" />
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              className="flex-center"
            >
              {place.phone}
            </Typography>
          </Stack>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button
          size="small"
          onClick={() => {
            window.open(place.web_url);
          }}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
