import React from "react";
import './login.css';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import {Link } from "react-router-dom";
//import function
import {setCookie, getCookie} from '../../utils/fetchData/fetchData'
import { Login } from "../../utils/fetchData/fetchData";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      'Hanu_Airline © '
      
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = (theme) => ({
  
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameOrEmail: "",
      password: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { usernameOrEmail, password } = this.state;
    console.log("loginnnnnnnnnnnnn");
    const message = Login(usernameOrEmail, password)
      .then(function(res) {
        console.log("Vaooooooooo",res)
        if(res !== "Login_false"){
          setCookie("jwtToken", "Bearer"+ " "+res.data.accessToken, 14.4);
          // this.props.setStateLogin(true, () => {
          //   this.props.history.push("/");
          // })
        }else {
          alert("login false")
        }
        
      })
      const jwtToken = getCookie("jwtToken");
      if(jwtToken){
         this.props.setStateLogin(true, () => {
            this.props.history.push("/");
         })
      }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  // async componentDidMount (){
  //   console.log("loginnnnnnnnnnnnn")
  // }
  render() {
    const { classes } = this.props;
    console.log("props day",this.props);

    return (
      <Container>
        <CssBaseline />
        <div class ="container" noValidate>
          <div class = "SignInForm">
                <h2>Sign In</h2>
                <div class = "textbox"><TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="usernameOrEmail"
              autoComplete="usernameOrEmail"
              autoFocus
              onChange={this.onChange}
            /></div>
            <div class = "textbox"><TextField
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
                />
            </div>
            <div class = "check"><FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /></div>
            
            
            <Button
                  type="button"
                  class = "submitSignIn"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick= {this.onSubmit}
                >Sign In
                </Button>
                <div class = "forgot"><Link to="#" variant="body2">
                  Forgot password?
                </Link>
                  </div>
          </div>
          <div class = "imgg"><div class = "title">Create an account?</div>
          <div class = "If">If you have no account, enter SIGN UP to start!</div>
          <Link to="/signup" variant="body2">
                  <div class = "ButtonSignUp"><h3> Sign Up</h3></div>
                </Link></div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
export default withStyles(useStyles) (withRouter(SignIn));
