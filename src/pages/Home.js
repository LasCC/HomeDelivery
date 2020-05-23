import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Box,
  Paper,
  IconButton,
  InputBase,
  Divider,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../Routes";
import Lottie from "react-lottie";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Questions from "../components/Questions";
window.document.title = "HomeDelivery - Accueil";

const shampoo = require("../data/shampoo.json");
const handShake = require("../data/handShake.json");
const mask = require("../data/mask.json");
const soap = require("../data/soap.json");
const shampooOptions = {
  loop: true,
  autoplay: true,
  animationData: shampoo,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const handShakeOptions = {
  loop: true,
  autoplay: true,
  animationData: handShake,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const maskOptions = {
  loop: true,
  autoplay: true,
  animationData: mask,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const soapOptions = {
  loop: true,
  autoplay: true,
  animationData: soap,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxShadow:
      "0 2px 2.3px rgba(0, 0, 0, 0.011),  0 3.4px 5.6px rgba(0, 0, 0, 0.016),  0 5.1px 10.7px rgba(0, 0, 0, 0.02),  0 8.5px 19.1px rgba(0, 0, 0, 0.024),  0 18.7px 35.4px rgba(0, 0, 0, 0.029),  0 100px 80px rgba(0, 0, 0, 0.04)",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    marginTop: 3,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    search: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth='lg'>
            <Navbar />
            <Box style={{ height: "100vh" }}>
              <Box
                style={{
                  position: "relative",
                  top: "30%",
                  textAlign: "center",
                  left: "30%",
                  transform: "translate(-30%, -30%)",
                  zIndex: 5,
                }}
              >
                <Typography
                  variant='h3'
                  component='h1'
                  style={{ fontWeight: "bold" }}
                >
                  La plateforme qui met en relation
                  <br />
                  les personnes dans le besoin
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  style={{ marginTop: 15, fontSize: 20 }}
                >
                  Nous mettons en relation des personnes prête à aider les
                  <br />
                  personnes dans le besoin en ses temps de guerre sanitaire.
                </Typography>
                <Paper
                  component='form'
                  className={classes.root}
                  style={{ marginTop: 25 }}
                >
                  <i className='uil uil-map-pin-alt' style={{ fontSize: 25 }} />
                  <InputBase
                    onChange={handleChange("search")}
                    className={classes.input}
                    placeholder='Rechercher un livreur près de chez vous'
                    inputProps={{
                      "aria-label": "Rechercher un livreur près de chez vous",
                    }}
                  />
                  <IconButton
                    type='submit'
                    className={classes.iconButton}
                    aria-label='search'
                  >
                    <i
                      className='uil uil-arrow-right'
                      style={{ fontSize: 25 }}
                    />
                  </IconButton>
                </Paper>
                {values.search}
              </Box>
            </Box>
            <div className='curve' />
          </Container>
          <Grid item style={{ zIndex: 55 }}>
            <Box
              id='LeSaviezVous'
              style={{
                padding: "4em",
                marginBottom: 15,
                backgroundColor: "#D9EFE7",
                textAlign: "center",
              }}
            >
              <Typography
                variant='h1'
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 45,
                  marginBottom: 15,
                }}
              >
                Le saviez vous ?
              </Typography>
              <Typography color='textSecondary'>
                Nous sommes une plateforme d’entraide qui cherche à mettre en
                relation <br />
                des personnes qui veulent aider leurs prochains pour des tâches
                quotidiennes <br />
                telle qu’aller chercher du pain, faire des courses de première
                nécessité tout cela dans le bénévolat et la bienveillance.
              </Typography>

              <img
                alt='curve'
                src='https://i.imgur.com/INyeAba.png'
                style={{
                  height: "auto",
                  zIndex: 1,
                  marginTop: 25,
                  borderRadius: 10,
                  width: "100%",
                  maxWidth: 1600,
                  boxShadow:
                    "  0 2.8px 2.2px rgba(0, 0, 0, 0.02),  0 6.7px 5.3px rgba(0, 0, 0, 0.028),  0 12.5px 10px rgba(0, 0, 0, 0.035),  0 22.3px 17.9px rgba(0, 0, 0, 0.042),  0 41.8px 33.4px rgba(0, 0, 0, 0.05),  0 100px 80px rgba(0, 0, 0, 0.07)",
                }}
              />

              <div className='curve2' />
            </Box>
          </Grid>
          <Grid item>
            <Box
              style={{
                padding: "2em",
                marginTop: 35,
              }}
            >
              <Container maxWidth='lg'>
                <Typography
                  variant='h1'
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 45,
                    marginBottom: 15,
                    textAlign: "center",
                  }}
                >
                  Respect des consignes sanitaires
                </Typography>
                <Typography
                  color='textSecondary'
                  style={{
                    textAlign: "center",
                  }}
                >
                  Nous mettons un poing d’honneur à bien respecter les règles
                  sanitaires mise en oeuvre dans le cadre de l’épidémie
                  sanitaire CoViD-19.
                </Typography>
                <Box
                  display='flex'
                  alignItems='center'
                  style={{ marginTop: 80 }}
                >
                  <Box style={{ marginRight: 25 }}>
                    <Lottie
                      options={handShakeOptions}
                      height={150}
                      width={150}
                    />
                  </Box>
                  <Box flexGrow={1}>
                    <Typography>
                      Pas de contacte à plus de 1m de distance
                      <br /> entre le bénévole est le client, il déposera <br />
                      la commande sur le palier de votre apparement/maison.
                    </Typography>
                  </Box>
                </Box>
                <Divider style={{ marginTop: 35, marginBottom: 35 }} />
                <Box
                  display='flex'
                  alignItems='center'
                  style={{ marginTop: 50 }}
                >
                  <Box
                    flexGrow={1}
                    display='flex'
                    justifyContent='flex-end'
                    style={{ marginRight: 25 }}
                  >
                    <Typography>
                      Les bénévoles doivent absolument porter un masque de
                      protection
                      <br />
                      pour éviter le plus possible le risque de propagation du
                      virus.
                    </Typography>
                  </Box>
                  <Box>
                    <Lottie options={maskOptions} height={150} width={150} />
                  </Box>
                </Box>
                <Divider style={{ marginTop: 35, marginBottom: 35 }} />
                <Box
                  display='flex'
                  alignItems='center'
                  style={{ marginTop: 50 }}
                >
                  <Box style={{ marginRight: 25 }}>
                    <Lottie options={soapOptions} height={150} width={150} />
                  </Box>
                  <Box flexGrow={1}>
                    <Typography>
                      Les bénévoles doivent absolument porter un masque de
                      protection <br />
                      pour éviter le plus possible le risque de propagation du
                      virus.
                    </Typography>
                  </Box>
                </Box>
                <Divider style={{ marginTop: 35, marginBottom: 35 }} />
                <Box
                  display='flex'
                  alignItems='center'
                  style={{ marginTop: 50 }}
                >
                  <Box
                    flexGrow={1}
                    display='flex'
                    justifyContent='flex-end'
                    style={{ marginRight: 25 }}
                  >
                    <Typography>
                      Désinfection systématique entre à la moindre interaction
                      physique
                      <br />
                      avec un objet/personne (je sais pas ici non plus)
                    </Typography>
                  </Box>
                  <Box>
                    <Lottie options={shampooOptions} height={150} width={150} />
                  </Box>
                </Box>
                <Divider style={{ marginTop: 35, marginBottom: 35 }} />
              </Container>
            </Box>
          </Grid>
          <Box style={{ marginTop: 15, textAlign: "center" }}>
            <Container maxWidth='lg'>
              <Typography
                variant='h1'
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 45,
                  marginBottom: 15,
                }}
              >
                L’activité de nos membres
              </Typography>
              <Typography>
                Vous voulez rejoindre notre communauté d’entraide ?<br />{" "}
                N’hésitez plus rejoignez
                <b> HomeDelivery</b>, aucun frais <br />
                ne va vous être demandé.
              </Typography>
              <Link to={ROUTE.REGISTER} style={{ textDecoration: "none" }}>
                <Typography
                  style={{
                    color: "rgb(70, 176, 74)",
                    marginTop: 15,
                  }}
                >
                  Inscription gratuite
                </Typography>
              </Link>
            </Container>
          </Box>
          <Box
            style={{
              height: "70vh",
              backgroundColor: "rgb(70, 176, 74)",
              marginTop: 50,
            }}
          >
            <Map />
          </Box>
          <Box style={{ marginTop: 80, height: "70vh" }} id='CommentCaMarche'>
            <Container maxWidth='lg'>
              <Typography
                variant='h1'
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 35,
                  marginBottom: 35,
                  textAlign: "center",
                }}
              >
                Questions récurrentes
              </Typography>
              <Questions />
            </Container>
          </Box>
          <Box style={{ backgroundColor: "#D9EFE7" }}>
            <Footer />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
