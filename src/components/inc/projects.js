import React, { useState, useEffect } from "react";

export default function Porjects() {
  const [myProjects, SetmyProjects] = useState([]);
  console.log(process.env.GATSBY_GITHUB_USERNAME);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${process.env.GATSBY_GITHUB_USERNAME}/repos`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data); // Prints result from `response.json()` in getRequest
      })
      .catch(error => console.error(error));
  }, []);
  return <h1>Hello Wrold</h1>;
}
