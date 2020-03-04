import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@material-ui/core/";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Moment from "moment";
import GitHubIcon from "@material-ui/icons/GitHub";
import StarIcon from "@material-ui/icons/Star";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  title: {
    textAlign: "center"
  },
  section: {
    height: "100%",
    paddingTop: 5,
    backgroundColor: "#fff"
  },
  cursor: {
    cursor: "pointer"
  }
}));

export default function Porjects() {
  return <Projectss />;
}

const Projectss = () => {
  const classes = useStyles();
  const [myProjects, SetmyProjects] = useState([]);
  console.log(process.env.GATSBY_GITHUB_USERNAME);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${process.env.GATSBY_GITHUB_USERNAME}/repos`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data); // Prints result from `response.json()` in getRequest
        SetmyProjects(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          id="projects"
        >
          {myProjects.map(value => {
            return (
              <Grid item xs={12} sm={6} md={4} key={value.id}>
                <Card style={{ height: "100%" }}>
                  <CardHeader
                    className={classes.title}
                    title={
                      <Typography gutterBottom variant="subtitle1">
                        {value.name}
                      </Typography>
                    }
                    subheader={Moment(value.created_at).format("DD MMM YYYY")}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      style={{ color: "rgba(0, 0, 0, 0.54)" }}
                    >
                      {value.description}
                    </Typography>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="flex-end"
                    >
                      <Grid item xs={6}>
                        <div style={{ float: "left" }}>
                          <StarIcon className={classes.cursor} />{" "}
                          {value.stargazers_count}{" "}
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div style={{ float: "right" }}>
                          <GitHubIcon
                            className={classes.cursor}
                            onClick={() =>
                              window.open(value.html_url, "_blank")
                            }
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
