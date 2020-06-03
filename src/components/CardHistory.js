import React, { useState, useEffect } from "react";
import { Box, Typography, Chip } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";
import CardHistoryLoading from "./CardHistoryLoading";
moment.locale("fr");

const getResponse = async () => {
  try {
    const response = await axios.get("https://reqres.in/api/users");
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
        {data.data.map((feed, i) => (
          <Box
            display='flex'
            alignItems='center'
            className=' successCard'
            style={{ width: "100%", cursor: "inherit" }}
            key={i}
          >
            <Box>
              <img
                src={feed.avatar}
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
                Annonce de {feed.first_name}
                <Chip
                  label='Terminé'
                  variant='outlined'
                  style={{
                    backgroundColor: "rgb(70, 176, 74) ",
                    borderColor: "rgb(70, 176, 74) ",
                    borderWidth: 1,
                    color: "white",
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
