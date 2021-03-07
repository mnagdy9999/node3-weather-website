// const fetch = require("node-fetch");

console.log("This is a client server!");

fetch("http://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

fetch("http://localhost:3000/weather?address=boston").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log("Error!");
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
