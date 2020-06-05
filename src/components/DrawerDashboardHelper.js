import React, { useContext } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../Routes";
import { LoginContext } from "../contexts/LoginContext";

export default (props) => {
  const { handleLogout } = useContext(LoginContext);
  const { firstName } = JSON.parse(localStorage.getItem("account_to_register"));
  return (
    <Box style={{ padding: 20, marginTop: 25 }}>
      <img
        onClick={() => (window.location.href = ROUTE.DASHBOARD)}
        src='https://i.imgur.com/htXksA3.png'
        alt='avatarUser'
        style={{
          height: 80,
          width: 80,
          borderRadius: 80,
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
      <Typography
        variant='h6'
        component='h1'
        style={{ marginTop: 15, fontWeight: "bold" }}
      >
        Bonjour {firstName}
      </Typography>
      <Link
        to={ROUTE.DASHBOARD_HELPER_QR_CODE}
        style={{ textDecoration: "none" }}
      >
        <Button
          fullWidth
          endIcon={
            <i
              className='uil uil-qrcode-scan'
              style={{ fontSize: 15, fontWeight: "bold" }}
            />
          }
          style={{
            padding: 10,
            marginTop: 15,
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#46B04A",
            boxShadow: "0px 9px 18px 3px rgba(24,176,116,0.15)",
          }}
        >
          Générer une attestation
        </Button>
      </Link>
      <Box style={{ padding: 15, marginTop: 15 }}>
        <Typography
          style={{
            color: "#82867D",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Menu
        </Typography>
        <Link to={ROUTE.DASHBOARD_HELPER} style={{ textDecoration: "none" }}>
          <Box
            style={{
              padding: 10,
              marginTop: 15,
              marginBottom: 15,
              color: "#82867D",
              cursor: "pointer",
            }}
            display='flex'
            alignItems='center'
            className='HoverTextColor'
          >
            <i
              className='uil uil-create-dashboard'
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <Typography>Dashboard</Typography>
          </Box>
        </Link>
        <Link
          to={ROUTE.DASHBOARD_HELPER_ANNONCE}
          style={{ textDecoration: "none" }}
        >
          <Box
            style={{
              padding: 10,
              marginTop: 15,
              marginBottom: 15,
              color: "#82867D",
              cursor: "pointer",
            }}
            display='flex'
            alignItems='center'
            className='HoverTextColor'
          >
            <i
              className='uil uil-map'
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <Typography>Annonces</Typography>
          </Box>
        </Link>
        <Link
          to={ROUTE.DASHBOARD_SETTINGS_HELPER}
          style={{ textDecoration: "none" }}
        >
          <Box
            style={{
              padding: 10,
              marginTop: 15,
              marginBottom: 15,
              color: "#82867D",
              cursor: "pointer",
            }}
            display='flex'
            alignItems='center'
            className='HoverTextColor'
          >
            <i
              className='uil uil-user-circle'
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <Typography>Compte utilisateur</Typography>
          </Box>
        </Link>
        <Link
          to={ROUTE.DASHBOARD_HISTORY_HELPER}
          style={{ textDecoration: "none" }}
        >
          <Box
            style={{
              padding: 10,
              marginTop: 15,
              marginBottom: 15,
              color: "#82867D",
              cursor: "pointer",
            }}
            display='flex'
            alignItems='center'
            className='HoverTextColor'
          >
            <i
              className='uil uil-box'
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <Typography>Livraisons effectuées</Typography>
          </Box>
        </Link>
      </Box>
      <Box style={{ padding: 15 }}>
        <Typography
          style={{
            color: "#82867D",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Aide
        </Typography>
        <Link
          to={ROUTE.DASHBOARD_QUESTIONS_HELPER}
          style={{ textDecoration: "none" }}
        >
          <Box
            style={{
              padding: 10,
              marginTop: 15,
              marginBottom: 15,
              color: "#82867D",
              cursor: "pointer",
            }}
            display='flex'
            alignItems='center'
            className='HoverTextColor'
          >
            <i
              className='uil uil-comment-question'
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <Typography>Questions récurrentes</Typography>
          </Box>
        </Link>
        <Link
          to={ROUTE.DASHBOARD_CONTACT_HELPER}
          style={{ textDecoration: "none" }}
        >
          <Box
            style={{
              padding: 10,
              marginTop: 15,
              marginBottom: 15,
              color: "#82867D",
              cursor: "pointer",
            }}
            display='flex'
            alignItems='center'
            className='HoverTextColor'
          >
            <i
              className='uil uil-mailbox'
              style={{ fontSize: 20, marginRight: 10 }}
            />
            <Typography>Nous contacter</Typography>
          </Box>
        </Link>
        <Box
          style={{
            padding: 10,
            marginTop: 15,
            marginBottom: 15,
            color: "#82867D",
            cursor: "pointer",
          }}
          display='flex'
          alignItems='center'
          className='HoverTextColor'
          onClick={handleLogout}
        >
          <i
            className='uil uil-sign-out-alt'
            style={{ fontSize: 20, marginRight: 10 }}
          />
          <Typography>Déconnexion</Typography>
        </Box>
      </Box>
    </Box>
  );
};
