import React from "react";
import { Button } from "@material-ui/core";
import { formatDate, formatTime } from "../../utils/fetchData/fetchData";
import { Link } from 'react-router-dom';
import {setCookie,getCookie,deleteCookie} from '../../utils/fetchData/fetchData';

class CardViewFlight extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      id: null,
      arrBook: [],
      inBook: false
    }
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onClickAdd(idFlight,e){
    e.preventDefault();
    // this.setState({
    //   id: idFlight
    // })
    this.setState({
      inBook: true
    })

    console.log("eeee" ,  idFlight);
    if(getCookie("addBook")){
      const arrBook = [];
      arrBook.push(getCookie("addBook"))
      console.log("arrBook", arrBook)
      
      arrBook.map( (flight) => {
        console.log("aaa",typeof flight);

        // if(! Number(flight) === Number(idFlight)){
      
          arrBook.push(idFlight.toString());
          deleteCookie("addBook");
          setCookie("addBook", arrBook, 100);
        // }else{
        //   alert("duplicate")
        // }
      })
     
    }else if(!getCookie("addBook"))
    {
      const arrBook = [];
      arrBook.push(idFlight);
      setCookie("addBook",arrBook, 100)
    }
    
  }

  
  render() {
    const {inBook} = this.state;
    console.log("recieved props", this.props);
    const {
      departureAirport_city,
      arrivalAirport_city,
      price,
      departureTime,
      idFlight,
      sale
    } = this.props;
    // const idF = Number(this.props.idFLight);
    
    return (
      <>
      <><div className="promorion3">
          <button className="from">{departureAirport_city}</button>
          <div className="t">to</div>
          <button className="from">{arrivalAirport_city}</button>

          <input
            className="time_departure_pr"
            id="date"
            value={formatDate(departureTime)}
          />
<div className="price1">
            <div className="price-pr">{price} VNĐ</div>
            {sale ? <div className="price-promotion">{sale}%</div> : ""}
          </div> 
          <div className = "oneway-economy">
            <button className="oneway_pr">One way</button>
            <button className="oneway_pr">Economy</button>
          </div>
          <button className="BookNow" id = {idFlight} onClick={ (e) => this.onClickAdd(idFlight , e)} disabled={inBook}>  {inBook === true ? (
                  <span>InBook</span>
                ) : (
                  <span>Add </span>
                )} </button>
        </div></>
      </>
    );
  }
}
export default CardViewFlight;
