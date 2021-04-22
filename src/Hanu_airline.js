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
import  SearchForm from './components/SearchForm/SearchForm';
import Template from './view/template/template';
import OneWay from './view/OneWay/oneWay';
import MultiFlight1 from './view/MultiTrip/MultiFlight1';

class Hanu_Airline extends React.Component{
  constructor(){
    super();

    this.state={
      Authentication: "",
      user: {},
      isLogin: false,
      //data search;
      dataSearch:"",
      //flight one way
      flightOneWay:""
    }
    this.saveAuthentication = this.saveAuthentication.bind(this);
    this.setStateLogin = this.setStateLogin.bind(this);
    // receive data from search one way
    this.oneWayFlight = this.oneWayFlight.bind(this);
    this.dataSearch = this.dataSearch.bind(this);

  }
  //oneWay flight 
  oneWayFlight(flight){
    this.setState({
      flightOneWay: flight
    })
  }
  //receive data search
   dataSearch(data){
     this.setState({
       dataSearch: data
     })
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
    const {isLogin, flightOneWay, dataSearch} = this.state;

    return (
      <BrowserRouter>
      <Switch>
      <Route exact path ='/'>
        <HomePage oneWayFlight = {this.oneWayFlight} dataSearch= {this.dataSearch}/>
      </Route>
      <Route exact path ='/multiCity/:id'>
        <Template>
          <MultiFlight1 flightOneWay = {flightOneWay} dataSearch = {dataSearch} />
        </Template>
      </Route>
      <UnAuthenRoute isLogin={isLogin} exact ={true} path ='/login' >
      <SignIn saveAuthentication = {this.saveAuthentication} setStateLogin = {this.setStateLogin}/>
      </UnAuthenRoute>

      <UnAuthenRoute exact ={true} path ='/signup'>
      <SignUp/>
      </UnAuthenRoute>
      </Switch>
      </BrowserRouter>
    )
  }

}

export default (Hanu_Airline);
