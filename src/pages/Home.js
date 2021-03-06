import React from "react";
import Navbar from "../components/Navbar";
import { Container, Typography, Box, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../Routes";
import Footer from "../components/Footer";
import MobileApp from "../components/MobileApp";
import { Link as AnimationScroll } from "react-scroll";
window.document.title = "HomeDelivery - Accueil";

export default (props) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth='lg'>
            <Navbar />
            <Box display='flex' alignItems='center' style={{ height: "80vh" }}>
              <Box flexGrow={1}>
                <Typography
                  id='accueil'
                  variant='h4'
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
                  style={{ marginTop: 15, fontSize: 15 }}
                >
                  Nous mettons en relation des personnes prête à aider les
                  <br />
                  personnes dans le besoin en ses temps de guerre sanitaire.
                </Typography>
                <Box style={{ marginTop: 15 }}>
                  <AnimationScroll
                    to='consignes_sanitaires'
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={1500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                  >
                    <Button
                      style={{
                        backgroundColor: "#C1EDC3",
                        color: "#46B04A",
                        padding: 10,
                        marginRight: 15,
                      }}
                    >
                      En savoir plus
                    </Button>
                  </AnimationScroll>
                  <Link
                    to={ROUTE.REGISTER}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button
                      style={{
                        backgroundColor: "#46B04A",
                        color: "white",
                        fontWeight: "bold",
                        padding: 10,
                        boxShadow: "0px 9px 18px 3px rgba(24,176,116,0.15)",
                      }}
                    >
                      Créer un compte
                    </Button>
                  </Link>
                </Box>
              </Box>
              <img
                src='https://i.imgur.com/2mIMPDW.png'
                alt='LangingPageFirstImage'
                draggable='false'
                style={{ userSelect: "none", userDrag: "none" }}
              />
            </Box>
            {/* Le saviez vous ? */}
            <Box display='flex' alignItems='center' style={{ height: "80vh" }}>
              <img
                src='https://i.imgur.com/pxanmp5.png'
                alt='lesaviezvousimage'
                draggable='false'
                style={{
                  height: 600,
                  marginRight: 50,
                  userSelect: "none",
                  userDrag: "none",
                }}
              />
              <Box flexGrow={1} id='lesaviezvous'>
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
                  des personnes qui veulent aider leurs prochains pour des
                  tâches quotidiennes <br />
                  telle qu’aller chercher du pain, faire des courses de première
                  nécessité tout cela dans le bénévolat et la bienveillance.
                </Typography>
              </Box>
            </Box>
            {/* Respect des consignes */}
            <Container
              maxWidth='lg'
              style={{ marginTop: 200 }}
              id='consignes_sanitaires'
            >
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
                sanitaires mise en oeuvre dans le cadre de l’épidémie sanitaire
                CoViD-19.
              </Typography>
              <Box display='flex' alignItems='center' style={{ marginTop: 80 }}>
                <Box style={{ marginRight: 25 }}>
                  <img
                    src='https://i.imgur.com/krbd6ns.png'
                    alt='pasdecontactimage'
                    draggable='false'
                    style={{
                      marginRight: 50,
                      userSelect: "none",
                      userDrag: "none",
                    }}
                  />
                </Box>
                <Box flexGrow={1}>
                  <Typography
                    variant='h1'
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 30,
                      marginBottom: 15,
                    }}
                  >
                    Respect des distanciations sociales
                  </Typography>
                  <Typography>
                    Une distance de sécurité minimum d'un mètre des autres et le
                    port du masque est fortement recommandé dans les lieux
                    publics.
                  </Typography>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' style={{ marginTop: 50 }}>
                <Box flexGrow={1} style={{ marginRight: 25 }}>
                  <Typography
                    variant='h1'
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 30,
                      marginBottom: 15,
                    }}
                  >
                    Désinfection systématique
                  </Typography>
                  <Typography>
                    Avant est après chaque intervention le livreur procède à une
                    désinfection des mains avec du gel hydro-alcoolique.
                  </Typography>
                </Box>
                <Box>
                  <img
                    src='https://i.imgur.com/PBOpuTf.png'
                    alt='portermasque'
                    draggable='false'
                    style={{
                      marginRight: 50,
                      userSelect: "none",
                      userDrag: "none",
                    }}
                  />
                </Box>
              </Box>
              <Box display='flex' alignItems='center' style={{ marginTop: 50 }}>
                <Box style={{ marginRight: 25 }}>
                  <img
                    src='https://i.imgur.com/rJhk4aq.png'
                    alt='mobileapp'
                    draggable='false'
                    style={{
                      marginRight: 50,
                      userSelect: "none",
                      userDrag: "none",
                    }}
                  />
                </Box>
                <Box flexGrow={1}>
                  <Typography
                    variant='h1'
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 30,
                      marginBottom: 15,
                    }}
                  >
                    Paiement sans contact
                  </Typography>
                  <Typography>
                    Pour des mesures de sécurité nos livreurs privilégient le
                    paiement sans contact. Cette mesure devrait permettre de
                    payer de manière plus simple et sans contact physique pour
                    des achats du quotidien.
                  </Typography>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' style={{ marginTop: 50 }}>
                <Box flexGrow={1} style={{ marginRight: 25 }}>
                  <Typography
                    variant='h1'
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: 30,
                      marginBottom: 15,
                    }}
                  >
                    HomeDelivery s'occupe de tout
                  </Typography>
                  <Typography>
                    Nous nous occupons de votre commande du début à la fin et,
                    ainsi, nous savons exactement où se situe votre commande à
                    n'importe quel moment. Il vous reste plus qu'a être patient.
                  </Typography>
                </Box>
                <Box>
                  <img
                    src='https://i.imgur.com/Oy229ak.png'
                    alt='resteralamaisonimage'
                    draggable='false'
                    style={{
                      marginRight: 50,
                      userSelect: "none",
                      userDrag: "none",
                    }}
                  />
                </Box>
              </Box>
            </Container>
          </Container>
          <MobileApp />
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};
