import React, { useState, useContext } from "react";
import { Grid, TextField, Typography, Box, Button } from "@material-ui/core";
import { LoginContext } from "../../contexts/LoginContext";
window.document.title = "HomeDelivery - Création de compte bénévole";

export default (props) => {
  const { handleHelperRegistration } = useContext(LoginContext);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    birth_date: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = () => {
    console.log("====== Registration HELPER ======");
    let acc_to_register = JSON.parse(
      localStorage.getItem("account_to_register")
    ); // recup acc-type
    acc_to_register = { ...acc_to_register, ...values }; // on ajoute le state + acctype
    delete acc_to_register.password_confirm;
    delete acc_to_register.showPassword;
    //send to back here ---
    // console.log(acc_to_register)
    handleHelperRegistration({ ...acc_to_register });
    delete acc_to_register.password;
    localStorage.setItem(
      "account_to_register",
      JSON.stringify(acc_to_register)
    );
    console.log("ls : -> ", acc_to_register);
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
                src='https://svgur.com/i/LhU.svg'
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
              <TextField
                label='Nom'
                variant='outlined'
                placeholder='PLATINI'
                fullWidth
                value={values.firstName}
                onChange={handleChange("firstName")}
                style={{ marginTop: 25, marginBottom: 15 }}
              />
              <TextField
                label='Prénom'
                variant='outlined'
                placeholder='Michel'
                fullWidth
                value={values.lastName}
                onChange={handleChange("lastName")}
                style={{ marginTop: 15, marginBottom: 15 }}
              />
              <TextField
                label='Adresse email'
                variant='outlined'
                placeholder='michel.platini@gmail.com'
                fullWidth
                value={values.email}
                onChange={handleChange("email")}
                style={{ marginTop: 15, marginBottom: 15 }}
              />
              <TextField
                label='Mot de passe'
                variant='outlined'
                placeholder='****************'
                type='password'
                fullWidth
                value={values.password}
                onChange={handleChange("password")}
                style={{ marginTop: 15, marginBottom: 15 }}
              />
              <TextField
                label='N° de téléphone'
                placeholder='060316579'
                variant='outlined'
                fullWidth
                value={values.phone}
                onChange={handleChange("phone")}
                style={{ marginTop: 15, marginBottom: 15 }}
              />
              <TextField
                label='Date de naissance'
                variant='outlined'
                format='dd/MM/yyyy'
                fullWidth
                type='date'
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ marginTop: 15, marginBottom: 15 }}
                value={values.birth_date}
                onChange={handleChange("birth_date")}
              />

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
