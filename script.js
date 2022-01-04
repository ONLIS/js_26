"use strict";

const sendData = (user) => {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(user);
  xhr.onload = function () {
    if (xhr.status != 201) {
      alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
      alert(`Готово, отправлено ${xhr.response.length} байт`);
    }
  };

  xhr.onprogress = function (event) {
    if (event.lengthComputable) {
      alert(`Отправлено ${event.loaded} из ${event.total} байт`);
    } else {
      alert(`Отправлено ${event.loaded} байт`);
    }
  };

  xhr.onerror = function () {
    alert("Запрос не удался");
  };
};

const getData = () => {
  fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      sendData(JSON.stringify(data));
    })
    .catch((error) => console.log(error));
};

getData();
