import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Divider,
  Slide,
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  DialogActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Lottie from "react-lottie";
import Navbar from "../../components/Navbar";
import moment from "moment";
import "moment/locale/fr";
import useLocalStorage from "../../hooks/useLocalstorage";
import backapi from "../../api/backapi";
import { AnnonceContext } from "../../contexts/AnnonceContext";
import ROUTE from "../../Routes";
moment.locale("fr");
window.document.title = "HomeDelivery - Service de livraison";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const shippping = require("../../data/Shipping.json");
const shippingOptions = {
  loop: true,
  autoplay: true,
  animationData: shippping,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function getSteps() {
  return [
    "Prendre en charge la commande",
    "Se rendre dans le magasin",
    "Confirmer l'achat et fournir les preuves",
    "Livraison chez le client",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Typography>
          Attention ! Si vous acceptez la livraison vous ne pouvez plus{" "}
          <strong>revenir en arrière.</strong> <br />
          Êtes vous sur de vouloir continuer ?
        </Typography>
      );
    case 1:
      return (
        <Typography>
          Êtes vous dans le magasin près du domicile du client ?
        </Typography>
      );
    case 2:
      return (
        <>
          <Typography>
            Veuillez fournir les preuves d'achat, <br />
            il vous suffit de <strong>prendre en photo</strong> le{" "}
            <strong>ticket de caisse</strong> et de le mettre en ligne
          </Typography>
          <input
            accept='image/*'
            id='contained-button-file'
            multiple
            style={{ display: "none" }}
            type='file'
          />
          <label htmlFor='contained-button-file'>
            <Button
              component='span'
              style={{
                marginTop: 15,
                marginBottom: 15,
                backgroundColor: "rgb(70, 176, 74)",
                color: "white",
                fontWeight: "bold",
                borderRadius: 4,
              }}
            >
              <i className='uil uil-upload' />
              Importer votre ticket
            </Button>
          </label>
        </>
      );
    case 3:
      return (
        <Typography>
          Avez-vous livrer le client ? <br /> Si c'est le cas veuillez cliquer
          sur le bouton "<strong>Finaliser la livraison</strong>"
        </Typography>
      );
    default:
      return "Étape inconnue";
  }
}

export default (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [name, setName] = useState("");

  useEffect(async () => {
    let res = await backapi.post("/annonce/resolve", {
      annonce_id: selected_annonce._id,
    });
    setName({
      firstName: res.data.user_found.firstName,
      lastName: res.data.user_found.lastName,
      email: res.data.user_found.email,
      phone: res.data.user_found.phone,
      city: res.data.user_found.city,
      address: res.data.user_found.address,
      c_address: res.data.user_found.c_address,
      zipcode: res.data.user_found.zipcode,
    });
    console.log(res);
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [selected_annonce] = useLocalStorage("selected_annonce");
  console.log(selected_annonce);
  const handleSubmit = () => {
    window.location.href = ROUTE.DASHBOARD_HISTORY_HELPER;
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { updateAnnonceSatus } = useContext(AnnonceContext);

  const handleSetStatus = (x) => {
    handleNext();
    updateAnnonceSatus(selected_annonce._id, activeStep);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} xl={8} md={8} sm={12}>
          <Navbar />
          <Box style={{ padding: 35 }}>
            <Box display='flex' alignItems='center'>
              <Box flexGrow={1} display='flex' alignItems='center'>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  style={{
                    height: 120,
                    width: 120,
                    backgroundColor: "#18B074",
                    borderRadius: 10,
                  }}
                >
                  <Lottie options={shippingOptions} height={150} width={150} />
                </Box>
                <Box style={{ marginLeft: 25 }}>
                  <Typography color='textSecondary'>
                    Annonce n°{selected_annonce._id.substring(17, 24)}
                  </Typography>
                  <Typography
                    variant='h1'
                    style={{ fontWeight: "bold", fontSize: 25 }}
                  >
                    {(name === "" && "...") ||
                      `${name.firstName} ${name.lastName}`}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <span
                  onClick={() => window.open(`tel:${name.phone}`)}
                  style={{
                    color: "rgb(70, 176, 74)",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Besoin de contacter le client ?
                </span>
              </Box>
            </Box>
            <Box style={{ marginTop: 15, padding: 25 }}>
              <ExpansionPanel
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <Typography className={classes.heading}>
                    Informations à propos de la commande
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Toutes les informations nécessaires au bon déroulement de la
                    livraison
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: "block" }}>
                  <Box style={{ width: "100%" }}>
                    <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
                      <i className='uil uil-user-circle' />
                      Destinatire
                    </Typography>
                    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                    <Typography>Nom : {name.lastName}</Typography>
                    <Typography>Prénom : {name.firstName}</Typography>
                    <Typography>Adresse : {name.address}</Typography>
                    <Typography>
                      Complément d'adresse : {name.c_address}
                    </Typography>
                    <Typography>Ville : {name.city}</Typography>
                    <Typography>Code postale : {name.zipcode}</Typography>
                  </Box>
                  <Box style={{ width: "100%", marginTop: 25 }}>
                    <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
                      <i className='uil uil-calling' />
                      Contact
                    </Typography>
                    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                    <Typography>
                      Mail :{" "}
                      <a
                        href='mailto:coulonludovic@gmail.com'
                        style={{
                          textDecoration: "none",
                          color: "rgb(70, 176, 74",
                        }}
                      >
                        {name.email}
                      </a>
                    </Typography>
                    <Typography>
                      Numéro de téléphone :{" "}
                      <span
                        onClick={() => window.open(`tel:${name.phone}`)}
                        style={{
                          textDecoration: "none",
                          color: "rgb(70, 176, 74",
                          cursor: "pointer",
                        }}
                      >
                        {name.phone}
                      </span>
                    </Typography>
                  </Box>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel3bh-content'
                  id='panel3bh-header'
                >
                  <Typography className={classes.heading}>
                    Liste de courses
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Liste et demande explicites du client
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ display: "block" }}>
                  <Box style={{ width: "100%" }}>
                    <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
                      <i className='uil uil-shopping-cart' />
                      Liste de courses
                    </Typography>
                    <Divider style={{ marginTop: 10, marginBottom: 10 }} />

                    {selected_annonce.courses.map((item) => (
                      <Typography color='textSecondary'>{item}</Typography>
                    ))}
                  </Box>
                  <Box style={{ width: "100%", marginTop: 25 }}>
                    <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
                      <i className='uil uil-question-circle' /> Demandes annexes
                    </Typography>
                    <Divider style={{ marginTop: 10, marginBottom: 10 }} />

                    {selected_annonce.info_annexes}
                  </Box>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel4bh-content'
                  id='panel4bh-header'
                >
                  <Typography className={classes.heading}>
                    Étapes de la livraison
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Stepper activeStep={activeStep} orientation='vertical'>
                    {steps.map((label, index) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                          <Typography>{getStepContent(index)}</Typography>
                          <div className={classes.actionsContainer}>
                            <div>
                              <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                              >
                                Annuler
                              </Button>
                              <Button
                                onClick={handleSetStatus}
                                className={classes.button}
                                style={{
                                  backgroundColor: "rgb(70, 176, 74)",
                                  color: "white",
                                  fontWeight: "bold",
                                  borderRadius: 4,
                                }}
                              >
                                {activeStep === steps.length - 1
                                  ? "Terminer"
                                  : "Suivant"}
                              </Button>
                            </div>
                          </div>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <Box display='flex' flexDirection='row-reverse'>
                <Link to='#' style={{ textDecoration: "none" }}>
                  <Button
                    onClick={handleClickOpen}
                    style={{
                      backgroundColor: "rgb(70, 176, 74)",
                      color: "white",
                      fontWeight: "bold",
                      marginTop: 20,
                      padding: 15,
                      borderRadius: 4,
                    }}
                  >
                    Finaliser la livraison <i className='uil uil-box' />
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
              <article className='ticket'>
                <Box className='ticket__wrapper'>
                  <Box className='ticket__header'>
                    <Typography>
                      Récapitulatif de la commande du client
                    </Typography>
                  </Box>
                </Box>
                <div className='ticket__divider' />
                <Box className='ticket__body'>
                  <Box className='ticket__section'>
                    <Typography>
                      Liste des courses ({selected_annonce.courses.length} / 10)
                      :
                    </Typography>

                    {selected_annonce.courses.map((item) => (
                      <Typography color='textSecondary'>{item}</Typography>
                    ))}
                  </Box>
                  <Box className='ticket__section'>
                    <Typography>Demandes annexes :</Typography>
                    <Typography color='textSecondary'>
                      {selected_annonce.info_annexes}
                    </Typography>
                  </Box>

                  <Box className='ticket__section'>
                    <Typography>Mode de paiement :</Typography>
                    <Typography color='textSecondary'>
                      {selected_annonce.payment_method}
                    </Typography>
                  </Box>
                </Box>
                <Box className='ticket__footer '>
                  <Typography style={{ fontWeight: "bold" }}>
                    Prix maximum à respecter :
                  </Typography>
                  <Typography color='textSecondary'>
                    {selected_annonce.max_price + " €"}
                  </Typography>
                </Box>
              </article>
              <Link to='#' style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleClickOpen}
                  fullWidth
                  style={{
                    backgroundColor: "rgb(70, 176, 74)",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 20,
                    padding: 15,
                    borderRadius: 4,
                  }}
                >
                  Finaliser la livraison <i className='uil uil-box' />
                </Button>
              </Link>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
              >
                <DialogTitle>
                  Information a tous nos livreurs{" "}
                  <i className='uil uil-exclamation-triangle'></i>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Avant d’effectuer votre livraison veuillez générer votre
                    attestation de déplacement provisoire, pour générer une
                    attestation veuillez vous rendre sur{" "}
                    <a
                      href={ROUTE.DASHBOARD_HELPER_QR_CODE}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: "none",
                        color: "rgb(70, 176, 74)",
                      }}
                    >
                      ce lien
                    </a>{" "}
                  </DialogContentText>
                  <DialogContentText>
                    Une fois votre attestation téléchargée il vous suffira de
                    présenter votre QR code à l'agent de police.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    style={{
                      marginTop: 15,
                      color: "gray",
                    }}
                    autoFocus
                  >
                    Annuler
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    style={{
                      marginTop: 15,
                      color: "#46B04A",
                    }}
                    autoFocus
                  >
                    Continuer
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
