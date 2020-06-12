import React, { useState, useEffect } from "react";
import { Box, Typography, Chip } from "@material-ui/core";
import moment from "moment";
import "moment/locale/fr";
import CardHistoryLoading from "./CardHistoryLoading";
import backapi from "../api/backapi";
moment.locale("fr");

const getResponse = async () => {
  try {
    const response = await backapi.get("/annonce/fetch");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default (props) => {
  const [data, setdata] = useState(null);
  const [isReady, setisready] = useState(false);

  useEffect(() => {
    getResponse()
      .then((data) => setdata(data))
      .then(() => setisready(true));
  }, []);
  if (isReady && data) {
    return (
      <div>
        {data.annonces.map((feed, i) => (
          <Box
            display='flex'
            alignItems='center'
            className=' successCard'
            style={{ width: "100%", cursor: "inherit" }}
            key={i}
          >
            <Box>
              <img
                src='https://i.imgur.com/x0SNZjM.png'
                alt='imageHistorique'
                style={{
                  height: 125,
                  width: 125,
                  borderRadius: 10,
                  objectFit: "cover",
                }}
              />
            </Box>
            <Box style={{ marginLeft: 10 }} flexGrow={1}>
              <Typography
                varaiant='h6'
                component='h1'
                style={{ fontWeight: "bold" }}
              >
                Annonce du departement : {feed.dept}
                <Chip
                  label='Terminé'
                  variant='outlined'
                  style={{
                    backgroundColor: "#d9efe7 ",
                    borderColor: "#d9efe7 ",
                    borderWidth: 1,
                    color: "#18b074",
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
                <i className='uil uil-ticket' />
                Liste de courses
              </Typography>
              <Box display='flex'>
                <Typography color='textSecondary'>
                  <i className='uil uil-hourglass' />
                  Date
                </Typography>
                <Typography color='textSecondary' style={{ marginLeft: 15 }}>
                  <i className='uil uil-transaction' /> Mode de paiement
                </Typography>
                <Typography color='textSecondary' style={{ marginLeft: 15 }}>
                  <i className='uil uil-euro-circle' />
                  Prix
                </Typography>
                <Typography color='textSecondary' style={{ marginLeft: 15 }}>
                  <i className='uil uil-user-check' />
                  HandleBy
                </Typography>
              </Box>
            </Box>
            <Box>
              <i className='uil uil-arrow-right' style={{ fontSize: 25 }} />
            </Box>
          </Box>
        ))}
      </div>
    );
  }
  return <CardHistoryLoading />;
};
