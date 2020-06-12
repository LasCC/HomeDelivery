import React from "react";
import { Box, Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/fr";
import Lottie from "react-lottie";
import StepShipment from "./StepShipment";
import useLocalstorage from "../hooks/useLocalstorage";
moment.locale("fr");

const shopping = require("../data/shopping.json");
const shoppingSettings = {
  loop: true,
  autoplay: true,
  animationData: shopping,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default (props) => {
  const [annonces] = useLocalstorage("selected_annonce");

  //TODO
  const { city, address, zipcode } = JSON.parse(
    localStorage.getItem("account_to_register")
  );
  return (
    <div>
      <Box display='flex' alignItems='center'>
        <Box flexGrow={1} display='flex' alignItems='center'>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            style={{
              height: 120,
              width: 120,
              backgroundColor: "#18B074",
              borderRadius: 10,
            }}
          >
            <Lottie options={shoppingSettings} height={150} width={150} />
          </Box>{" "}
          <Box style={{ marginLeft: 25 }}>
            <Typography color='textSecondary'>
              Annonce créer le{" "}
              {props.step <= 1
                ? moment().format("DD MMMM YYYY")
                : moment(annonces.created_at).format("DD MMMM YYYY")}
            </Typography>
            <Typography
              variant='h1'
              style={{ fontWeight: "bold", fontSize: 25 }}
            >
              <small>{address + ", " + zipcode + " " + city}</small>
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
