import axios from "axios";

export const getPlacesData = async (ne, sw) => {
  try {
    const {
      data: { data },
    } = await axios.request({
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        limit: "10",
        currency: "CAD",
        open_now: "false",
        lunit: "km",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
