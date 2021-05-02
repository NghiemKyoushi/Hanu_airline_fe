import React from "react";

import {AppBar, Button, Toolbar,Typography } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';
import { Link } from "react-router-dom";
import {getCookie, deleteCookie} from '../../utils/fetchData/fetchData';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
class LoggedInHeader extends React.Component{
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
                   <Typography style={{flexGrow: 1}} >  HANU<FlightIcon/>AIRLINE</Typography>
                   
                   <Button variant="contained" style={{ background: '#ffff' }} onClick={this.onClick}><ExitToAppIcon/></Button>
                   </Toolbar>
                    :
                    <Toolbar >
                   <Typography style={{flexGrow: 1}} >  HANU<FlightIcon/>AIRLINE</Typography>
                   
                   <Link style={{textDecoration: "none"}} to ='/login'><Button variant="contained" style={{ background: '#ffff' }}  >My Book</Button></Link> 
                   <Link style={{textDecoration: "none"}} to ='/setting'><Button variant="contained" style={{marginLeft: 5, background: '#ffff'}}>Setting</Button></Link> 
                   <Link style={{textDecoration: "none"}} to ='/home'><Button variant="contained" style={{ marginLeft: 5, background: '#ffff' }}  >Log out</Button></Link> 
                   </Toolbar>

               }
                   
               </AppBar>
               
        )
    }
}
export default LoggedInHeader;