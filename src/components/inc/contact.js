import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import undrew2 from "../../images/undraw_delivery_address_03n0.svg";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  notchedOutline: {
    borderColor: "#3f51b5"
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [form, SetForm] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [open, setOpen] = useState({
    check: false,
    success: "info"
  });

  console.log(open);
  const sendEmail = e => {
    e.preventDefault();

    if (!form.user_name || !form.user_email || !form.message) {
      setOpen({
        ...open,
        check: true,
        success: "error"
      });
    } else
      emailjs
        .sendForm(
          process.env.GATSBY_SERVICE_ID,
          process.env.GATSBY_TEMPLATE_ID,
          e.target,
          process.env.GATSBY_USER_ID
        )
        .then(
          result => {
            setOpen({
              ...open,
              check: true,
              success: "info"
            });
          },
          error => {
            setOpen({
              ...open,
              check: true,
              success: "error"
            });
            console.log("error", error.text);
          }
        );
  };
  const handleChange = event => {
    SetForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  return (
    <>
      <Grid
        container
        item
        xs={12}
        justify="center"
        style={{ marginTop: "40px" }}
      >
        <Collapse in={open.check}>
          <Alert
            severity={open.success}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen({
                    ...open,
                    check: false,
                    success: open.success
                  });
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {open.success === "info"
              ? "The email has been sent!"
              : "Error en sending email"}
          </Alert>
        </Collapse>
      </Grid>
      <form className={classes.form} onSubmit={form => sendEmail(form)}>
        <Grid
          container
          direction="row"
          justify="center"
          id="outlined-basic"
          alignItems="flex-start"
          style={{
            padding: "3rem 0px",
            position: "relative"
          }}
          id="contacts"
        >
          <Grid container item sm={7} xs={12}>
            <Grid item xs={11}>
              <TextField
                fullWidth
                name="user_name"
                id="outlined-basic"
                label="full name*"
                value={form.user_name}
                type="text"
                onChange={event => handleChange(event)}
              />
            </Grid>
            <Grid item xs={11} style={{ marginTop: "20px" }}>
              <TextField
                fullWidth
                label="email*"
                id="outlined-basic"
                name="user_email"
                type="email"
                value={form.user_email}
                onChange={event => handleChange(event)}
              />
            </Grid>
            <Grid item xs={11} style={{ marginTop: "20px" }}>
              <TextField
                multiline
                rows="4"
                fullWidth
                name="message"
                label="message*"
                value={form.message}
                type="text"
                onChange={event => handleChange(event)}
              />
            </Grid>
            <Grid container item xs={12} style={{ marginTop: "20px" }}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                disableElevation
              >
                Send
              </Button>
            </Grid>
          </Grid>

          <Grid item sm={5} xs={12}>
            <img src={undrew2} />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
