import React from "react";
import { Button, Grid } from "@material-ui/core";

import { withRouter } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NavBar from "../../components/navbar/navbar";
import SearchForm from '../../components/SearchForm/SearchForm';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <div style={{ height: "20px" }}></div>

          <Grid item>
          <NavBar/>
          </Grid>
          <div style={{ height: "20px" }}></div>
          <Grid item  style={{display: "flex",justifyContent: "center", alignItems: "center"}}>
            <Button  variant="contained" color="primary" size ="large">BOOKING</Button>
          </Grid>
          <div style={{ height: "20px" }}></div>

          <Grid item >
          <SearchForm/>
          </Grid>
          <div style={{ height: "20px" }}></div>
          <Grid item container>
            <Grid item xs={false} sm={2} />

            <Grid item xs={8} style={{ height: "900px"}}>
              {children}
            </Grid>

            <Grid item xs={false} sm={2} />
          </Grid>
          <Grid item>
          <Footer />

          </Grid>
        </Grid>

      </>
    );
  }
}

export default withRouter(HomePage);
