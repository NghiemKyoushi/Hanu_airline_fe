import React from "react";

import {AppBar, Button, Toolbar,Typography } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';
import { Link } from "react-router-dom";
import {getCookie, deleteCookie} from '../../utils/fetchData/fetchData';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogin: false
        }
    }
    componentDidMount(){
       const jwtToken = getCookie("jwtToken");
       if(jwtToken){
           this.setState({
               isLogin: true
           })
       }
    }
    onClick(){
        deleteCookie("jwtToken")
        window.location.reload()
    }
    render(){
        const {isLogin} = this.state;
        // const classes = useStyles();
        return(

               <AppBar position="static" style={{ background: '#212121' }} >
               {
                   (isLogin) ?
                   <Toolbar >
                   <Typography style={{flexGrow: 1}} > <Link to = "/">HANU<FlightIcon/>AIRLINE</Link> </Typography>
                   
                   <Button variant="contained" style={{ background: '#ffff' }} onClick={this.onClick}><ExitToAppIcon/></Button>
                   </Toolbar>
                    :
                    <Toolbar >
                   <Typography style={{flexGrow: 1}} >  <Link style={{textDecoration: "none", color: "#ffff"}} to = "/">HANU<FlightIcon/>AIRLINE</Link></Typography>
                   
                   <Link style={{textDecoration: "none"}} to ='/login'><Button variant="contained" style={{ background: '#ffff' }}  >Login</Button></Link> 
                   <Link style={{textDecoration: "none"}} to ='/signup'><Button variant="contained" style={{marginLeft: 5,background: '#ffff'}}>Register</Button></Link> 
                   </Toolbar>

               }
                   
               </AppBar>
        )
    }
}
export default Header;