"use strict";

const sendData = (user) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
};

const getData = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      sendData(data);
    })
    .catch((error) => console.log(error));
};

getData();
