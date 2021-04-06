import React from "react";

import {AppBar, Button, makeStyles, Toolbar,Typography } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';

class Footer extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
               <AppBar position="static" style={{ background: '#212121' }} >
                   <Toolbar style={{ height: '136px' , display: "flex", justifyContent: "center", alignItems: "center" }}>
                   <Typography> @HANU<FlightIcon/>AIRLINE</Typography>
                   {/* <Typography align = "center" display = "block"  > @HANU<FlightIcon/>ARLINE</Typography> */}


                  
                   </Toolbar>
               </AppBar>
        )
    }
}
export default Footer;