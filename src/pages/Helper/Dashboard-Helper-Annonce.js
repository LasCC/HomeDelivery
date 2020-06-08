import React, { useState, useEffect } from "react";
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
  MenuItem,
  Select,
  InputLabel,
  Typography,
  FormControl,
  Chip,
} from "@material-ui/core";
import DrawerDashboardHelper from "../../components/DrawerDashboardHelper";
import MapDev from "../../components/MapDev";
import France from "../../data/france.json";
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
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const classes = useStyles();
  const [values, setValues] = useState({
    search: "",
    ville: "",
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
            style={{ fontSize: 25, color: "#82867D" }}
          />
          <InputBase
            onChange={handleChange("search")}
            className={classes.inputSearch}
            placeholder='Rechercher un département ou une région'
            inputProps={{ "aria-label": "Rechercher une adresse" }}
          />

          <Divider orientation='vertical' flexItem />
          <FormControl
            variant='outlined'
            style={{
              marginRight: 15,
              minWidth: 300,
              border: "none",
              marginLeft: 15,
            }}
          >
            <InputLabel ref={inputLabel} htmlFor='villederesidence'>
              Rechercher par département
            </InputLabel>
            <Select
              labelWidth={labelWidth}
              value={values.ville}
              onChange={handleChange("ville")}
              autoWidth={true}
              inputProps={{
                name: "ville",
                "aria-label": "Ville de résidence",
              }}
            >
              {France.map((city, k) => (
                <MenuItem key={k} value={city.dep_name}>
                  <i classNamme='uil uil-map-marker' />
                  {city.num_dep + " " + city.dep_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type='submit'
            aria-label='search'
            style={{
              height: "55px",
              width: "15%",
              borderRadius: 8,
              backgroundColor: "rgb(70, 176, 74)",
              color: "white",
            }}
          >
            Rechercher
          </Button>
        </Box>
        <div>{`inputValue: '${values.ville}'`}</div>
        <div>{`searchBar: '${values.search}'`}</div>
        <Box
          style={{
            position: "sticky",
            top: 0,
            height: "90vh",
            backgroundColor: "#3D9EFE7",
          }}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <MapDev />
        </Box>
      </main>
    </div>
  );
};
