import React from "react";
import "./profile.css";
class Profile extends React.Component {
  
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
                }}><button className = "ProfileButton" >My profile</button></div>
        <section className="profile">
                        <header className="profile-user">
                            <div className="details">
                            <img src="avt.jpg" alt="John Doe" class="profile-pic"></img>
                            <h1 className="heading">Long Vu Nguyen</h1>
                            <div className="location">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12 ,2Z"></path>
                        </svg>
                                <p>Ha Noi, Viet Nam</p>
                            </div>
                            <div className="stats">
                                <div className="col-1">
                                <h4>Username</h4>
                                <h4>Name</h4>
                                <h4>Email</h4>
                                <h4>Phone Number</h4>
                                <h4>ID Card</h4>
                                <h4>Credit No</h4>
                                </div>
                                <div className="col-2">
                                <p>longvux</p>
                                <p>Long Vu Nguyen</p>
                                <p>longvux@gmail.com</p>
                                <p>0123456789</p>
                                <p>0123456789</p>
                                <p>0123456789</p>
                                </div>
                            </div>
                            <div>
                          <button className="EditButton" onClick = {this.submitSearch}>Edit</button>
                        </div>
                            </div>

                        </header>
                        
                        </section>
      </>
    );
  }
}
export default Profile;