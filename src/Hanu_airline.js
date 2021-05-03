import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
//COMPONENT IMPORT
import HomePage from './view/home/homepage';
//import UnAuthen
import UnAuthenRoute from './routes/viewer_route/unAuthen_route';
import ProtectedRoute from './routes/user_route/ProtectedRoute';

//Authentication
import SignIn from "./view/login/index";
import SignUp from './view/register/signup';
//cookies
import {getCookie} from './utils/fetchData/fetchData';
import  SearchForm from './components/SearchForm/SearchForm';
import Template from './view/template/template';
import OneWay from './view/OneWay/oneWay';
import RoadTrip from './view/RoadTrip/RoadTrip';
import MultiFlight1 from './view/MultiTrip/MultiFlight1';
import SeatBooking from "./view/seatBooking/SeatBooking";
import ChooseType from './view/ChooseType/ChooseType';
import  Profile from './view/Profile/profile';
import Profile1 from "./view/Profile/profile1";
import MyBook from './view/MyBook/myBook';
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
    const userId = getCookie("userId");
    if(userId){
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

      
      <Route exact path ='/seatbooking/:id'>
        <Template>
          <SeatBooking/>
        </Template>
      </Route>

      <Route exact path ='/oneway'>
        <Template>
          <OneWay/>
        </Template>
      </Route>

      <Route exact path ='/roadtrip'>
        <Template>
          <RoadTrip/>
        </Template>
      </Route>


      <UnAuthenRoute isLogin={isLogin} exact ={true} path ="/login" >
      <SignIn saveAuthentication = {this.saveAuthentication} setStateLogin = {this.setStateLogin}></SignIn>
      </UnAuthenRoute>

      <UnAuthenRoute exact ={true} path ='/signup'>
      <SignUp setStateLogin = {this.setStateLogin}/>
      </UnAuthenRoute>
      <Route exact = {true} path="/mybook">
          <Template>
            <MyBook/>
          </Template>
        </Route>

      <ProtectedRoute  isLogin ={isLogin} exact ={true}  path ='/profile'>
      <Template>
        <Profile/>
      </Template>
      </ProtectedRoute>

      <ProtectedRoute  isLogin ={isLogin} exact ={true}  path =''>
      <Template>/profile/edit
        <Profile1/>
      </Template>
      </ProtectedRoute>

       

      </Switch>
      </BrowserRouter>
    )
  }

}

export default (Hanu_Airline);
