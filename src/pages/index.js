import React from "react";
import Grid from "@material-ui/core/Grid";

import undrew from "../images/undraw_source_code_xx2e.svg";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Projects from "../components/inc/projects";
import Interduction from "../components/inc/intorduction";
import Contact from "../components/inc/contact";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles(theme => ({}));
function IndexPage() {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          padding: "4rem 0px",
          position: "relative"
        }}
      >
        <Grid container item sm="4" xs="12">
          <Typography variant="h2" style={{ color: "black" }}>
            Hi There!
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ color: "rgb(112, 112, 112)" }}
          >
            I’m Ayoub Belomari and I’m a Full-Stack Web Developer!
          </Typography>
          <Grid container item xs="12" justify="center">
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
        <Grid item sm="8" xs="12">
          <img src={undrew} />
        </Grid>
      </Grid>
      <Grid container item xs="12" className={classes.image}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          {" "}
          Projects
        </Typography>
      </Grid>
      <Projects />
      <Interduction />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
