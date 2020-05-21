import React from "react";
import { Box } from "@material-ui/core";
import MapDev from "../../components/MapDev";
window.document.title = "HomeDelivery - dev";

export default (props) => {
  return (
    <div>
      <Box
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          backgroundColor: "3D9EFE7",
        }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <MapDev />
      </Box>
    </div>
  );
};
