import React from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";

export default (props) => {
  return (
    <Container>
      <Box display='flex' alignItems='center' style={{ padding: 30 }}>
        <Box flexGrow={1} display='flex' alignItems='center'>
          <img
            src='https://svgur.com/i/LhH.svg'
            style={{ height: 35, marginRight: 15 }}
            alt='logo'
          />
          <Typography
            variant='h1'
            style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
          >
            HomeDelivery
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} style={{ padding: 30 }}>
        <Grid item xs={4}>
          <Typography
            variant='h1'
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Menu
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            Accueil
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            Le saviez-vous ?
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            Respect des consignes sanitaires
          </Typography>

          <Typography>Contact</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h1' style={{ fontSize: 20, fontWeight: "bold" }}>
            Nous contacter
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            <i className='uil uil-fast-mail' /> io.estiam@gmail.com
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            <i className='uil uil-calling' />
            +33 6 03 87 64 36
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h1' style={{ fontSize: 20, fontWeight: "bold" }}>
            Nous suivre
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            <i className='uil uil-facebook-f' />
            Facebook
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            <i className='uil uil-twitter-alt' />
            Twitter
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            <i className='uil uil-instagram' />
            Instagram
          </Typography>

          <Typography style={{ marginTop: 15, marginBottom: 15 }}>
            <i className='uil uil-github' /> Github
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
