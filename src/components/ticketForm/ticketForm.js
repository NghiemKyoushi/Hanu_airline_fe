import React from "react";
import {Button} from '@material-ui/core';
class TicketForm extends React.Component {
  render() {
    return (
      <>
        <div class="promotionMenu" id="ticket">
          <div class="promotion">
            <div
              style={{
                backgroundColor: "#026987",
                padding: "50px 0 50px 0",
                height: "20px",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" color="primary" size="large">
                Ticket
              </Button>
            </div>
            <div className = "bgFormCheck">
            <form class="form_check">
              <div>
                <input className="TicketID" placeholder="Ticket ID _ " />
                <button className="check">check status</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TicketForm;
