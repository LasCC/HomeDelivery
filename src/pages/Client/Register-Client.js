import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import axios from "axios";
import { LoginContext } from "../../contexts/LoginContext";
window.document.title = "HomeDelivery - Création de compte classique";

export default (props) => {
  const { handleClientRegistration } = useContext(LoginContext)

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const getResponse = async () => {
    try {
      const response = await axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=${values.address}+${values.zipcode}+${values.city}`
      );
      // console.log(response.data);
      // console.log(
      //   `Localisation de l'utilisateur`,
      //   response.data.features[0].geometry.coordinates[1],
      //   response.data.features[0].geometry.coordinates[0]
      // );
      return { latitude: response.data.features[0].geometry.coordinates[1].toString(), longitude: response.data.features[0].geometry.coordinates[0].toString() };
    } catch (error) {
      console.log(error.message);
    }
  };
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    password: "",
    password_confirm: "",
    email: "",
    address: "",
    c_address: "",
    city: "",
    zipcode: "",
    phone: "",
    birth_date: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleSubmit = async () => {
    console.log("====== Registration ======");
    let geoloc = await getResponse(); // coordonné geolocalisé
    let acc_to_register = JSON.parse(localStorage.getItem("account_to_register")); // recup acc-type 
    acc_to_register = { ...acc_to_register, ...values, ...geoloc }; // on ajoute le state et geoloc
    localStorage.removeItem("acc_to_register")
    delete acc_to_register.password_confirm
    delete acc_to_register.showPassword
    //send to back here---
    // console.log(acc_to_register)
    handleClientRegistration({ ...acc_to_register })
    delete acc_to_register.password
    localStorage.setItem('account_to_register', JSON.stringify(acc_to_register))
    console.log("ls : -> ", acc_to_register)

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
              display='flex'
              alignItems='center'
              style={{
                padding: 25,
              }}
            >
              <img
                src='http://svgur.com/i/Jqv.svg'
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
                style={{ fontWeight: "bolder", fontSize: 55, marginBottom: 25 }}
              >
                Inscription
              </Typography>
              <Typography color='textSecondary'>
                L’inscription est gratuite et aucun frais ne sera ajouté.
              </Typography>
              <Box display='flex'>
                <TextField
                  label='Nom'
                  variant='outlined'
                  placeholder='PLATINI'
                  fullWidth
                  type='text'
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  style={{ marginTop: 25, marginBottom: 15, marginRight: 15 }}
                />
                <TextField
                  label='Prénom'
                  variant='outlined'
                  placeholder='Michel'
                  fullWidth
                  type='text'
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  style={{ marginTop: 25, marginBottom: 15 }}
                />
              </Box>
              <Box display='flex'>
                <TextField
                  label='Mot de passe'
                  variant='outlined'
                  placeholder='*****************'
                  fullWidth
                  value={values.password}
                  onChange={handleChange("password")}
                  style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
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
                <TextField
                  label='Confirmation'
                  variant='outlined'
                  placeholder='*****************'
                  type={values.showPassword ? "text" : "password"}
                  fullWidth
                  value={values.password_confirm}
                  onChange={handleChange("password_confirm")}
                  style={{ marginTop: 15, marginBottom: 15 }}
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
              </Box>
              <Box display='flex'>
                <TextField
                  label='Adresse mail'
                  variant='outlined'
                  placeholder='michel.platini@gmail.com'
                  type='email'
                  fullWidth
                  value={values.email}
                  onChange={handleChange("email")}
                  style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
                />
                <TextField
                  label='Adresse'
                  variant='outlined'
                  placeholder='12 rue des fleures'
                  fullWidth
                  value={values.address}
                  onChange={handleChange("address")}
                  style={{ marginTop: 15, marginBottom: 15 }}
                />
              </Box>
              <Box display='flex'>
                <TextField
                  label='Complément adresse'
                  variant='outlined'
                  placeholder='Batiment C, porte 313'
                  fullWidth
                  value={values.c_address}
                  onChange={handleChange("c_address")}
                  style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
                />
                <TextField
                  label='Ville'
                  variant='outlined'
                  placeholder='Paris'
                  fullWidth
                  value={values.city}
                  onChange={handleChange("city")}
                  style={{ marginTop: 15, marginBottom: 15 }}
                />
              </Box>
              <TextField
                label='Date de naissance'
                variant='outlined'
                format='dd/MM/yyyy'
                fullWidth
                type='date'
                helperText={"Veuillez renseigner une date valide : dd/MM/yyyy"}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ marginTop: 15, marginBottom: 15 }}
                value={values.birth_date}
                onChange={handleChange("birth_date")}
              />
              <Box display='flex'>
                <TextField
                  label='Code postale'
                  variant='outlined'
                  placeholder='75001'
                  fullWidth
                  value={values.zipcode}
                  onChange={handleChange("zipcode")}
                  style={{ marginTop: 15, marginBottom: 15, marginRight: 15 }}
                />
                <TextField
                  label='N° de téléphone'
                  variant='outlined'
                  placeholder='060316579'
                  fullWidth
                  type='tel'
                  value={values.phone}
                  onChange={handleChange("phone")}
                  style={{ marginTop: 15, marginBottom: 15 }}
                />
              </Box>
              <Button
                onClick={handleSubmit}
                fullWidth
                style={{
                  backgroundColor: "rgb(70, 176, 74)",
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 15,
                  padding: 15,
                  borderRadius: 4,
                  boxShadow: "0px 9px 18px 3px rgba(24,176,116,0.15)",
                }}
              >
                Continuer <i className='uil uil-arrow-right' />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </div>
  );
};
