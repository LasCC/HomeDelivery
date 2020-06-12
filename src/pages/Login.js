import React, { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { LoginContext } from "../contexts/LoginContext";
import logoWhite from "../images/logoWhite.svg";
import {
  Grid,
  Typography,
  Box,
  Button,
  InputAdornment,
  IconButton,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ROUTE from "../Routes";
import Slide from "@material-ui/core/Slide";

window.document.title = "HomeDelivery - Connexion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { handleLogin, httpError } = useContext(LoginContext);

  const [values, setValues] = useState({
    showPassword: false,
    submitted: false,
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const errorMsg = () => {
    if (httpError.status === 400) {
      return (
        <Typography color='error'>Merci de completer les champs</Typography>
      );
    } else if (httpError.status === 401) {
      return (
        <Typography color='error'>
          Nom d'utilisateur ou mot de passe incorrect
        </Typography>
      );
    }
    return;
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={12}
          xl={3}
          md={3}
          sm={12}
          style={{ boxShadow: "17px 0px 37px -20px rgba(0, 0, 0, 0.35)" }}
        >
          <Box
            style={{
              height: "100vh",
              zIndex: 2,
              backgroundColor: "rgb(70, 176, 74)",
            }}
            className='backgroundRegister'
          >
            <Box
              onClick={() => window.location.replace("/")}
              display='flex'
              alignItems='center'
              style={{
                cursor: "pointer",
                padding: 25,
              }}
            >
              <img
                src={logoWhite}
                alt='logoHomedeliveryBlanc'
                style={{ height: 40 }}
              />
              <Box>
                <Typography
                  style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}
                >
                  HomeDelivery
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} xl={9} md={9} sm={12}>
          <Box
            style={{ height: "100vh", zIndex: 1 }}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Box style={{ padding: 25, width: "85%" }}>
              <Typography
                variant='h1'
                style={{ fontWeight: "bolder", fontSize: 55, marginBottom: 10 }}
              >
                Connexion
              </Typography>
              <Typography color='textSecondary'>
                Veuillez renseigner vos identifiant pour accéder à HomeDelivery
              </Typography>
              {values.submitted && httpError.status === 401 && errorMsg()}
              <Formik
                initialValues={values}
                validate={(values) => {
                  setValues({ ...values, submitted: false });
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Ce champ est requis !";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Adresse email invalide";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setValues({ ...values, submitted: true });
                  setTimeout(() => {
                    setSubmitting(false);
                    handleLogin({
                      email: values.email,
                      password: values.password,
                    });
                  }, 1000);
                }}
              >
                {({ submitForm, isSubmitting }) => (
                  <Form>
                    <Field
                      component={TextField}
                      name='email'
                      type='email'
                      label='Identifiant'
                      placeholder='monmail@gmail.com'
                      variant='outlined'
                      fullWidth
                      style={{
                        marginTop: 15,
                        marginBottom: 15,
                      }}
                    />
                    <Field
                      component={TextField}
                      label='Mot de passe'
                      name='password'
                      variant='outlined'
                      placeholder='**************'
                      fullWidth
                      type={values.showPassword ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              aria-label='toggle password visibility'
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <i className='uil uil-eye-slash' />
                              ) : (
                                <i className='uil uil-eye' />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      onClick={submitForm}
                      fullWidth
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: "rgb(70, 176, 74)",
                        color: "white",
                        fontWeight: "bold",
                        marginTop: 20,
                        marginBottom: 20,
                        padding: 15,
                        borderRadius: 4,
                        boxShadow: "0px 9px 18px 3px rgba(24,176,116,0.15)",
                      }}
                    >
                      Connexion
                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: -12,
                            marginLeft: -12,
                          }}
                        />
                      )}
                    </Button>
                  </Form>
                )}
              </Formik>
              <Typography
                onClick={handleClickOpen}
                variant='h2'
                style={{
                  color: "rgb(70, 176, 74)",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Problème d'identification ?
              </Typography>
              <Link
                to={ROUTE.REGISTER}
                style={{ textDecoration: "none", color: "rgb(70, 176, 74)" }}
              >
                <Typography
                  variant='h2'
                  style={{
                    color: "rgb(70, 176, 74)",
                    fontSize: 15,
                    marginTop: 15,
                    cursor: "pointer",
                  }}
                >
                  Vous n'avez pas encore de compte ? Créer un compte
                </Typography>
              </Link>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby='alert-dialog-slide-title'
                aria-describedby='alert-dialog-slide-description'
              >
                <DialogTitle id='alert-dialog-slide-title'>
                  {"Vous avez un problème d'authentification ?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id='alert-dialog-slide-description'>
                    Si vous n'arrivez pas à accéder à HomeDelivery, veuillez
                    nous contacter à{" "}
                    <a
                      href='mailto:io.estiam@gmail.com'
                      style={{
                        textDecoration: "none",
                        color: "rgb(70, 176, 74)",
                      }}
                    >
                      cette adresse email
                    </a>
                    <br />
                    Nous vous conseillons aussi de regarder{" "}
                    <a
                      href='https://homedelivery.gitbook.io/homedelivery/'
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        textDecoration: "none",
                        color: "rgb(70, 176, 74)",
                      }}
                    >
                      notre documentation
                    </a>{" "}
                    en cas de problème quelconque.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} style={{ color: "gray" }}>
                    Annuler
                  </Button>
                  <Button
                    onClick={handleClose}
                    style={{ color: "rgb(70, 176, 74)" }}
                  >
                    Accepter
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
