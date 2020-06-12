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
            src='https://i.imgur.com/YuItn4N.png'
            alt='imageFooter'
            draggable='false'
            style={{ height: 300, userSelect: "none", userDrag: "none" }}
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
              L'application officielle du projet HomeDelivery (React Native)
              Listing d'annonces consultables.
              <br /> Générateur d'attestation de déplacement provisoire en
              version QR code. <br />
              Fonctionnalités ! Une interface simple d'utilisation est dans
              l'air du temps ! <br />
              Application à but non lucratif, aucune revente de données.
            </Typography>
            <Box display='flex' alignItems='center' style={{ marginTop: 15 }}>
              <a
                href='https://github.com/LasCC/HomeDelivery-React-Native'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://i.imgur.com/HwAT5AW.png'
                  alt='iosdl'
                  draggable='false'
                  style={{
                    height: 35,
                    marginRight: 15,
                    userSelect: "none",
                    userDrag: "none",
                    cursor: "pointer",
                  }}
                />
              </a>
              <a
                href='https://github.com/LasCC/HomeDelivery-React-Native'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://i.imgur.com/VryWM5c.png'
                  alt='androiddl'
                  draggable='false'
                  style={{
                    height: 40,
                    userSelect: "none",
                    userDrag: "none",
                    cursor: "pointer",
                  }}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
