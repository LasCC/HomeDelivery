import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  Toolbar,
  Typography,
  Divider,
  InputBase,
  IconButton,
  Box,
  Button,
  TextField,
  Breadcrumbs,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ROUTE from "../../Routes";
import DrawerDashboardHelper from "../../components/DrawerDashboardHelper";
window.document.title = "HomeDelivery - Compte utilisateur";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    zIndex: 3,
    backgroundColor: "white",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    marginTop: 3,
    zIndex: 3,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#F4F6F3",
    borderRight: 0,
    zIndex: 1,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(8),
    zIndex: 2,
  },
}));

export default (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    search: "",
    firstname: "",
    lastname: "",
    mail: "",
    password: "",
    phone_number: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log("====== Registration HELPER ======");
    console.log(values);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Box position='fixed' className={classes.appBar}>
        <Toolbar>
          <i
            className='uil uil-search'
            style={{ fontSize: 25, color: "#82867D" }}
          />
          <InputBase
            onChange={handleChange("search")}
            className={classes.input}
            placeholder='Rechercher une adresse'
            inputProps={{ "aria-label": "Rechercher une adresse" }}
          />
          <IconButton
            type='submit'
            className={classes.iconButton}
            aria-label='search'
          >
            <i
              className='uil uil-arrow-right'
              style={{ fontSize: 25, color: "#82867D" }}
            />
          </IconButton>
        </Toolbar>
      </Box>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <Box className={classes.toolbar}>
          <img
            src='https://svgur.com/i/LhH.svg'
            alt='logoHomeDelivery'
            style={{ marginLeft: 13, marginTop: 13, height: 35 }}
          />
        </Box>
        <Divider />
        <DrawerDashboardHelper />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
          style={{ marginBottom: 25 }}
        >
          <Link to={ROUTE.DASHBOARD_HELPER} style={{ textDecoration: "none" }}>
            <Typography color='textSecondary'>
              <i className='uil uil-create-dashboard' /> Dashboard
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <Typography color='textPrimary' style={{ fontWeight: "bold" }}>
              <i className='uil uil-user-circle' /> Compte utilisateur
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant='h6' component='h1'>
          Paramètre de votre compte utilisateur
        </Typography>
        <Typography color='textSecondary'>
          Chez HomeDelivery vous avez le contrôle de vos données personnelles,
          vous pouvez éditer, supprimer toutes vos données enregistrées sur
          notre site internet.
        </Typography>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <Box style={{ marginTop: 25, padding: 15 }}>
          <Typography variant='h6' component='h1'>
            <i className='uil uil-database' style={{ marginRight: 10 }} />{" "}
            Données personnelles
          </Typography>
          <TextField
            label='Nom'
            variant='outlined'
            fullWidth
            value={values.firstname}
            onChange={handleChange("firstname")}
            style={{ marginTop: 25, marginBottom: 15 }}
          />
          <TextField
            label='Prénom'
            variant='outlined'
            fullWidth
            value={values.lastname}
            onChange={handleChange("lastname")}
            style={{ marginTop: 15, marginBottom: 15 }}
          />
          <TextField
            label='Adresse email'
            variant='outlined'
            fullWidth
            value={values.mail}
            onChange={handleChange("mail")}
            style={{ marginTop: 15, marginBottom: 15 }}
          />
          <TextField
            label='Mot de passe'
            variant='outlined'
            type='password'
            fullWidth
            value={values.password}
            onChange={handleChange("password")}
            style={{ marginTop: 15, marginBottom: 15 }}
          />
          <TextField
            label='N° de téléphone'
            variant='outlined'
            fullWidth
            value={values.phone_number}
            onChange={handleChange("phone_number")}
            style={{ marginTop: 15, marginBottom: 15 }}
          />
          <TextField
            label='Date de naissance'
            variant='outlined'
            format='dd/MM/yyyy'
            fullWidth
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginTop: 15, marginBottom: 15 }}
            value={values.date_naissance}
            onChange={handleChange("date_naissance")}
          />
          <Button
            onClick={handleSubmit}
            style={{
              backgroundColor: "rgb(70, 176, 74)",
              color: "white",
              fontWeight: "bold",
              marginTop: 15,
              padding: 15,
              borderRadius: 4,
              boxShadow: "rgba(24, 176, 116, 0.15) 0px 9px 18px 3px",
            }}
          >
            Modifier vos paramètres <i className='uil uil-save' />
          </Button>
        </Box>
      </main>
    </div>
  );
};
