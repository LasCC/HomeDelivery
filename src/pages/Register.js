import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../Routes";
import logoWhite from "../images/logoWhite.svg";
window.document.title = "HomeDelivery - Choix création de compte";

export default (props) => {
  const setAccountType = (acc_type) => {
    const account_data = JSON.stringify({ acc_type });
    localStorage.setItem("account_to_register", account_data);
    if (acc_type === "client") return props.history.push(ROUTE.REGISTER_CLIENT);
    else if (acc_type === "helper")
      return props.history.push(ROUTE.REGISTER_HELPER);
  };
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          xl={3}
          md={3}
          sm={12}
          style={{ boxShadow: "17px 0px 37px -20px rgba(0, 0, 0, 0.35)" }}
        >
          <Box
            style={{
              height: "100vh",
              zIndex: 2,
              backgroundColor: "rgb(70, 176, 74)",
            }}
            className='backgroundRegister'
          >
            <Box
              onClick={() => window.location.replace("/")}
              display='flex'
              alignItems='center'
              style={{
                cursor: "pointer",
                padding: 25,
              }}
            >
              <img
                src={logoWhite}
                alt='logoHomedeliveryBlanc'
                draggable='false'
                style={{ height: 40 }}
              />
              <Box>
                <Typography
                  style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}
                >
                  HomeDelivery
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} xl={9} md={9} sm={12}>
          <Box
            style={{ height: "100vh", zIndex: 1 }}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Box style={{ width: "85%" }}>
              <Typography
                variant='h5'
                component='h1'
                style={{ fontWeight: "bolder", marginBottom: 25 }}
              >
                Choisissez votre camp
              </Typography>
              <Typography color='textSecondary' mt={3}>
                Cette partie est déterminante pour la suite, en effet vous devez
                choisir en aider les autres ou être aider.
              </Typography>

              <Box
                display='flex'
                alignItems='center'
                className=' successCard'
                onClick={() => setAccountType("client")}
              >
                <Box>
                  <i
                    className='uil uil-chat-bubble-user'
                    style={{ fontSize: 50 }}
                  />
                </Box>
                <Box style={{ marginLeft: 10 }} flexGrow={1}>
                  <Typography>
                    Compte <strong>"classique"</strong>
                  </Typography>
                  <Typography color='textSecondary'>
                    Créer des annonces, être aidé par la communauté HomeDelivery
                  </Typography>
                </Box>
                <Box>
                  <i className='uil uil-arrow-right' style={{ fontSize: 25 }} />
                </Box>
              </Box>

              <Box
                display='flex'
                alignItems='center'
                className=' successCard'
                onClick={() => setAccountType("helper")}
              >
                <Box>
                  <i className='uil uil-users-alt' style={{ fontSize: 50 }} />
                </Box>
                <Box style={{ marginLeft: 10 }} flexGrow={1}>
                  <Typography>
                    Compte <strong>"bénévole"</strong>
                  </Typography>
                  <Typography color='textSecondary'>
                    Aidez les personnes dans le besoin, rejoindre la communauté
                    HomeDelivery
                  </Typography>
                </Box>
                <Box>
                  <i className='uil uil-arrow-right' style={{ fontSize: 25 }} />
                </Box>
              </Box>
              <Link
                to={ROUTE.LOGIN}
                style={{ textDecoration: "none", color: "rgb(70, 176, 74)" }}
              >
                <Typography
                  variant='h2'
                  style={{
                    color: "rgb(70, 176, 74)",
                    fontSize: 15,
                    marginTop: 15,
                    cursor: "pointer",
                  }}
                >
                  Vous avez déjà un compte ? S'identifier
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
