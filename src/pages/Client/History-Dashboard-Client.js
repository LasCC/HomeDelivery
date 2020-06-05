import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardAnnonceDashboard from "../../components/CardAnnonceDashboard";
import useLocalStorage from "../../hooks/useLocalstorage";
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
  Tab,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { TabPanel, TabContext, TabList } from "@material-ui/lab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ROUTE from "../../Routes";
import DrawerDashboardClient from "../../components/DrawerDashboardClient";
import CardHistory from "../../components/CardHistory";
import { AnnonceContext } from "../../contexts/AnnonceContext";
window.document.title = "HomeDelivery - Historique";

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
    minHeight: "100vh",
  },
}));

export default (props) => {
  const { fetchAnnonce, myannonces } = useContext(AnnonceContext);
  useEffect(() => {
    fetchAnnonce();
  }, []);

  const [setAnnonce] = useLocalStorage("selected_annonce", "");

  // console.log(annonces)

  const handleAnnonceSelection = (annonce) => {
    setAnnonce(annonce);
    props.history.push(ROUTE.SINGLE_SHIPMENT_ANNONCE);
  };
  const classes = useStyles();
  const [tabValue, setValue] = useState("1");
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const [values, setValues] = useState({
    input: "1",
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
            style={{
              marginLeft: 13,
              marginTop: 13,
              objectFit: "cover",
              height: 35,
            }}
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
              <i className='uil uil-receipt-alt' /> Annonces
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant='h6' component='h1'>
          <i className='uil uil-receipt-alt' /> Annonces que vous avez postées
          sur HomeDelivery
        </Typography>
        <Typography color='textSecondary'>
          Toutes vos annonces que vous avez postées sur la plateforme
          HomeDelivery.
        </Typography>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <TabContext value={tabValue}>
          <TabList onChange={handleTabChange} aria-label='tabs'>
            <Tab label='Annonces en cours' value='1' selected />
            <Tab label='Historique' value='2' />
          </TabList>
          <TabPanel value='1'>
            {(myannonces.loaded &&
              myannonces.annonces.map((annonce, index) => (
                <Box onClick={() => handleAnnonceSelection(annonce)}>
                  <CardAnnonceDashboard
                    key={`cardannonce_${annonce._id}`}
                    {...annonce}
                    num={index}
                  />
                </Box>
              ))) || (
              <Box style={{ textAlign: "center", marginTop: 35 }}>
                <Typography style={{ marginBottom: 15, fontSize: 18 }}>
                  Vous n'avez aucune annonce <br />
                  Pour créer une annonce veuillez cliquer{" "}
                  <a
                    href={ROUTE.ANNONCE}
                    style={{
                      color: "rgb(70, 176, 74)",
                      textDecoration: "none",
                    }}
                  >
                    ce lien.
                  </a>
                </Typography>
                <img
                  src='https://i.imgur.com/I7iNjd4.png'
                  style={{ height: 450 }}
                  alt='notfound'
                />
              </Box>
            )}
          </TabPanel>
          <TabPanel value='2'>
            <CardHistory />
          </TabPanel>
        </TabContext>
      </main>
    </div>
  );
};
