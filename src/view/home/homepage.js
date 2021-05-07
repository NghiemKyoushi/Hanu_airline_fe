import React from "react";
import { Button, Grid } from "@material-ui/core";
import './homepage.css';
import { withRouter } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import SearchForm from '../../components/SearchForm/SearchForm';
import axios from "axios";
import FlightForm from '../../components/flightForm/flightForm';
import PromotionForm from '../../components/propotionForm/promotionForm';
import TicketForm from '../../components/ticketForm/ticketForm';
import OneWay from '../../view/OneWay/oneWay';
import RoadTrip from '../../view/RoadTrip/RoadTrip';

import  {setCookie, deleteCookie, getCookie} from '../../utils/fetchData/fetchData';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFlight: "",
      resultSearchOne:"",
      dataSearch: "",
      //reault roadTrip
      departure_Time: "",
      arrival_Time: "",
      localArray: [],
      flightSale: []
    }
    this.setDataSearchOneWay = this.setDataSearchOneWay.bind(this);
    // this.formatDate = this.formatDate.bind(this);
    this.setDataSearchRoadTrip = this.setDataSearchRoadTrip.bind(this);
  }

  async setDataSearchRoadTrip(d){

    // this.setState({
    //   dataSearch: d
    // })
    this.props.dataSearch(d);


    console.log("data inti", d);
    const arrivalTime = d.arrivalTime;
    const departureTime = d.departureTime;
    const data1 = d;
    data1.arrivalTime = departureTime;
    data1.departureTime = departureTime;
    // console.log("data roadtrip", data1)

    const arrDepartureTime = [];
    const apiSearchOne= "http://hanuairline.azurewebsites.net/flight/search-one";
    try{
      const searchFlight = await axios.post(apiSearchOne,data1);
      this.setState({
        departure_Time: searchFlight.data
      })
      searchFlight.data.map( flight => arrDepartureTime.push(flight.id));


      setCookie("departureTime", arrDepartureTime,100);


    }catch(e){
      alert("false ff")
    }

    const data2 = d;
    data2.arrivalTime = arrivalTime;
    data2.departureTime = arrivalTime;
    const departureAirportOrCity =  data2.departureAirportOrCity;
    const arrivalAirportOrCity = data2.arrivalAirportOrCity;

    data2.departureAirportOrCity = arrivalAirportOrCity;
    data2.arrivalAirportOrCity = departureAirportOrCity;
    console.log("data roadtrip2", data2);


    const arrArrivalTime = [];
    try{
      const searchFlight1 = await axios.post(apiSearchOne,data2);
      this.setState({
        arrival_Time: searchFlight1.data
      })

      searchFlight1.data.map( flight => arrArrivalTime.push(flight.id));
      setCookie("arrivalTime", arrArrivalTime,100);
      // this.props.oneWayFlight(searchFlight1.data);
      // this.props.history.push(`/oneway/${searchFlight.data.id}`);
    }catch(e){
      alert("false ff")
    }

    if(getCookie("departureTime") && getCookie("arrivalTime")){
      this.props.history.push(`/roadtrip`);
    }
    // console.log("dddd",departureTime);
    // console.log("aaaaaaa",arrivalTime);

  }
  

 async setDataSearchOneWay(d){


    this.setState({

      dataSearch: d
    })
    this.props.dataSearch(d);

    // console.log("data", d)
    const apiSearchOne= "http://hanuairline.azurewebsites.net/flight/search-one";
    try{
      const searchFlight = await axios.post(apiSearchOne,d);

      this.setState({
        resultSearchOne: searchFlight.data
      })
      // this.props.oneWayFlight(searchFlight.data);

      //console.log("arrr",searchFlight.data );
      const arrFlight = [];
      searchFlight.data.map( flight => arrFlight.push(flight.id));
      // console.log("arrrr ", arrFlight );
      setCookie("arrFlightOneWay", arrFlight, 100);

      // getCookie("arrFlightOneWay");
      this.props.history.push(`/oneway`);

    }catch(e){
      alert("Please choose other flight")
    }
    
  }
async componentDidMount(){
    console.log("homeeeeeeeeee");

    const  apiGetFlight = "http://hanuairline.azurewebsites.net/flight/getAll";
    const getFlight = await axios.get(apiGetFlight);
    console.log(getFlight.data);
    this.setState({
      allFlight: getFlight.data.content
    })

    
    const  apiGetFlight1 = "http://hanuairline.azurewebsites.net/flight/getAll?saleFlightOnly=true ";
    const getFlight1 = await axios.get(apiGetFlight1);
    this.setState({
      flightSale: getFlight1.data.content
    })
    console.log("flight sale",this.state.flightSale);
  }

  render() {
    const {allFlight,flightSale } = this.state
    const { children } = this.props;
    // console.log("this data", this.state.dataSearch)
    return (
      <div className ="home" id="home">
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <div style={{ height: "20px" }}></div>

          <Grid item>
          <NavBar/>
          </Grid>
          

          <Grid item >
          <SearchForm setDataSearchOneWay ={this.setDataSearchOneWay} setDataSearchRoadTrip = {this.setDataSearchRoadTrip}/>
          {/* {
            (resultSearchOne) ? (<><OneWay flightOneWay ={resultSearchOne}/></>) : ""
          }
          {
            (departure_Time && arrival_Time) ? (<> <RoadTrip departure_Time={departure_Time} arrival_Time={arrival_Time} /></>) :""
          } */}
          <PromotionForm allFlight = {flightSale}/>
          <FlightForm allFlight = {allFlight}/>
          <TicketForm/>
          </Grid>
          <div style={{ height: "20px" }}></div>
          <Grid item container>
            <Grid item xs={false} sm={2} />

            <Grid item xs={8}>
              {children}
            </Grid>

            <Grid item xs={false} sm={2} />
          </Grid>
          <Grid item>
          <Footer />

          </Grid>
        </Grid>

      </div>
    );
  }
}

export default withRouter(HomePage);
