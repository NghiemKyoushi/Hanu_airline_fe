import React from "react";

class ChooseType extends React.Component {
  
  render() {
    
    return (
      <>
        <div style={{
                  height: "20px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}><button className = "bookButton" >Ticket</button></div>
        <form className="ticket">
          <div className="container1">
            <div className="ticket-form">
              <div className="ticket-field">Ticket ID</div>
              <div className="ticket-field-detail">198</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Airway</div>
              <div className="ticket-field-detail-2">
                <div className = "ticket-from-to">HCM City</div>
                <div className = "t-in-ticket">❯❯❯</div>
                <div className = "ticket-from-to">Ha Noi</div>
              </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field">Seat</div>
              <div className="ticket-field-detail">H98</div>
            </div>
          </div>

          <div className="container2">
            <div className="ticket-form">
              <div className="ticket-field">Price</div>
              <div className="ticket-field-detail">3 000 000 VND</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Type</div>
                <div className="ticket-field-detail-2">
                  <button className="adult-in-ticket">Adult</button>
                  <button className="adult-in-ticket">Children</button>
                  </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Status</div>
              <div className="ticket-field-status">Available</div>
            </div>
          </div>
        </form>

        <form className="ticket">
          <div className="container1">
            <div className="ticket-form">
              <div className="ticket-field">Ticket ID</div>
              <div className="ticket-field-detail">198</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Airway</div>
              <div className="ticket-field-detail-2">
                <div className = "ticket-from-to">HCM City</div>
                <div className = "t-in-ticket">❯❯❯</div>
                <div className = "ticket-from-to">Ha Noi</div>
              </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field">Seat</div>
              <div className="ticket-field-detail">H98</div>
            </div>
          </div>

          <div className="container2">
            <div className="ticket-form">
              <div className="ticket-field">Price</div>
              <div className="ticket-field-detail">3 000 000 VND</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Type</div>
                <div className="ticket-field-detail-2">
                  <button className="adult-in-ticket">Adult</button>
                  <button className="adult-in-ticket">Children</button>
                  </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Status</div>
              <div className="ticket-field-status">Available</div>
            </div>
          </div>
        </form>

        <form className="ticket">
          <div className="container1">
            <div className="ticket-form">
              <div className="ticket-field">Ticket ID</div>
              <div className="ticket-field-detail">198</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Airway</div>
              <div className="ticket-field-detail-2">
                <div className = "ticket-from-to">HCM City</div>
                <div className = "t-in-ticket">❯❯❯</div>
                <div className = "ticket-from-to">Ha Noi</div>
              </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field">Seat</div>
              <div className="ticket-field-detail">H98</div>
            </div>
          </div>

          <div className="container2">
            <div className="ticket-form">
              <div className="ticket-field">Price</div>
              <div className="ticket-field-detail">3 000 000 VND</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Type</div>
                <div className="ticket-field-detail-2">
                  <button className="adult-in-ticket">Adult</button>
                  <button className="adult-in-ticket">Children</button>
                  </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Status</div>
              <div className="ticket-field-status">Available</div>
            </div>
          </div>
        </form>
                <div className = "button-ticket">
                  <button className="confirm-ticket">Confirm</button>
                  <button className="cancel-ticket">Cancel</button>
                </div>
                  
      </>
    );
  }
}
export default ChooseType;
