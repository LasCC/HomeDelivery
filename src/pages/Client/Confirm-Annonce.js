import React, { useContext } from "react";
import { Grid, Typography, Box, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import ClientStep from "../../components/ClientStep";
import ROUTE from "../../Routes";
import Navbar from "../../components/Navbar";
import moment from "moment";
import "moment/locale/fr";
import TodoItem from "../../components/TodoItem"
import { AnnonceContext } from "../../contexts/AnnonceContext"
moment.locale("fr");
window.document.title = "HomeDelivery - Confirmation de votre annonce";

export default (props) => {

  const { handleAnnonceSubmit, values } = useContext(AnnonceContext)

  const handleSubmit = () => {

    handleAnnonceSubmit(values)
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12} xl={8} md={8} sm={12}>
          <Navbar />
          <Box style={{ padding: 35 }}>
            <ClientStep />
            <Divider />
            <Box style={{ marginTop: 15, padding: 20 }}>
              <Typography
                variant='h1'
                style={{ fontWeight: "bold", fontSize: 25 }}
              >
                Confirmation de votre annonce{" "}
                <i className='uil uil-file-check-alt'></i>
              </Typography>
              <Typography>
                Avant de continuer dans le processus de création d'annonce,
                merci de bien vouloir confirmer la liste de courses que vous
                avez renseigné sur votre droite
              </Typography>
              <Link
                to={ROUTE.ANNONCE}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Box
                  display='flex'
                  alignItems='center'
                  className='dangerCard'
                  style={{ width: "90%" }}
                >
                  <Box>
                    <i
                      className='uil uil-exclamation-circle'
                      style={{ fontSize: 50 }}
                    />
                  </Box>
                  <Box style={{ marginLeft: 10 }} flexGrow={1}>
                    <Typography>
                      Corriger votre <strong>annonce</strong>
                    </Typography>
                    <Typography color='textSecondary'>
                      Vous allez être redirigés à la page précédente pour
                      effectuer vos différents changements.
                    </Typography>
                  </Box>
                  <Box>
                    <i
                      className='uil uil-arrow-right'
                      style={{ fontSize: 25 }}
                    />
                  </Box>
                </Box>
              </Link>

              <Box
                display='flex'
                alignItems='center'
                className='successCard'
                style={{ width: "90%" }}
                onClick={handleSubmit}
              >
                <Box>
                  <i
                    className='uil uil-check-circle'
                    style={{ fontSize: 50 }}
                  />
                </Box>
                <Box style={{ marginLeft: 10 }} flexGrow={1}>
                  <Typography>
                    Valider votre <strong>annonce</strong>
                  </Typography>
                  <Typography color='textSecondary'>
                    Vous allez être redirigés et continuer le processus de
                    création d'annonce.
                    </Typography>
                </Box>
                <Box>
                  <i
                    className='uil uil-arrow-right'
                    style={{ fontSize: 25 }}
                  />
                </Box>
              </Box>

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
            <Box style={{ padding: 35 }}>
              <Typography component='h1' variant='h6'>
                Confirmation de votre annonce <i className='uil uil-ticket' />
              </Typography>
              <Divider style={{ marginTop: 15, marginBottom: 15 }} />
              <article className='ticket'>
                <Box className='ticket__wrapper'>
                  <Box className='ticket__header'>
                    <Typography>
                      Annonce créer le{" "}
                      <strong>{moment().format("DD MMMM YYYY")}</strong>
                    </Typography>
                  </Box>
                </Box>
                <div className='ticket__divider' />
                <Box className='ticket__body'>
                  <Box className='ticket__section'>
                    {values.todos > 0 && (<Typography>
                      Liste des courses ({values.todos.length} / 10) :
                    </Typography>)}
                    <Typography>
                      {/* Liste de la liste de courses stocké dans le localstorage */}
                      {values.todos && values.todos.map((todo, index) => (
                        <TodoItem
                          key={index}
                          index={index}
                          todo={todo}

                        />
                      ))}
                    </Typography>
                  </Box>
                  <Box className='ticket__section'>
                    <Typography>Demandes annexes :</Typography>
                    <Typography color='textSecondary'>
                      {values.annexe}
                    </Typography>
                  </Box>

                  <Box className='ticket__section'>
                    <Typography>Mode de paiement :</Typography>
                    <Typography color='textSecondary'>
                      {values.payment}
                    </Typography>
                  </Box>
                </Box>
                <Box className='ticket__footer '>
                  <Typography style={{ fontWeight: "bold" }}>
                    Prix maximum :
                  </Typography>
                  <Typography color='textSecondary'>{values.price_max + " €"}</Typography>
                </Box>
              </article>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
