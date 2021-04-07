import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
//COMPONENT IMPORT
import HomePage from './view/home/homepage';
//import UnAuthen
import UnAuthenRoute from './routes/viewer_route/unAuthen_route';
//Authentication
import SignIn from "./view/login/index";
import SignUp from './view/register/signup';
//cookies
import {getCookie} from './utils/fetchData/fetchData';
class Hanu_Airline extends React.Component{
  constructor(){
    super();

    this.state={
      Authentication: "",
      user: {},
      isLogin: false
    }
    this.saveAuthentication = this.saveAuthentication.bind(this);
    this.setStateLogin = this.setStateLogin.bind(this);
  }

  
//authentication for user
setStateLogin(data, callback_function) {
  this.setState(
    {
      isLogin: data,
    },
    callback_function
  );
}
   //save data token and Bearer
   saveAuthentication(Authentication, user_inform) {
    this.setState({
      Authentication: Authentication,
      user: user_inform,
    });
  }
  componentDidMount(){
    const jwtToken = getCookie("jwtToken");
    if(jwtToken){
      console.log("login succcccccc")
      this.setState({
        isLogin: true
      })
    }else{
      console.log("login false")
      this.setState({
        isLogin: false
      })
    }
  }

  render(){
    const {isLogin} = this.state;
    return (
      <BrowserRouter>

      <Switch>
      <Route exact path ='/' component={HomePage}/>

      <UnAuthenRoute isLogin={isLogin} exact ={true} path ='/login'>
      <SignIn saveAuthentication = {this.saveAuthentication} setStateLogin = {this.setStateLogin}/>
      </UnAuthenRoute>

      <UnAuthenRoute exact ={true} path ='/signup'>
      <SignUp />
      </UnAuthenRoute>
      </Switch>

      </BrowserRouter>
    )
  }

}

export default (Hanu_Airline);
