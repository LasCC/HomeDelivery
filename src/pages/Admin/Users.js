import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  Select,
  DialogActions,
  Button,
  InputLabel,
  MenuItem,
  Breadcrumbs,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../../Routes";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DrawerDashboardAdmin from "../../components/DrawerDashboardAdmin";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import CheckIcon from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import UpdateIcon from "@material-ui/icons/Update";
import MapIcon from "@material-ui/icons/Map";
import moment from "moment";
import "moment/locale/fr";
window.document.title = "HomeDelivery - Gestion d'utilisateurs";
moment.locale("fr");

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  UpdateIcon: forwardRef((props, ref) => <UpdateIcon {...props} ref={ref} />),
  MapIcon: forwardRef((props, ref) => <MapIcon {...props} ref={ref} />),
};

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
    boxShadow: "-8px 0px 18px 0px rgba(0,0,0,0.05)",
    minHeight: "100vh",
    zIndex: 2,
  },
}));

export default (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    step_update: "",
  });

  const handleChange = (event) => {
    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };
  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const [state, setState] = React.useState({});

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
        <Toolbar />
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
          style={{ marginBottom: 25 }}
        >
          <Link to={ROUTE.DASHBOARD_ADMIN} style={{ textDecoration: "none" }}>
            <Typography color='textSecondary'>
              <i className='uil uil-create-dashboard' /> Dashboard
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <Typography color='textPrimary' style={{ fontWeight: "bold" }}>
              <i className='uil-user-circle' /> Utilisateurs
            </Typography>
          </Link>
        </Breadcrumbs>
        <Typography variant='h6' component='h1'>
          <i className='uil uil-user-circle' /> Tous les utilisateurs de
          l'application
        </Typography>
        <Typography color='textSecondary'>
          Modification en temps réelle des informations des utilisateurs de
          HomeDelivery
        </Typography>
        <Divider style={{ marginTop: 15, marginBottom: 25 }} />
        <MaterialTable
          id='Table'
          icons={tableIcons}
          title='Utilisateurs de HomeDelivery'
          columns={[
            { title: "Nom", field: "firstname" },
            { title: "Prénom", field: "lastname" },
            {
              title: "Type",
              field: "type",
            },
            {
              title: "Ville",
              field: "city",
            },
            {
              title: "Annonces",
              field: "annonces",
            },
            {
              title: "Date de naissance",
              field: "birthDate",
            },
            {
              title: "Numéro de téléphone",
              field: "phonenumber",
            },
          ]}
          data={[
            {
              firstname: "Mehmet",
              lastname: "Baran",
              type: "Bénévole",
              city: "Rambouillet",
              annonces: 6,
              birthDate: "08/03/1995",
              phonenumber: "0603469784",
            },
            {
              firstname: "Zerya Betül",
              lastname: "Bougandere",
              type: "Classique",
              city: "Paris 11e",
              annonces: 2,
              birthDate: "12/11/1998",
              phonenumber: "0649784620",
            },
          ]}
          actions={[
            {
              icon: () => <MapIcon />,
              tooltip: "Localisation de l'utilisateur",
              onClick: (event, query) => {
                alert("Redirection sur google map");
              },
            },
            {
              icon: () => <UpdateIcon />,
              tooltip: "Mettre à jour l'utilisateur",
              onClick: (event, query) => {
                handleClickOpen();
                console.log("ping pong ching cheng");
              },
            },
            {
              icon: () => <DeleteOutline />,
              tooltip: "Supprimer l'utilisateur",
              onClick: (event, query) => {
                alert("Vous avez supprimer l'utilisateur");
              },
            },
          ]}
          localization={{
            body: {
              deleteTooltip: "Supprimer",
              editTooltip: "Edit",
              emptyDataSourceMessage: "Aucun utilisateur trouvé",
              editRow: {
                deleteText: "Êtes-vous sur de bien vouloir faire ça ?",
                cancelTooltip: "Annuler",
                saveTooltip: "Confirmer",
              },
            },
            toolbar: {
              exportTitle: "Exporter la liste",
              searchTooltip: "Rechercher un utilisateur",
              exportName: "Exporter au format CSV",
              searchPlaceholder: "Rechercher un utilisateur",
            },
            pagination: {
              labelRowsSelect: "rangées",
              labelDisplayedRows: "{from}-{to} sur {count}",
              firstTooltip: "Première page",
              previousTooltip: "Précédent",
              nextTooltip: "Suivant",
              lastTooltip: "Dernière page",
              toolbarExportTitle: "Exporter",
            },
          }}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            exportFileName: "export_user_dashboard",
            headerStyle: {
              backgroundColor: "#46B04A",
              color: "white",
            },
          }}
        />
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={state.open}
          onClose={handleClose}
        >
          <DialogTitle>Mettre à jour le compte de l'utilisateur</DialogTitle>
          <DialogContent>
            <form>
              <FormControl style={{ height: "25vh", width: "100%" }}>
                <InputLabel>Veuillez sélectionner une valeur</InputLabel>
                <Select
                  value={values.step_update}
                  onChange={handleChange}
                  inputProps={{
                    name: "step_update",
                  }}
                >
                  <MenuItem value={0}>Compte bénévole</MenuItem>
                  <MenuItem value={1}>Compte classique</MenuItem>
                  <MenuItem value={2}>Supprimer</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='secondary'>
              Annuler
            </Button>
            <Button
              onClick={() => {
                console.log("getit");
                handleClose();
              }}
              color='primary'
            >
              Confirmer
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </div>
  );
};
