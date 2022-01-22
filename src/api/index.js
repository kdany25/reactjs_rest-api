import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


 export const getPlacesData = async (sw, ne) => {
  try {
    const {data:{data}} = await axios.get(URL,{
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": "a9ce8330c0msh71fca99f47c7cdcp1bbbf0jsne6145a39109e",
        },
      });
    return data;
  } catch (error) {
      console.log(error)
  }
};
