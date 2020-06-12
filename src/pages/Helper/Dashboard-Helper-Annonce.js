import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  Toolbar,
  Divider,
  InputBase,
  Button,
  IconButton,
  Box,
  Typography,
  TextField,
  Chip,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DrawerDashboardHelper from "../../components/DrawerDashboardHelper";
import France from "../../data/france.json";
import { useContext } from "react";
import { AnnonceContext } from "../../contexts/AnnonceContext";
import ROUTE from "../../Routes";
import logoBlack from "../../images/logoBlack.svg";
import CardAnnonceDashboard from "../../components/CardAnnonceDashboard";
import useLocalStorage from "../../hooks/useLocalstorage";

window.document.title = "HomeDelivery - Annonces";

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
  inputSearch: {
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
  const { fetchCityAnnonce, annoncedept } = useContext(AnnonceContext);
  const [annonceselected, setAnnonceselected] = useLocalStorage(
    "selected_annonce",
    "xxx"
  );
  const classes = useStyles();
  const [values, setValues] = useState({
    search: "",
    ville: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = () => {
    fetchCityAnnonce(values.ville);
  };
  const handleAnnonceSelection = (obj) => {
    console.log(obj);
    setAnnonceselected(obj);
    props.history.push(ROUTE.DASHBOARD_UPDATE_ANNONCE_HELPER);
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
            src={logoBlack}
            alt='logoHomeDelivery'
            style={{ marginLeft: 13, marginTop: 13, height: 35 }}
          />
        </Box>
        <Divider />
        <DrawerDashboardHelper />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography
          variant='h5'
          component='h1'
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Recherchez l'annonce qui vous convient le mieux{" "}
          <Chip
            label='New'
            variant='outlined'
            style={{
              backgroundColor: "#d9efe7 ",
              borderColor: "#d9efe7 ",
              borderWidth: 1,
              color: "#18b074",
              fontWeight: "bold",
              marginLeft: 5,
            }}
          />
        </Typography>
        <Typography
          component='h1'
          color='textSecondary'
          style={{ textAlign: "center" }}
        >
          Vous pouvez dès à présent affiner vos recherches par département
        </Typography>
        <Box
          display='flex'
          alignItems='center'
          style={{
            marginTop: 25,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 15,
            height: "100px",
            boxShadow:
              "0 4.5px 3px rgba(0, 0, 0, 0.01),  0 12.5px 10.8px rgba(0, 0, 0, 0.015),  0 30.1px 45.5px rgba(0, 0, 0, 0.02),  0 100px 80px rgba(0, 0, 0, 0.03)",
          }}
        >
          <i
            className='uil uil-search'
            style={{ fontSize: 25, color: "#82867D", marginTop: 10 }}
          />
          <Autocomplete
            id='combo-box-demo'
            onChange={(event, newValue) => {
              setValues({ ...values, ville: newValue.dep_name });
            }}
            size='small'
            options={France}
            style={{ width: "100%" }}
            getOptionLabel={(option) => option.num_dep + "-" + option.dep_name}
            renderInput={(params) => (
              <TextField
                style={{ marginLeft: 10 }}
                {...params}
                label='Département'
                placeholder='Renseigner un département pour affiner votre recherche'
              />
            )}
          />
          <Button
            onClick={handleSubmit}
            type='submit'
            aria-label='search'
            style={{
              height: "55px",
              width: "15%",
              marginLeft: 25,
              borderRadius: 8,
              backgroundColor: "rgb(70, 176, 74)",
              color: "white",
            }}
          >
            Rechercher
          </Button>
        </Box>
        <div>
          {" "}
          {annoncedept.length > 0 || (
            <Box style={{ textAlign: "center", marginTop: 35 }}>
              <Typography style={{ marginBottom: 15, fontSize: 18 }}>
                Malheureusement aucune annonce n'est disponible pour le moment
                <br />
                veuillez essayer avec un autre département
              </Typography>
              <img
                src='https://i.imgur.com/uM9lEDY.png'
                style={{ height: 450 }}
                alt='notfound'
              />
            </Box>
          )}
        </div>
        {annoncedept.length > 0 &&
          annoncedept.annonces.map((cdata, index) => (
            <Box onClick={() => handleAnnonceSelection(cdata)}>
              <CardAnnonceDashboard
                key={index}
                {...cdata}
                num={cdata._id.substring(17, 24)}
              />
            </Box>
          ))}
      </main>
    </div>
  );
};
