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
import DrawerDashboardClient from "../../components/DrawerDashboardClient";
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
    backgroundColor: "white",
    zIndex: 2,
  },
}));

export default (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    password: "",
    password_confirm: "",
    mail: "",
    home: "",
    complement: "",
    city: "",
    code_post: "",
    phone_number: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = () => {
    console.log("====== Registration ======");
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
        <DrawerDashboardClient />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
          style={{ marginBottom: 25 }}
        >
          <Link to={ROUTE.DASHBOARD} style={{ textDecoration: "none" }}>
            <Typography color='textSecondary'>
              <i className='uil uil-create-dashboard' /> Dashboard
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <Typography color='textPrimary' style={{ fontWeight: "bold" }}>
              <i className='uil uil-sliders-v' /> Compte utilisateur
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant='h6' component='h1'>
          <i className='uil uil-sliders-v' /> Paramètre de votre compte
          utilisateur
        </Typography>
        <Typography color='textSecondary'>
          Chez HomeDelivery, toutes vos données vous appartiennent, si vous le
          souhaitez vous pouvez supprimer ou modifier toutes vos données
          enregistrées sur notre plateforme.
        </Typography>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <Box style={{ marginTop: 25 }}>
          <Typography variant='h6' component='h1'>
            <i className='uil uil-database' style={{ marginRight: 10 }} />{" "}
            Données personnelles
          </Typography>
          <Box display='flex'>
            <TextField
              label='Nom'
              variant='outlined'
              fullWidth
              type='text'
              value={values.firstname}
              onChange={handleChange("firstname")}
              style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
            />
            <TextField
              label='Prénom'
              variant='outlined'
              fullWidth
              type='text'
              value={values.lastname}
              onChange={handleChange("lastname")}
              style={{ marginTop: 15, marginBottom: 15 }}
            />
          </Box>
          <Box display='flex'>
            <TextField
              label='Mot de passe'
              type='password'
              variant='outlined'
              fullWidth
              value={values.password}
              onChange={handleChange("password")}
              style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
            />
            <TextField
              label='Confirmation'
              type='password'
              variant='outlined'
              fullWidth
              value={values.password_confirm}
              onChange={handleChange("password_confirm")}
              style={{ marginTop: 15, marginBottom: 15 }}
            />
          </Box>
          <Box display='flex'>
            <TextField
              label='Adresse mail'
              variant='outlined'
              type='email'
              fullWidth
              value={values.mail}
              onChange={handleChange("mail")}
              style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
            />
            <TextField
              label='Adresse'
              variant='outlined'
              fullWidth
              value={values.home}
              onChange={handleChange("home")}
              style={{ marginTop: 15, marginBottom: 15 }}
            />
          </Box>
          <Box display='flex'>
            <TextField
              label='Complément adresse'
              variant='outlined'
              fullWidth
              value={values.complement}
              onChange={handleChange("complement")}
              style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
            />
            <TextField
              label='Ville'
              variant='outlined'
              fullWidth
              value={values.city}
              onChange={handleChange("city")}
              style={{ marginTop: 15, marginBottom: 15 }}
            />
          </Box>
          <Box display='flex'>
            <TextField
              label='Code postale'
              variant='outlined'
              fullWidth
              value={values.code_post}
              onChange={handleChange("code_post")}
              style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
            />
            <TextField
              label='N° de téléphone'
              variant='outlined'
              type='tel'
              fullWidth
              value={values.phone_number}
              onChange={handleChange("phone_number")}
              style={{ marginTop: 15, marginBottom: 15 }}
            />
          </Box>
          <Button
            onClick={handleSubmit}
            style={{
              backgroundColor: "rgb(70, 176, 74)",
              borderRadius: 4,
              color: "white",
              fontWeight: "bold",
              marginTop: 15,
              padding: 15,
            }}
          >
            Modifier vos paramètres <i className='uil uil-save' />
          </Button>
        </Box>
        <Box style={{ marginTop: 25 }}>
          <Typography variant='h6' component='h1'>
            <i className='uil uil-trash-alt' style={{ marginRight: 10 }} />{" "}
            Supprimer vos données personnelles
          </Typography>
          <Box style={{ marginTop: 25 }}>
            <Typography color='textSecondary'>
              En supprimant vos données personnelles vous ne pourrez plus vous
              connecter à l'application.
            </Typography>
            <br />
            <Button
              onClick={handleSubmit}
              style={{
                backgroundColor: "rgb(244, 67, 54)",
                color: "white",
                fontWeight: "bold",
                marginTop: 15,
                padding: 15,
                borderRadius: 4,
              }}
            >
              Supprimer <i className='uil uil-trash-alt' />
            </Button>
          </Box>
        </Box>
      </main>
    </div>
  );
};
