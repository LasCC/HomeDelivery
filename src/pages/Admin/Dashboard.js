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
  Card,
} from "@material-ui/core";
import { Line, Bar } from "react-chartjs-2";
import {
  dashboardAllProductsChart,
  dashboardShippedProductsChart,
  dashboard24HoursPerformanceChart,
} from "./charts";
import DrawerDashboardAdmin from "../../components/DrawerDashboardAdmin";
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
    backgroundColor: "#388E3B",
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
            placeholder='Rechercher un utilisateur'
            inputProps={{ "aria-label": "Rechercher un utilisateur" }}
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
        <Box className={classes.toolbar} style={{ backgroundColor: "#2E7D32" }}>
          <Typography
            style={{
              marginLeft: 25,
              marginTop: 20,
              color: "white",
              fontWeight: "bold",
            }}
          >
            HomeDelivery - Administration
          </Typography>
        </Box>
        <Divider />
        <DrawerDashboardAdmin />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box display='flex' alignItems='center'>
          <Card style={{ width: "50%", marginRight: 15, padding: 15 }}>
            <Typography>Utilisateurs actifs de l'application</Typography>
            <div className='chart-area'>
              <Line
                data={dashboardShippedProductsChart.data}
                options={dashboardShippedProductsChart.options}
              />
            </div>
          </Card>
          <Card style={{ width: "50%", marginRight: 15, padding: 15 }}>
            <Typography>Nombre d'annonces publiées</Typography>
            <div className='chart-area'>
              <Line
                data={dashboardAllProductsChart.data}
                options={dashboardAllProductsChart.options}
              />
            </div>
          </Card>
          <Card style={{ width: "50%", marginRight: 15, padding: 15 }}>
            <Typography>Nombre d'utilisateur inscrits</Typography>
            <div className='chart-area'>
              <Bar
                data={dashboard24HoursPerformanceChart.data}
                options={dashboard24HoursPerformanceChart.options}
              />
            </div>
          </Card>
          <Box id='chart'></Box>
        </Box>
      </main>
    </div>
  );
};
