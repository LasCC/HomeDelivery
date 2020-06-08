import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default (props) => {
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Comment s'inscrire sur HomeDelivery ? 🤨</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Toutes les démarches à suivre pour créer sont compte utilisateur sur
            notre plateforme sont disponible à{" "}
            <a
              href='https://coulonludovicc.gitbook.io/homedelivery/'
              style={{ textDecoration: "none", color: "#0E711A" }}
              target='_blank'
              rel='noopener noreferrer'
            >
              l'adresse suivante
            </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Comment fonctionne le tableau de bord ? 🤯</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Deux tableaux de bord sont disponibles sur HomeDelivery, un tableau
            pour les comptes "classique" 👩‍💼 et un tableau pour les "bénévoles"
            👨‍👨‍👦‍👦
            <br />
            Toutes les fonctionnalités sont expliquées à{" "}
            <a
              href='https://coulonludovicc.gitbook.io/homedelivery/tableau-de-bord'
              style={{ textDecoration: "none", color: "#0E711A" }}
              target='_blank'
              rel='noopener noreferrer'
            >
              l'adresse suivante
            </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Application mobile HomeDelivery 📱</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            L'équipe HomeDelivery à décidé de créer une application mobile pour
            les utilisateurs de compte "bénévole". <br />
            Pour le moment l'application leur est exclusivement dédiée afin de
            faciliter les déplacements en utilisant le GPS intégrer dans le
            téléphone
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>
            Générateur d'attestation de déplacements provisoire ✅
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Avant chaque livraison le livreur devra se rendre sur cette page
            pour générer une attestation de déplacement provisoire pour qu'il
            évite un contrôle. <br />
            Retrouvez toutes les explications à{" "}
            <a
              href='https://coulonludovicc.gitbook.io/homedelivery/tableau-de-bord#generer-une-attestation-de-deplacement-provisoire'
              style={{ textDecoration: "none", color: "#0E711A" }}
              target='_blank'
              rel='noopener noreferrer'
            >
              l'adresse suivante
            </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>Suppression de compte ❌</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Si vous décidez de supprimer votre compte veuillez contacter{" "}
            <a
              href='mailto:io.estiam.com'
              style={{ textDecoration: "none", color: "#0E711A" }}
            >
              cette adresse email
            </a>{" "}
            et nous supprimerons votre compte et toutes les données récoltés.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};
