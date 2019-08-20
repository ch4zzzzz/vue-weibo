let interval = 30000;
const pollingFunction = function () {
  const request = new XMLHttpRequest();
  request.onload = handlerReponse;
  request.open('get', '/api/messages', false)
  request.send();
}
const handlerReponse = function () {
  console.log(this.response);
}
let polling = null;
let user_token = "";

onmessage = function (e) {
  if (user_token.length > 0) {}
  polling = setInterval(pollingFunction, interval);
}
