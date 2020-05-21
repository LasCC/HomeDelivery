import React from "react";
import { Grid, Box, Divider } from "@material-ui/core";
import ClientStep from "../../components/ClientStep";
import MapDev from "../../components/MapDev";
import Navbar from "../../components/Navbar";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
window.document.title = "HomeDelivery - Paiement";

export default (props) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} xl={8} md={8} sm={12}>
          <Navbar />
          <Box style={{ padding: 35 }}>
            <ClientStep />
            <Divider />
            <Box style={{ marginTop: 5, padding: 25 }}>Paiement ici :)</Box>
          </Box>
        </Grid>
        <Grid item xs={12} xl={4} md={4} sm={12}>
          <Box
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              backgroundColor: "#F3F7F3",
            }}
          >
            <MapDev />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
