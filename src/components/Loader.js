import React from "react";
import Lottie from "react-lottie";
import { Box } from "@material-ui/core";

const loader = require("../data/loader.json");
const loaderOptions = {
  loop: true,
  autoplay: true,
  animationData: loader,
};

export default (props) => {
  return (
    <Box style={{ height: "100vh" }}>
      <Lottie
        options={loaderOptions}
        style={{ height: "100%", width: "450px" }}
      />
    </Box>
  );
};
