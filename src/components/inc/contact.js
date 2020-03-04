import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import undrew2 from "../../images/undraw_delivery_address_03n0.svg";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  notchedOutline: {
    borderColor: "#3f51b5"
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      style={{
        padding: "4rem 0px",
        position: "relative"
      }}
      id="contacts"
    >
      <Grid container item sm="7" xs="12">
        <Grid item xs={11}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="full name*"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={11} style={{ marginTop: "20px" }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="email*"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={11} style={{ marginTop: "20px" }}>
          <TextField
            multiline
            rows="4"
            fullWidth
            id="outlined-basic"
            label="message*"
            variant="outlined"
            inputProps={{
              style: { borderColor: "red" }
            }}
          />
        </Grid>
        <Grid container item xs="12" style={{ marginTop: "20px" }}>
          <Button variant="contained" color="primary" disableElevation>
            Send
          </Button>
        </Grid>
      </Grid>
      <Grid item sm="5" xs="12">
        <img src={undrew2} />
      </Grid>
    </Grid>
  );
}
