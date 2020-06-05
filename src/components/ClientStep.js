import React, { useContext } from "react";
import { Box, Typography, Breadcrumbs } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ROUTE from "../Routes";
import moment from "moment";
import "moment/locale/fr";
import { AnnonceContext } from "../contexts/AnnonceContext";
import StepShipment from "./StepShipment"
import useLocalstorage from "../hooks/useLocalstorage"
moment.locale("fr");






export default (props) => {





  const [annonces] = useLocalstorage("selected_annonce")

  //TODO 
  const { steps } = useContext(AnnonceContext)
  const { city, address, zipcode } = JSON.parse(localStorage.getItem('account_to_register'))
  const isonTrackingPage = window.location.href.split("/")[4] === "track" && localStorage.getItem('annonce_id') !== null
  const isConfirmed = steps >= 2
  return (
    <div>
      <Box display='flex' alignItems='center'>
        <Box flexGrow={1} display='flex' alignItems='center'>
          <img src='https://svgur.com/i/Jbo.svg' alt='voiture_logo_checkout' />
          <Box style={{ marginLeft: 25 }}>
            <Typography color='textSecondary'>
              Annonce créer le {props.step <= 1 ? moment().format("DD MMMM YYYY") : moment(annonces.created_at).format("DD MMMM YYYY")}
            </Typography>
            <Typography
              variant='h1'
              style={{ fontWeight: "bold", fontSize: 25 }}
            >
              A <small>{address + ", " + zipcode + " " + city}</small>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography style={{ color: "rgb(70, 176, 74)" }}>
            Besoin d'aide ?
          </Typography>
        </Box>
      </Box>


      <StepShipment step={props.step} />
    </div>
  );
};
