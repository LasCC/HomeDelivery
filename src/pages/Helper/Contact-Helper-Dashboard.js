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
  Breadcrumbs,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ROUTE from "../../Routes";
import DrawerDashboardHelper from "../../components/DrawerDashboardHelper";
window.document.title = "HomeDelivery - Nous contacter";

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
    boxShadow: "-8px 0px 18px 0px rgba(0,0,0,0.05)",
    minHeight: "100vh",
    zIndex: 2,
  },
}));

export default (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    search: "",
    firstName: "",
    lastName: "",
    message: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
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
            draggable='false'
            style={{ marginLeft: 13, marginTop: 13 }}
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
              <i className='uil uil-mailbox' /> Nous contacter
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant='h6' component='h1'>
          Contactez nous
        </Typography>
        <Typography color='textSecondary'>
          Si vous avez la moindre question n'hésitez pas à nous écrire un petit
          message.
        </Typography>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <Box style={{ marginTop: 15 }}>
          <Typography variant='h6' component='h1'>
            <i className='uil uil-envelope' /> Nous envoyer un message
          </Typography>
          <TextField
            style={{ marginBottom: 15, marginTop: 15 }}
            fullWidth
            autoFocus
            variant='outlined'
            placeholder='PLATINI'
            label='Nom'
            value={values.firstName}
            onChange={handleChange("firstName")}
          />
          <TextField
            style={{ marginBottom: 15 }}
            fullWidth
            placeholder='Michel'
            variant='outlined'
            label='Prénom'
            value={values.lastName}
            onChange={handleChange("lastName")}
          />
          <TextField
            style={{ marginBottom: 15 }}
            fullWidth
            variant='outlined'
            multiline
            rows='4'
            label='Message'
            value={values.message}
            onChange={handleChange("message")}
          />
          <Box display='flex' justifyContent='row-reverse'>
            <Button
              style={{
                backgroundColor: "rgb(70, 176, 74)",
                color: "white",
                fontWeight: "bold",
                marginTop: 15,
                padding: 15,
                borderRadius: 4,
              }}
            >
              Envoyer <i className='uil uil-envelope-send' />
            </Button>
          </Box>
        </Box>
        <Box style={{ marginTop: 25 }}>
          <Typography variant='h6' component='h1'>
            <i className='uil uil-bug' /> Vous avez trouver un bug ?
          </Typography>
          <Typography color='textSecondary'>
            Si vous avez trouvé un bug merci de contacter au plus vite
            l'administrateur à l'adresse suivante :{" "}
            <a
              href='mailto: io.estiam@gmail.com'
              style={{ textDecoration: "none", color: "#0E711A" }}
            >
              <strong>io.estiam@gmail.com</strong>
            </a>{" "}
            <br />
            Merci d'indiquer le type de bug que vous avez trouvé et comment nous
            pouvons le reproduire pour le corriger au plus vite.
          </Typography>
        </Box>
      </main>
    </div>
  );
};
