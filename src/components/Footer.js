import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { Link as AnimationScroll } from "react-scroll";
import { Link } from "react-router-dom";
import ROUTES from "../Routes";

export default (props) => {
  return (
    <Container>
      <Box display='flex' alignItems='center' style={{ padding: 30 }}>
        <Box flexGrow={1} display='flex' alignItems='center'>
          <img
            src='https://svgur.com/i/LhH.svg'
            draggable='false'
            style={{
              height: 35,
              marginRight: 15,
              userSelect: "none",
              userDrag: "none",
            }}
            alt='logo'
          />
          <Typography
            variant='h1'
            style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
          >
            HomeDelivery
          </Typography>
        </Box>
      </Box>
      <Box container display='flex' style={{ padding: 30 }}>
        <Box flexGrow={1} alignItems='center'>
          <Typography
            variant='h1'
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Menu
          </Typography>
          <AnimationScroll
            to='accueil'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-550}
            duration={1500}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              Accueil
            </Typography>
          </AnimationScroll>
          <AnimationScroll
            to='lesaviezvous'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-385}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              Le saviez-vous ?
            </Typography>
          </AnimationScroll>
          <AnimationScroll
            to='consignes_sanitaires'
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              Respect des consignes sanitaires
            </Typography>
          </AnimationScroll>
          <Link
            to={ROUTES.REGISTER}
            style={{ color: "black", textDecoration: "none" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              Créer un compte
            </Typography>
          </Link>
          <Link
            to={ROUTES.LOGIN}
            style={{ color: "black", textDecoration: "none" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              Se connecter
            </Typography>
          </Link>
          <a
            href='https://github.com/LasCC/HomeDelivery-React-Native/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "black", textDecoration: "none" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ cursor: "pointer" }}
            >
              Application mobile
            </Typography>
          </a>
        </Box>
        <Box flexGrow={1}>
          <Typography variant='h1' style={{ fontSize: 20, fontWeight: "bold" }}>
            Nous suivre
          </Typography>
          <a
            href='https://facebook.com/#'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "black", textDecoration: "none" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              <i className='uil uil-facebook-f' />
              Facebook
            </Typography>
          </a>
          <a
            href='https://twitter.com/#'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "black", textDecoration: "none" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              <i className='uil uil-twitter-alt' />
              Twitter
            </Typography>
          </a>
          <a
            href='https://instagram.com/#'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "black", textDecoration: "none" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              <i className='uil uil-instagram' />
              Instagram
            </Typography>
          </a>
          <a
            href='https://github.com/LasCC/HomeDelivery'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "black", textDecoration: "none" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              <i className='uil uil-github' /> Github
            </Typography>
          </a>
        </Box>
        <Box alignItems='center'>
          <Typography variant='h1' style={{ fontSize: 20, fontWeight: "bold" }}>
            Nous contacter
          </Typography>
          <a
            href='mailto: io.estiam@gmail.com'
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              <i className='uil uil-fast-mail' /> io.estiam@gmail.com
            </Typography>
          </a>
          <a
            href='tel: +33 6 44 64 90 21'
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography
              className='HoverTextColor'
              style={{ marginTop: 15, marginBottom: 15, cursor: "pointer" }}
            >
              <i className='uil uil-calling' />
              +33 6 44 64 90 21
            </Typography>
          </a>
        </Box>
      </Box>
    </Container>
  );
};
