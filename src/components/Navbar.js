import React, { useState } from "react";

import { Box, Typography, Menu, MenuItem, IconButton } from "@material-ui/core";

import { Link } from "react-router-dom";

import ROUTE from "../Routes";

export default (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box display='flex' alignItems='center'>
        <Box
          p={2}
          flexGrow={1}
          display='flex'
          alignItems='center'
          style={{ marginLeft: 10 }}
        >
          <img
            src='https://svgur.com/i/LhH.svg'
            style={{
              height: 35,
              marginRight: 15,
              userSelect: "none",
              userDrag: "none",
            }}
            alt='logo'
          />
          <Link
            to={ROUTE.HOME}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              variant='h1'
              noWrap
              style={{ color: "black", fontWeight: "bold", fontSize: 23 }}
            >
              HomeDelivery
            </Typography>
          </Link>
        </Box>
        <Box
          display={{
            xs: "none",
            md: "block",
            lg: "block",
            xl: "block",
            sm: "none",
          }}
          p={2}
          style={{ marginRight: 10, display: "flex" }}
          alignItems='center'
        >
          <IconButton style={{ color: "black" }} onClick={handleMenu}>
            <i className='uil uil-bars' />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <Link
              to={ROUTE.REGISTER}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>
                <i className='uil uil-user-plus' />
                Créer un compte
              </MenuItem>
            </Link>
            <Link
              to={ROUTE.LOGIN}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>
                <i className='uil uil-sign-in-alt' /> Se connecter
              </MenuItem>
            </Link>
            <Link
              to={ROUTE.DASHBOARD}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>
                <i className='uil uil-create-dashboard' /> Dashboard
              </MenuItem>
            </Link>
            <Link
              to={ROUTE.DASHBOARD}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>
                <i className='uil uil-sign-out-alt' />
                Se déconnecter
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      </Box>
    </div>
  );
};
