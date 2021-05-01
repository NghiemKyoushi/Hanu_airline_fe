import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import { get } from "react-scroll/modules/mixins/scroller";
import "./seatBooking.scss";
class SeatBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      premiumEconomy: [],
      economy: [],
      form: null
      
      // test: [9, 6, 7, 8],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();

  }

  handleChange(e){
    // e.preventDefault();
    // const {name} = e.target;
    const checkedArray= [];
    let value;
    if(e.target.type !=='checkbox'){
      value = e.target.value;
    }else{
      const checkeds = document.getElementsByTagName('input');
      for(let i = 0 ; i < checkeds.length ; i++){
        if(checkeds[i].checked ){
          checkedArray.push(checkeds[i].id);
          // console.log("fjfjfjf",checkeds[i].id);
        
        }
      }
      // const {form} = this.state;
      // this.state.form = checkedArray;
      console.log("form", checkedArray);

    }
  }

  async componentDidMount() {
    const id = Number(this.props.match.params.id);
    const business = [];
    const premiumEconomy = [];
    const economy = [];
    const api =
      `http://hanuairline.azurewebsites.net/aircraftSeat/admin/getByAircraftId/${id}`;

    const getData = await axios.get(api, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjE5NDI4OTQ5LCJleHAiOjE2MjAyOTI5NDl9.LP1g-LPjTE64Amj7m_ZuDseHFQ7niya47Pb-Phvedq0DPkd9xoCOeeq1W1vY5fJ0W_yn3bgL_htnDz5p5MLd7g",
      },
    });

    // const getData = await axios({
    //   method: "GET",
    //   api,
    //   headers:{ }
    // });
    const data = getData.data;
    const mapData = data.map((item, index) => {
      if (item.travelClass.description === "BUSINESS CLASS CLASSIC") {
        business.push(data[index]);
      } else if (
        item.travelClass.description === "PREMIUM ECONOMY CLASS CLASSIC"
      ) {
        premiumEconomy.push(data[index]);
      } else if (item.travelClass.description === "ECONOMY CLASS CLASSIC") {
        economy.push(data[index]);
      }
    });
    this.setState({
      business: business,
      premiumEconomy: premiumEconomy,
      economy: economy,
    });
  }

  render() {
    const { business, premiumEconomy, economy } = this.state;
    // console.log("bussssss",typeof business)
    console.log("data seat : ", business);

    return (
      <>
      <div class="plane">
        <div class="cockpit">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: "40px",
            }}
          >
            <div
              className="color_class"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <h4>Business</h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: "40px",
            }}
          >
            <div
              className="color_class"
              style={{ backgroundColor: "blue" }}
            ></div>
            <h4>Economy Flex</h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: "40px",
            }}
          >
            <div
              className="color_class"
              style={{ backgroundColor: "Highlight" }}
            ></div>
            <h4>Economy</h4>
          </div>
        </div>
        <ol class="cabin fuselage">
          <li class="row row--1">
            <ol class="seats" type="A">
              {business.map((bus, index) => {
                return (
                  <li class="seat2" key={index}>
                    <input type="checkbox" id={bus.id} />
                    <label for={bus.id}>{bus.id}</label>
                  </li>
                );
              })}
            </ol>
          </li>
        </ol>
        <div class="exit exit--front fuselage"></div>
        <ol class="cabin fuselage">
          <li class="row row--2">
            <ol class="seats" type="A">
              {premiumEconomy.map((pre, index) => {
                return (
                  <li class="seat" key={index}>
                    <input type="checkbox" id={pre.id} onChange ={this.handleChange}/>
                    <label for={pre.id}>{pre.id}</label>
                  </li>
                );
              })}
            </ol>
          </li>
        </ol>
        <div class="exit exit--back fuselage">
          <br />
          <li class="row row--3">
            <ol class="seats" type="A">
              {economy.map((eco, index) => {
                return (
                  <li class="seat3" key={index}>
                    <input type="checkbox" id={eco.id} value={eco.id}/>
                    <label for={eco.id}>{eco.id}</label>
                  </li>
                );
              })}
           </ol>
          </li>
        </div>
       
      </div>
      <div className = "button-ticket">
                  <button className="confirm-ticket">Confirm</button>
                  <button className="cancel-ticket">Cancel</button>
                </div>
      </>
    );
  }
}
export default withRouter(SeatBooking);

{
  /* business.map( (business, index) =>(
                <li class="seat2">
                <input type="checkbox" id="1A" />
                <label for="1A">1A</label>
              </li>
              )) */
}
{
  /* <li class="seat2">
                <input type="checkbox" id="1A" />
                <label for="1A">1A</label>
              </li>
              <li class="seat2">
                <input type="checkbox" id="1B" />
                <label for="1B">1B</label>
              </li>
              <li class="seat2">
                <input type="checkbox" id="1C" />
                <label for="1C">1C</label>
              </li>
              <li class="seat2">
                <input type="checkbox" id="1D" />
                <label for="1D">1D</label>
              </li> */
}
