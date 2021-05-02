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
                height: "20px",
                marginTop: "50px",
                marginBottom: "30px",
                borderRadius: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" color="primary" size="large">
                Ticket
              </Button>
            </div>
            <form class="form_check">
              <div>
                <input className="TicketID" placeholder="  Ticket ID _ " />
                <button className="check">check status</button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default TicketForm;
