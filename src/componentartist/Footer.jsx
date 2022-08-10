import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import Logo1 from "../image/Believe_Black.png";
import Logo2 from "../image/Mtech.webp";
import Logo3 from "../image/onmobile-logo.png";
import Logo4 from "../image/Vodacom.png";
import Logo5 from "../image/Airtel-Logo.png";
import Logo6 from "../image/Logo_ChannelO.png";
import Logo7 from "../image/eatv-logo.png";
import Logo9 from "../image/tigo.png";
import Logo10 from "../image/trace.png";
import Logo from "../image/sd2.png";
import {Facebook , Instagram , WhatsApp , YouTube , Twitter} from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import './Footer.css';
import { border } from '@mui/system';


const useStyles = makeStyles({

  Card: {
    width: "90%",
    display: "block",
    justifyContent: "space-evenly",
    marginTop: "20px",
    height: "7vw",
    transitionDuration: "0.3s",
    flexWrap: "wrap",
    marginLeft: "20px"
    
  },

  CardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})

const Footer = () => {

  const classes = useStyles()

  return (

    <div className='footer'>
         <div className='content'>
             <Grid container spacing={5}>
                 <Grid xs={2.4}>
                     <Card  className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo1} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo2} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo3} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo4} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo5} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo6} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>
                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo7} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo5} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo9} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>

                 <Grid xs={2.4}>
                     <Card className={classes.Card}>
                        <CardContent className={classes.CardContent}>
                            <img className='logo1' src={Logo10} alt=""/>
                        </CardContent>
                     </Card>
                 </Grid>
             </Grid>
             
             <div className='social'>
                 <div className='social-media'>
                   <img src={Logo} alt=""/>
                    <ul className='icon-list'>
                       <li><Facebook/></li>
                       <li><Instagram/></li>
                       <li><WhatsApp/></li>
                       <li><YouTube/></li>
                       <li><Twitter/></li>
                    </ul>
                 </div>

                 <div className='map'>
                 <iframe className='masaki-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.706007610579!2d39.28065065!3d-6.7483163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d084147b0e5%3A0xa2c90d938443433e!2sMasaki%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1659702997481!5m2!1sen!2stz" width="600" height="450" style={{border: "0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
                 <p>Copyright @SlideDigital 2022 All right reserved</p>
             </div>             
           
         </div>
    </div>
  )

}

export default Footer;