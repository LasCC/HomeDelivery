import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Drawer,
  Typography,
} from "@material-ui/core";
import ROUTE from "../Routes";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem alignItems='flex-start'>
          <img
            src='https://svgur.com/i/Jg4.svg'
            style={{ height: 35, marginRight: 15 }}
            alt='logo'
          />
          <Typography
            variant='h6'
            noWrap
            style={{ color: "black", fontWeight: "bold" }}
          >
            HomeDelivery
          </Typography>
        </ListItem>
        <Divider />

        <Link
          to={ROUTE.HOME}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Accueil' />
          </ListItem>
        </Link>

        <Link
          to={ROUTE.DASHBOARD}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
        </Link>

        <Link
          to={ROUTE.LOGIN}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText primary='Connexion' />
          </ListItem>
        </Link>

        <Link
          to={ROUTE.REGISTER}
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary='Créer un compte' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer("left", true)}
        style={{ backgroundColor: "white", fontWeight: "bold" }}
      >
        <MenuIcon style={{ color: "black" }} />
      </IconButton>
      <Drawer
        anchor='left'
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
}
