import React, { PureComponent } from "react";
import { Box, Typography, Button, Chip } from "@material-ui/core";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import CITIES from "../data/cities.json";
import ROUTE from "../Routes";

export default class ControlPanel extends PureComponent {
  _renderCity = (city, i) => {
    const backgroundImageCard = city.image;
    return (
      <Box
        key={i}
        style={{ backgroundColor: "white" }}
        className='CardsDevMap'
        onClick={() => this.props.onViewportChange(city)}
      >
        <Box
          style={{ padding: 15, height: "100%" }}
          display='flex'
          alignItems='flex-end'
        >
          <img
            src={backgroundImageCard}
            alt='images_map'
            className='imagesMap'
          />
          <Box alignSelf='flex-end'>
            <Box display='flex' alignItems='center'>
              <Typography
                variant='h5'
                component='h1'
                style={{ fontWeight: "bold", color: "black", marginRight: 5 }}
              >
                {city.name}
              </Typography>
              <Chip
                label='En ligne'
                variant='outlined'
                style={{
                  color: "rgb(70, 176, 74)",
                  borderColor: "rgb(70, 176, 74)",
                  borderWidth: 1,
                  fontWeight: "bold",
                }}
              />
            </Box>
            <Link
              to={ROUTE.DASHBOARD_UPDATE_ANNONCE_HELPER}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  backgroundColor: "rgb(70, 176, 74)",
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 15,
                  padding: 15,
                  borderRadius: 4,
                  boxShadow: "rgba(24, 176, 116, 0.15) 0px 9px 18px 3px",
                }}
              >
                Accepter la livraison <i className='uil uil-arrow-up-right' />
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  };

  render() {
    return (
      <Draggable axis='x' style={{ cursor: "grab" }}>
        <Box style={{ padding: 15, height: 250 }}>
          <Box
            display='flex'
            flexWrap='wrap'
            alignContent='flex-end'
            alignItems='center'
            style={{ height: "100%", width: "1000vw", overflow: "hidden" }}
          >
            {CITIES.map(this._renderCity)}
          </Box>
        </Box>
      </Draggable>
    );
  }
}
