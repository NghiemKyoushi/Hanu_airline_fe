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
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFlight: "",
      dataSearch: ""
    }
    this.setDataSearch = this.setDataSearch.bind(this);
    // this.formatDate = this.formatDate.bind(this);
  }

  

  setDataSearch(d){
    this.setState({
      dataSearch: d
    })
  }
async componentDidMount(){
    console.log("homeeeeeeeeee");

    const  apiGetFlight = "http://hanuairline.azurewebsites.net/flight/getAll";
    const getFlight = await axios.get(apiGetFlight);
    console.log(getFlight.data);
    this.setState({
      allFlight: getFlight.data.content
    })
  }

  render() {
    const {allFlight} = this.state
    const { children } = this.props;
    console.log("receive data", this.state.dataSearch);
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
          <SearchForm setDataSearch ={this.setDataSearch}/>
          <PromotionForm allFlight = {allFlight}/>
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
