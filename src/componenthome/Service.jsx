import { Card , CardContent, Grid, Typography } from "@mui/material";
import {makeStyles} from "@material-ui/core"
import {ArrowCircleLeft , ArrowCircleRight} from '@mui/icons-material';
import React from "react";
import "./Service.css";


const useStyles = makeStyles({
    root: {
        padding: "0px 5px",
    }
})

const Service = () => {
    const classes = useStyles();

  return (
    <div className="service">
      <div className="container">
        <h2>Our Service</h2>
      </div>

      <div className="img-col">
        <Grid  container spacing={5}>

          <Grid className={classes.root} xs={2.4}>
            <Card >
              <CardContent>
                <Typography gutterBottom align="center" color="#450032" variant="h4">
                  Copyright Protection
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.root} xs={2.4}>
            <Card >
              <CardContent>
                <Typography gutterBottom align="center" color="#450032" variant="h4">
                  Youtube Monetization
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.root} xs={2.4}>
            <Card >
              <CardContent>
                <Typography gutterBottom align="center" color="#450032" variant="h4">
                  Digital Distribution
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.root} xs={2.4}>
            <Card >
              <CardContent>
                <Typography gutterBottom align="center" color="#450032" variant="h4">
                  Promotions
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid className={classes.root} xs={2.4}>
            <Card >
              <CardContent>
                <Typography gutterBottom align="center" color="#450032" variant="h4">
                  Social Media Management 
                      & 
                  Audience
                </Typography>
              </CardContent>
            </Card>
          </Grid>
         
        </Grid>
        <p>
            We maximize revenue and ensure <br/> our client's content is constantly <br/> 
            protected when their content is used <br/> without authorization.
        </p>
        <div className="icon-container">
           <div className="icon1">
               <ArrowCircleLeft fontSize="large" sx={{ fontSize: "18px" }} color="#fff"/>
           </div>

           <div className="icon2">
                <ArrowCircleRight fontSize="larger" color="#fff"/>
           </div>
        </div>
        
        
      </div>
     
    </div>
  );
};

export default Service;
