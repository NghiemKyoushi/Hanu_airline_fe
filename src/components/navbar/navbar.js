import React from "react";
import './navbar.css';
import {Link} from 'react-scroll'
import {AppBar, Button, makeStyles, Toolbar,Typography } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';
class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
   
    render(){
        return(
            <div className = "NavbarForm">
               <div className = "hex-navbar">
                   <Toolbar style={{marginTop: "-5px"}}>
                   <Link activeClass="active" to="home" spy={true} smooth={true} > <Button className = "navbar" >Home </Button></Link>
                   <Button className = "navbar"> <Link spy={true} smooth={true} to ="promotion">Promotion</Link></Button>
                   <Link spy={true} smooth={true} to ="flight"><Button className = "navbar">Flight</Button></Link>
                   <Link spy={true} smooth={true} to ="ticket"><Button className = "navbar">Ticket</Button></Link>
                   <Button className = "navbar">Contact</Button>
                   </Toolbar>
               </div>
               </div>
        )
    }
}

export default NavBar;