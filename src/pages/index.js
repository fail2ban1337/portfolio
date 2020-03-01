import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";

import undrew from "../images/undraw_source_code_xx2e.svg";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
          padding: "11rem 0px",
          position: "relative"
        }}
      >
        <Grid
          container
          item
          sm="4"
          xs="12"
          className={classes.image}
          justify="center"
        >
          <Typography variant="h2" style={{ color: "black" }}>
            Hi There!
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ color: "rgb(112, 112, 112)" }}
          >
            I’m Ayoub Belomari and I’m a Full-Stack Web Developer!
          </Typography>
          <Grid
            container
            item
            xs="12"
            className={classes.image}
            justify="center"
          >
            <Button variant="contained" color="primary" disableElevation>
              Contact me
            </Button>
          </Grid>
        </Grid>
        <Grid item sm="8" xs="12">
          <img src={undrew} />
        </Grid>
      </Grid>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage;
