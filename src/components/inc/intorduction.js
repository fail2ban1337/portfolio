import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import undrew1 from "../../images/undraw_certificate_343v.svg";
import Button from "@material-ui/core/Button";
import { Link, animateScroll as scroll } from "react-scroll";
import moment from "moment";

export default function Interduction() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginTop: "100px",
        position: "relative"
      }}
    >
      <Grid item sm={8} xs={12}>
        <img src={undrew1} />
      </Grid>
      <Grid container item sm={4} xs={12} justify="center">
        <Typography
          variant="h5"
          style={{ color: "black", marginBottom: "20px" }}
        >
          Hi There!
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            color: "rgb(112, 112, 112)",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          I’m a {moment().diff(process.env.GATSBY_USER_BIRTH, "years")} years
          old student from Morocco, My Skills and interest in web developement
          are javascript (ES6+), Node.js, Reactjs, SQL, NOSQL & PHP...
        </Typography>
        <Grid container item xs={12} justify="center">
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button variant="contained" color="primary" disableElevation>
              Contact me
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
