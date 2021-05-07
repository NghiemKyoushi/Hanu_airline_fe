import React from "react";
import { Button, Grid } from "@material-ui/core";
import '../home/homepage.css';
import { withRouter } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import SearchForm from '../../components/SearchForm/SearchForm';
import axios from "axios";
import FlightForm from '../../components/flightForm/flightForm';
import PromotionForm from '../../components/propotionForm/promotionForm';
import TicketForm from '../../components/ticketForm/ticketForm';
class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFlight: ""
    }
    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(date){
    const format = new Date(date);
    return format.toLocaleDateString();
  }

async componentDidMount(){
    console.log("homeeeeeeeeee");

    const  apiGetFlight = "https://hanuairline4c.azurewebsites.net/flight/getAll";

    const getFlight = await axios.get(apiGetFlight);
    console.log(getFlight.data);
    this.setState({
      allFlight: getFlight.data.content
    })
  }

  render() {
    const { children } = this.props;
    return (
      <div className ="home" id="home">
        <div container direction="column">
          <div item>
            <Header />
          </div>
          <div style={{ height: "20px" }}></div>

          <div item>
          <NavBar/>
          </div>
        
          <div style={{ height: "20px" }}></div>
          <div item container>
            <div item xs={false} sm={2} />

            <div item xs={8}>
              {children}
            </div>

            <div item xs={false} sm={2} />
          </div>
          <div item>
          <Footer />

          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Template);
