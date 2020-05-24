import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import ROUTE from "./Routes";
window.document.title = "HomeDelivery - Ohoh ! Cette page n'existe pas..";

const unknown = require("./data/404.json");
const handShakeOptions = {
  loop: true,
  autoplay: true,
  animationData: unknown,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default (props) => {
  return (
    <div>
      <Box style={{ height: "100vh" }}>
        <Lottie options={handShakeOptions} height={400} width={550} />
        <Typography style={{ fontWeight: "bold", fontSize: 25 }} align='center'>
          Oops ! Cette page n'existe plus..
        </Typography>
        <Typography
          color='textSecondary'
          style={{ marginTop: 15 }}
          align='center'
        >
          Vous avez peut-être mal saisie l'adresse ou la page n'est pas
          disponible pour le moment.
        </Typography>
        <Box display='flex' justifyContent='center'>
          <Link to={ROUTE.HOME} style={{ textDecoration: "none" }}>
            <Button
              style={{
                padding: 15,
                marginTop: 15,
                backgroundColor: "rgb(126, 211, 33)",
                color: "white",
                fontWeight: "bold",
                textTransform: "none",
                boxShadow:
                  "0 2.8px 2.2px rgba(0, 0, 0, 0.008),  0 6.7px 5.3px rgba(0, 0, 0, 0.012),  0 12.5px 10px rgba(0, 0, 0, 0.015),  0 22.3px 17.9px rgba(0, 0, 0, 0.018),  0 41.8px 33.4px rgba(0, 0, 0, 0.022),   0 100px 80px rgba(0, 0, 0, 0.03)",
              }}
            >
              Revenir à l'accueil <i className='uil uil-history-alt'></i>
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};
