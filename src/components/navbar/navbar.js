import React from "react";
import './navbar.css';
import {AppBar, Button, makeStyles, Toolbar,Typography } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';
class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
               <div className = "hex-navbar">
                   <Toolbar style={{marginTop: "-5px"}}>
                   <Button className = "navbar">Home</Button>
                   <Button className = "navbar">Promotion</Button>
                   <Button className = "navbar">Flight</Button>
                   <Button className = "navbar">Ticket</Button>
                   <Button className = "navbar">Contact</Button>
                   </Toolbar>
               </div>
        )
    }
}

export default NavBar;