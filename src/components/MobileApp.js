import React from "react";
import { Box, Container, Typography, Chip } from "@material-ui/core";

export default (props) => {
  return (
    <Container>
      <Box
        display='flex'
        alignItems='center'
        style={{
          padding: 30,
          marginTop: 150,
          backgroundColor: "#D9EFE7",
          borderRadius: 15,
          marginBottom: 150,
        }}
      >
        <Box flexGrow={1} display='flex' alignItems='center'>
          <img
            src='https://i.imgur.com/fq8R3MQ.png'
            alt='imageFooter'
            style={{ height: 250, userSelect: "none", userDrag: "none" }}
          />
          <Box style={{ marginLeft: 25 }}>
            <Typography
              variant='h1'
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 25,
                marginBottom: 15,
              }}
            >
              Application mobile
              <Chip
                label='New'
                variant='outlined'
                style={{
                  backgroundColor: "rgb(70, 176, 74)",
                  borderColor: "rgb(70, 176, 74)",
                  borderWidth: 1,
                  color: " white",
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              />
            </Typography>
            <Typography>
              Etiam sagittis ullamcorper dolor nec tincidunt. Aliquam erat
              volutpat. Etiam lacinia condimentum tellus sed viverra. Duis
              tincidunt ligula nisi, ac molestie urna egestas in. Sed eget
              lectus placerat, faucibus velit at, fringilla turpis. Nullam eget
              sem eu leo vestibulum pretium. In hac habitasse platea dictumst.
            </Typography>
            <Box display='flex' alignItems='center' style={{ marginTop: 15 }}>
              <img
                src='https://i.imgur.com/HwAT5AW.png'
                alt='iosdl'
                style={{
                  height: 35,
                  marginRight: 15,
                  userSelect: "none",
                  userDrag: "none",
                }}
              />
              <img
                src='https://i.imgur.com/VryWM5c.png'
                alt='androiddl'
                style={{ height: 40, userSelect: "none", userDrag: "none" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};