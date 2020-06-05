import React from "react";
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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CardHistory from "../../components/CardHistory";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ROUTE from "../../Routes";
import DrawerDashboardHelper from "../../components/DrawerDashboardHelper";
window.document.title = "HomeDelivery - Livraisons effectuées";

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
              <i className='uil uil-box' /> Livraisons effectuées
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant='h6' component='h1'>
          <i className='uil uil-box' /> Toutes les personnes que vous avez
          aidées depuis votre inscription
        </Typography>
        <Typography color='textSecondary'>
          Mauris aliquet scelerisque blandit. Morbi laoreet, tortor at convallis
          laoreet, augue nibh cursus mauris, eget faucibus ex nibh a sem.
        </Typography>
        <Divider style={{ marginTop: 15, marginBottom: 15 }} />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
        <CardHistory />
      </main>
    </div>
  );
};
