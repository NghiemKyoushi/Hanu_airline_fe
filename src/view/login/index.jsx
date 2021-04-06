import React from "react";

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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Link to='/'><Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          </Link>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

// SignIn.propTypes = {
//   login: React.PropTypes.func.isRequired,
// };

// SignIn.contextType = {
//   router: React.PropTypes.object.isRequired,
// };
export default withStyles(useStyles) (withRouter(SignIn));
