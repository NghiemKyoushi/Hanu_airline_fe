import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import './signup.css';
//fetch data

import {Register} from '../../utils/fetchData/fetchData'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Hanu_Airline © "}
      {/* <Link color="inherit" href="https://material-ui.com/">
        
      </Link> */}
      {new Date().getFullYear()}
    </Typography>
  );
}

const styles = (theme) => ({
  
});

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state={
      name: "",
      username: "",
      email: "",
      imageUrl: "",
      password: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e){
    e.preventDefault();
    console.log("suppppppppp");
    const message = Register(this.state).then(res=>
      console.log(res.data)
      )
      if(message.data.message){
        alert("register successfully, come to login")
      }else{
        alert("Register false")
      }
      // {success: true, message: "User registered successfully"}
  }

  render(){
    const { classes } = this.props;
    return (
      <Container >
        <CssBaseline />
            <div class ="cont" noValidate>
              <div class = "SignUpForm">
                <h2>Sign up</h2>
                <div class = "dis-textbox"><TextField
                  size="small"
                  autoComplete="uname"
                  name="usernameOrEmail"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  type= "text"
                  label="Username"
                  autoFocus
                  onChange= {this.onChange}

                /></div>
                <div class = "dis-textbox"><TextField
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  name="name"
                  type= "text"
                  autoComplete="name"
                  onChange={this.onChange}
                /></div>
                <div class = "dis-textbox"><TextField
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type= "email"
                  autoComplete="email"
                  onChange= {this.onChange}

                /></div>
                <div class = "dis-textbox"><TextField
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange= {this.onChange}
                /></div>
              
                <div class = "dis-textbox"><TextField
                  size="small"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange= {this.onChange}
                /></div>
            
                <div class = "SignUp"><Button
                  type="button"
                  class = "submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick= {this.onSubmit}
                >Sign Up
                </Button></div>
              </div>
              <div class = "img">
                <div class = "Sub-SignUp">Already a Member?</div>
                <p>If you already have an account, just SIGN IN!</p>
                  <Link href="/login">
                  <div class = "ButtonSignIn"><h3> Sign in</h3></div>
                  </Link>
                
              </div>
          </div>
      </Container>
    );
  }
 
}

export default withStyles(styles) (SignUp);
