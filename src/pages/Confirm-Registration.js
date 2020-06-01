import React, { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { LoginContext } from "../contexts/LoginContext";
window.document.title = "HomeDelivery - Confirmation d'inscription";

export default (props) => {
  const { mailChecking, resendMail } = useContext(LoginContext);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [values, setValues] = useState({
    secretCode: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleResent = () => {
    const { email } = JSON.parse(localStorage.getItem("account_to_register"));
    resendMail({ email });
    setOpen(true);
  };
  const handleSubmit = () => {
    console.log("====== CONFIRM CODE ======");
    mailChecking(values);
  };
  const user_mail = JSON.parse(localStorage.getItem("account_to_register"))
    .email;
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
                draggable='false'
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
                Confirmation de votre inscription
              </Typography>
              <Typography color='textSecondary'>
                Un code de confirmation vous a été envoyé dans votre boîte de
                réception <b>{user_mail}</b>.
              </Typography>
              <TextField
                label='Code de confirmation'
                variant='outlined'
                fullWidth
                required
                placeholder='87d28fca48'
                value={values.secretCode} // value.age value.Fname value.Lname
                onChange={handleChange("secretCode")}
                style={{ marginTop: 25, marginBottom: 15 }}
              />
              <Typography
                onClick={handleResent}
                variant='h2'
                style={{
                  color: "rgb(70, 176, 74)",
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Code de confirmation non reçu ?
              </Typography>

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
                }}
              >
                Confirmer
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Alert onClose={handleClose} severity='success'>
                  Une erreur est survenue !
                </Alert>
              </Snackbar>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <pre>{JSON.stringify(values)}</pre>
    </div>
  );
};
