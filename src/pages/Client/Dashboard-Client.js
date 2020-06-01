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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../../Routes";
import DrawerDashboardClient from "../../components/DrawerDashboardClient";
window.document.title = "HomeDelivery - Dashbord";

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
  });
  const { firstName } = JSON.parse(localStorage.getItem("account_to_register"));
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
            draggable='false'
            style={{ marginLeft: 13, marginTop: 13 }}
          />
        </Box>
        <Divider />
        <DrawerDashboardClient />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box
          style={{ height: "80vh" }}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Box>
            <Typography
              color='textSecondary'
              variant='h6'
              component='h1'
              style={{ textAlign: "center" }}
            >
              Ravis de vous revoir parmi nous {firstName}
            </Typography>
            <Typography
              variant='h4'
              component='h1'
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Que souhaitez-vous faire aujourd’hui ?
            </Typography>
            <Box style={{ marginTop: 25 }} display='flex' alignItems='center'>
              <Box
                className='card'
                style={{
                  height: 200,
                  width: 200,
                  backgroundColor: "#D7FFF1",
                  borderRadius: 10,
                  margin: 10,
                }}
              >
                <Link
                  to={ROUTE.DASHBOARD_SETTINGS}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    display='flex'
                    justify='center'
                    alignItems='center'
                    style={{
                      height: "100%",
                      backgroundImage: "url('https://svgur.com/i/KAb.svg')",
                      backgroundPosition: "right",
                      backgroundSize: "cover",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "bolder",
                        color: "#1f2d3d",
                        opacity: 1,
                      }}
                      variant='h6'
                      component='h2'
                    >
                      Votre <br />
                      compte
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Box
                className='card'
                style={{
                  height: 200,
                  width: 450,
                  backgroundColor: "#048A81",
                  borderRadius: 10,
                  margin: 10,
                }}
              >
                <Link to={ROUTE.ANNONCE} style={{ textDecoration: "none" }}>
                  <Box
                    display='flex'
                    justify='center'
                    alignItems='center'
                    style={{
                      height: "100%",
                      backgroundImage: "url('https://svgur.com/i/KAw.svg')",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      style={{ fontWeight: "bold", color: "#fff", opacity: 1 }}
                      variant='h6'
                      component='h2'
                    >
                      Créer une annonce
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Box
                flexGrow={1}
                className='card'
                style={{
                  height: 200,
                  width: 178,
                  backgroundColor: "#E1FAF9",
                  borderRadius: 10,
                  margin: 10,
                }}
              >
                <Link
                  to={ROUTE.DASHBOARD_QUESTIONS}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Box
                    display='flex'
                    justify='center'
                    alignItems='center'
                    style={{ height: "100%" }}
                  >
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#1f2d3d",
                        opacity: 0.9,
                      }}
                      variant='h6'
                      component='h2'
                    >
                      Questions ?
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
            <Box display='flex' alignItems='center'>
              <Box
                className='card'
                flexGrow={1}
                style={{
                  height: 200,
                  backgroundColor: "#F4C3C2",
                  borderRadius: 10,
                  margin: 10,
                }}
              >
                <Link
                  to={ROUTE.DASHBOARD_HISTORY}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Box
                    display='flex'
                    justify='center'
                    alignItems='center'
                    style={{
                      height: "100%",
                      backgroundImage: "url('https://svgur.com/i/KAa.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left",
                      backgroundPositionX: "-6em",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      style={{ fontWeight: "bold", color: "white", opacity: 1 }}
                      variant='h6'
                      component='h2'
                    >
                      Annonces postées <br /> 45
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Box
                className='card'
                style={{
                  height: 200,
                  backgroundColor: "#add9cd",
                  borderRadius: 10,
                  margin: 10,
                }}
              >
                <Link
                  to={ROUTE.DASHBOARD_CONTACT}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Box
                    display='flex'
                    justify='center'
                    alignItems='center'
                    style={{ height: "100%" }}
                  >
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#1f2d3d",
                        opacity: 0.9,
                      }}
                      variant='h6'
                      component='h2'
                    >
                      Nous contacter
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
    </div>
  );
};
