import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { Container, Typography, Box, Divider, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import ROUTE from "../Routes";
import Lottie from "react-lottie";
import Footer from "../components/Footer";
import Map from "../components/Map";
import Questions from "../components/Questions";
window.document.title = "HomeDelivery - Accueil";

const shampoo = require("../data/shampoo.json");
const handShake = require("../data/handShake.json");
const mask = require("../data/mask.json");
const soap = require("../data/soap.json");
const shampooOptions = {
  loop: true,
  autoplay: true,
  animationData: shampoo,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const handShakeOptions = {
  loop: true,
  autoplay: true,
  animationData: handShake,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const maskOptions = {
  loop: true,
  autoplay: true,
  animationData: mask,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const soapOptions = {
  loop: true,
  autoplay: true,
  animationData: soap,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const FirstImage = require("../data/1.jpeg");
const SeconImage = require("../data/2.jpeg");

export default (props) => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Images Vars
    const FirstImage = images.firstElementChild; // or children[0]
    const SeconImage = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Images Animation
    tl.from(FirstImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        FirstImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(SeconImage, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        SeconImage.firstElementChild,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div>
      <Container maxWidth='lg'>
        <Navbar />
        <Box className='hero' ref={(el) => (app = el)}>
          <Box className='container'>
            <Box className='hero-inner'>
              <Box className='hero-content'>
                <Box
                  className='hero-content-inner'
                  ref={(el) => (content = el)}
                >
                  <h1>
                    <Box className='hero-content-line'>
                      <Box className='hero-content-line-inner'>
                        La plateforme qui met en relation
                      </Box>
                    </Box>
                    <Box className='hero-content-line'>
                      <Box className='hero-content-line-inner'>
                        en relation les bonnes
                      </Box>
                    </Box>
                    <Box className='hero-content-line'>
                      <Box className='hero-content-line-inner'>personnes.</Box>
                    </Box>
                  </h1>
                  <p>
                    Nous mettons en relation des personnes prêtes à aider leurs
                    prochains qui en ont si besoin en ses temps de guerre
                    sanitaire.
                  </p>
                  <Box className='btn-row'>
                    <button className='explore-button'>
                      Découvrir
                      <Box className='arrow-icon'>
                        <i
                          className='uil uil-arrow-right row'
                          style={{ color: "white", fontSize: 18 }}
                        />
                      </Box>
                    </button>
                  </Box>
                </Box>
              </Box>
              <Box className='hero-images'>
                <Box ref={(el) => (images = el)} className='hero-images-inner'>
                  <Box className='hero-image girl'>
                    <img src={FirstImage} alt='girl' />
                  </Box>
                  <Box className='hero-image boy'>
                    <img src={SeconImage} alt='boy' />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <section id='features' className='features'>
        <Box className='container'>
          <Box className='row'>
            <Box className='features-inner'>
              <Box className='features-content'>
                <h3>Respect des consignes sanitaires</h3>
                <p>
                  Nous mettons un poing d’honneur à bien respecter les règles
                  sanitaires mise en oeuvre dans le cadre de l’épidémie
                  sanitaire CoViD-19.
                </p>
                <Box className='btn-row'>
                  <a>Connaitre les gestes barrieres</a>
                </Box>
              </Box>
              <Box className='features-list'>
                <ul>
                  <li>
                    <div>
                      <Lottie
                        resizeMode='cover'
                        options={handShakeOptions}
                        height={80}
                        width={80}
                      />
                    </div>
                    <h5>Pas de prise de contact</h5>
                    <p>
                      Pas de contacte à plus de 1m de distance entre le bénévole
                      est le client, il déposera la commande sur le palier de
                      votre apparement/maison.
                    </p>
                  </li>
                  <li>
                    <Lottie options={maskOptions} height={80} width={80} />
                    <h5>Port du masque</h5>
                    <p>
                      Les bénévoles doivent absolument porter un masque de
                      protection pour éviter le plus possible le risque de
                      propagation du virus.
                    </p>
                  </li>
                  <li>
                    <Lottie options={soapOptions} height={80} width={80} />
                    <h5>Désinfection</h5>
                    <p>
                      Les bénévoles doivent absolument porter un masque de
                      protection pour éviter le plus possible le risque de
                      propagation du virus.
                    </p>
                  </li>
                  <li>
                    <Lottie options={shampooOptions} height={80} width={80} />
                    <h5>Désinfection</h5>
                    <p>
                      Désinfection systématique entre à la moindre interaction
                      physique avec un objet/personne (je sais pas ici non plus)
                    </p>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>

      <Box style={{ marginTop: 15, textAlign: "center" }}>
        <Container maxWidth='lg'>
          <Typography
            variant='h1'
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 45,
              marginBottom: 15,
            }}
          >
            L’activité de nos membres
          </Typography>
          <Typography>
            Vous voulez rejoindre notre communauté d’entraide ?<br /> N’hésitez
            plus rejoignez
            <b> HomeDelivery</b>, aucun frais <br />
            ne va vous être demandé.
          </Typography>
          <Link to={ROUTE.REGISTER} style={{ textDecoration: "none" }}>
            <Typography
              style={{
                color: "rgb(70, 176, 74)",
                marginTop: 15,
              }}
            >
              Inscription gratuite
            </Typography>
          </Link>
        </Container>
      </Box>
      <Box
        style={{
          height: "70vh",
          backgroundColor: "rgb(70, 176, 74)",
          marginTop: 50,
        }}
      >
        {/* <Map /> */}
      </Box>
      <Box style={{ marginTop: 80, height: "70vh" }} id='CommentCaMarche'>
        <Container maxWidth='lg'>
          <Typography
            variant='h1'
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 35,
              marginBottom: 35,
              textAlign: "center",
            }}
          >
            Questions récurrentes
          </Typography>
          <Questions />
        </Container>
      </Box>
      <Box style={{ backgroundColor: "#D9EFE7" }}>
        <Footer />
      </Box>
    </div>
  );
};
