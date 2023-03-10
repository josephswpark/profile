import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';
import SneakerGif from '../../server/public/sneaker-video.gif';
import BingeGif from '../../server/public/binge-gif.gif';
import 'aos/dist/aos.css';

export default class Projects extends React.Component {
  render() {
    return (
      <>
        <Container component="main" sx={{ p: 0 }} maxWidth='lg' >
          <Toolbar/>
          <h1 style={{ textAlign: 'center', marginBottom: '3rem' }} data-aos='fade-down'>
            Projects
          </h1>
          <Grid container columns={{ xs: 6, md: 12 }} direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs style={{ maxWidth: 500 }} data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <center> <a href='http://sneakers.josephswpark.com/' target='_blank' rel="noreferrer">
                <img src={SneakerGif} className='sneaker'/>
              </a></center>
            </Grid>
            <div style={{ display: 'flex' }} data-aos='fade-left' data-aos-easing="linear"
              data-aos-duration="500" >
              <Grid item xs={12} style={{ maxWidth: 500, marginLeft: '1rem' }} >
                <div style={{ display: 'flex', lineHeight: '0.5rem', marginTop: '0.5rem' }}>
                  <h3>Sneaker World</h3>
                  <a href='http://sneakers.josephswpark.com/' target='_blank' rel="noreferrer">
                    <LaunchIcon className='launch-icon' fontSize='small'/>
                  </a>
                </div>
                <p style={{ marginTop: 0 }}>
                  A web-based eCommerce platform built using React.js, JavaScript, HTML, and CSS, designed for purchasing sneakers
                </p>
                <ul className='me'>
                  <li>
                    <p>Implemented Stripe API for secure and efficient payment processing</p>
                  </li>
                  <li><p>Incorporated Material UI components to create aesthetical front-end design on all device types, using UX
                    best practices</p></li>
                  <li><p>Utilized PostgreSQL for database management and implemented back-end and front-end functionality.</p></li>
                  <li><p>Built user authentication and authorization features using JSON Web Tokens (JWT)</p></li>
                  <li><p>Implemented CRUD (Create, Read, Update, Delete) functionalities for product management and order
                    processing</p></li>
                </ul>
              </Grid>
            </div>
          </Grid>
        </Container>
        <Container component="main" sx={{ p: 0, mt: '1rem' }} maxWidth='lg' >
          <Toolbar />
          <Grid container columns={{ xs: 6, md: 12 }} direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs style={{ maxWidth: 500 }} data-aos="fade-bottom"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <center><a href='https://josephswpark.github.io/binge/' target='_blank' rel="noreferrer">
                <img src={BingeGif} className='binge' />
              </a></center>
            </Grid>
            <div style={{ display: 'flex' }} data-aos='fade-left'
              data-aos-duration="1000">
              <Grid item xs={12} style={{ maxWidth: 500, marginLeft: '1rem' }}>
                <div style={{ display: 'flex', lineHeight: '0.5rem', marginTop: '0.5rem' }}>
                  <h3>Binge</h3>
                  <a href='https://josephswpark.github.io/binge/' target='_blank' rel="noreferrer">
                    <LaunchIcon className='launch-icon' fontSize='small' />
                  </a>
                </div>
                <p style={{ marginTop: 0 }}>
                  A web platform built using JavaScript, HTML, and CSS, that allows you to search and save your favorite TV shows through interacting with an API.                  </p>
                <ul className='me'>
                  <li>
                    <p>Asynchronously retrieved data from public API (WATCHMODE) using jQuery&amp;s Ajax method, sending data from successful responses to populate a summary of each TV show searched.</p>
                  </li>
                  <li><p>
                    Designed wireframes using Figma to be used as guidance ater each component have been coded.</p></li>
                </ul>
              </Grid>
            </div>
          </Grid>
        </Container>
      </>
    );
  }
}
