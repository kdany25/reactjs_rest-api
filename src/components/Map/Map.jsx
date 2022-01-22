import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyle from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const classes = useStyle();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [childClicked , setChildClicked] = useState(null);
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCvKoizqmIbmUuIrpHkI4znrJm0UB1OqtU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) =>{

        }}
      >
        {places?.map((place, i) => {
          <div className={classes.markerContainer}
          lat={Number(place.latitude)}
          lng={Number(place.longitude)}
          key={i}
          >
            {
              isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize="large"/>

              ) : (
                <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                <img
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                />
                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
              </Paper>
              )
            }
          </div>;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
