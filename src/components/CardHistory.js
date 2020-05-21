import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";
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
                Annonce de {feed.first_name} {feed.last_name}
              </Typography>
              <Typography
                varaiant='h6'
                component='h1'
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                <i className='uil uil-map-marker' /> {feed.email}
              </Typography>
              <Typography color='textSecondary'>{feed.email}</Typography>
            </Box>
            <Box>
              <i className='uil uil-arrow-right' style={{ fontSize: 25 }} />
            </Box>
          </Box>
        ))}
      </div>
    );
  }
  return (
    <Box>
      <p>Chargement en cours..</p>
    </Box>
  );
};
