import React from "react";
import { Grid, Typography, Box, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../../Routes";
import ClientStep from "../../components/ClientStep";
import Map from "../../components/Map";
import Navbar from "../../components/Navbar";
import moment from "moment";
import "moment/locale/fr";
import useLocalStorage from "../../hooks/useLocalstorage"
moment.locale("fr");
window.document.title = "HomeDelivery - Livraison en cours..";

export default (props) => {

  const [annonces] = useLocalStorage("selected_annonce")


  const items = [
    {
      title: "Jean célestin a accepter votre commande",
      time: "Le 12 Mars 2020 à 19h30",
      icon: "uil uil-check-circle",
      check: "uil uil-check",
      class: "successCard",
    },
    {
      title: "Jean célestin est dans le magasin",
      time: "Le 12 Mars 2020 à 19h38",
      icon: "uil uil-shop",
      check: "uil uil-check",
      class: "successCard",
    },

    {
      title: "Jean célestin vous as envoyé le ticket de caisse",
      time: "Le 12 Mars 2020 à 19h44",
      icon: "uil uil-qrcode-scan",
      check: "uil uil-times",
      class: "dangerCard",
    },
    {
      title: "Jean célestin est en chemin vers votre domicile",
      time: "Le 12 Mars 2020 à 19h45",
      icon: "uil uil-car",
      check: "uil uil-times",
      class: "dangerCard",
    },
  ];
  return (
    <div>
      <Grid container>
        <Grid item xs={12} xl={8} md={8} sm={12}>
          <Navbar />
          <Box style={{ padding: 35 }}>
            <ClientStep step={2} />
            <Divider />
            <Box style={{ marginTop: 5, padding: 25 }}>
              <Box display='flex'>
                <Box flexGrow={1}>
                  <Typography
                    variant='h1'
                    style={{ fontWeight: "bold", fontSize: 25 }}
                  >
                    Livraison en cours <i className='uil uil-truck'></i>
                  </Typography>
                </Box>
                <Box>
                  <a
                    href='tel:123-456-7890'
                    style={{ color: "#19B074", textDecoration: "none" }}
                  >
                    Contacter le livreur <i className='uil uil-calling'></i>
                  </a>
                </Box>
              </Box>
              <Typography style={{ marginTop: 10 }}>
                Si vous rencontrez le moindre problème n'hésitez pas à contacter
                le support avec ce{" "}
                <a
                  href='mailto:io.estiam@gmail.com'
                  style={{
                    textDecoration: "none",
                    color: "#19B074",
                  }}
                >
                  mail
                </a>
              </Typography>
              {items.map((i, k) => {
                return (
                  <Box
                    display='flex'
                    alignItems='center'
                    className={i.class}
                    key={k}
                    style={{ width: "85%" }}
                  >
                    <Box>
                      <i className={i.icon} style={{ fontSize: 50 }} />
                    </Box>
                    <Box style={{ marginLeft: 10 }} flexGrow={1}>
                      <Typography>{i.title}</Typography>
                      <Typography color='textSecondary'>{i.time}</Typography>
                    </Box>
                    <Box>
                      <i class={i.check} style={{ fontSize: 25 }} />
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box display='flex' flexDirection='row-reverse'>
              <Link
                to={ROUTE.CHECKOUT_CLIENT}
                style={{ textDecoration: "none" }}
              >
                <Button
                  style={{
                    backgroundColor: "rgb(70, 176, 74)",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 20,
                    padding: 15,
                    borderRadius: 4,
                  }}
                >
                  Procéder au paiement <i className='uil uil-bill' />
                </Button>
              </Link>
              <Button
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginTop: 20,
                  padding: 15,
                  borderRadius: 0,
                }}
              >
                Annuler
              </Button>
            </Box>
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
            <Map />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
