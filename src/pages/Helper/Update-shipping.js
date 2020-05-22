import React from "react";
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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Lottie from "react-lottie";
import ROUTE from "../../Routes";
import Navbar from "../../components/Navbar";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
window.document.title = "HomeDelivery - Service de livraison";

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
    "Acheter les articles",
    "Confirmer l'achat et fournir les preuves",
    "Livraison chez le client",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `En acceptant de prendre en charge la commande du client je sais pas quoi mettre`;
    case 1:
      return `Confirmez vous avoir acheter la liste complète du client ?`;
    case 2:
      return `Un input avec upload en base64 dans la bdd :zzz:`;
    case 3:
      return `Livraison à domicile en respectant les distances de sécurité et déposer la livraison au palier de la personne.`;
    default:
      return "Étape inconnue";
  }
}

export default (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleSubmit = () => {
    console.log("====== LIST COURSES ======");
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                    Annonce n°6543778
                  </Typography>
                  <Typography
                    variant='h1'
                    style={{ fontWeight: "bold", fontSize: 25 }}
                  >
                    Michel PLATINI
                  </Typography>
                </Box>
              </Box>
              <Box>
                <a
                  href='tel:060606060606'
                  style={{
                    color: "rgb(70, 176, 74)",
                    textDecoration: "none",
                  }}
                >
                  Besoin de contacter le client ?
                </a>
              </Box>
            </Box>
            <Box style={{ marginTop: 15, padding: 25 }}>
              <ExpansionPanel
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                defaultExpanded
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <Typography className={classes.heading}>
                    Informations à propos du client
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Toutes les informations nécessaires au bon déroulement de la
                    livraison
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                    feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
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
                <ExpansionPanelDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
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
                                onClick={handleNext}
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
                    onClick={handleSubmit}
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
                    <Typography>Liste des courses (1 / 10) :</Typography>
                  </Box>
                  <Box className='ticket__section'>
                    <Typography>Demandes annexes :</Typography>
                    <Typography color='textSecondary'></Typography>
                  </Box>

                  <Box className='ticket__section'>
                    <Typography>Mode de paiement :</Typography>
                    <Typography color='textSecondary'></Typography>
                  </Box>
                </Box>
                <Box className='ticket__footer '>
                  <Typography style={{ fontWeight: "bold" }}>
                    Prix maximum à respecter :
                  </Typography>
                  <Typography color='textSecondary'>€</Typography>
                </Box>
              </article>
              <Link to='#' style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleSubmit}
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
