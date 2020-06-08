import React from "react";
import { Box, Typography, Chip } from "@material-ui/core";

function CardAnnonceDashboard(props) {
  return (
    <Box
      display='flex'
      alignItems='center'
      className='Cards'
      style={{ width: "100%", cursor: "pointer" }}
    >
      <Box>
        <img
          src='https://i.imgur.com/AoDLCID.png'
          alt='queue_waiting'
          style={{ width: 125, height: 125 }}
        />
      </Box>
      <Box style={{ marginLeft: 10 }} flexGrow={1}>
        <Typography varaiant='h6' component='h1' style={{ fontWeight: "bold" }}>
          Annonce postée le{" "}
          {new Date(props.created_at).toLocaleDateString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
          <Chip
            label={props.status === "active" ? "En cours" : "Terminé"}
            variant='outlined'
            style={{
              backgroundColor:
                props.status === "active" ? "#ffe299" : "#46a34a",
              borderColor: "#f7f7f7",
              borderWidth: 1,
              color: props.status === "active" ? "#d69200" : "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          />
        </Typography>
        <Typography
          varaiant='h6'
          component='h1'
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <i className='uil uil-shopping-cart' />
          {props.courses.map((course) => course + "\t")}
        </Typography>
        <Box display='flex'>
          <Typography color='textSecondary'>
            <i className='uil uil-file-plus-alt' />
            Annonce n°{props.num}
          </Typography>
          <Typography color='textSecondary' style={{ marginLeft: 15 }}>
            <i className='uil uil-transaction' /> {props.payment_method}
          </Typography>
          <Typography color='textSecondary' style={{ marginLeft: 15 }}>
            <i className='uil uil-euro-circle' />
            {props.max_price + " €"}
          </Typography>
        </Box>
      </Box>
      <Box>
        <i className='uil uil-arrow-right' style={{ fontSize: 25 }} />
      </Box>
    </Box>
  );
}

export default CardAnnonceDashboard;
