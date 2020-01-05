// Defines functions and variables that
// can be exported to other modules

const MAX = 1000;

function getDate() {
  let date = new Date();
  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  return day + "-" + month + "-" + year;
}

function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return hours + ":" + minutes + ":" + seconds;
}

function getTimestamp() {
  return Date.now();
}

function getMOD() {
  return "The Message of the Day!";
}

module.exports = { getDate, getTime, getTimestamp, getMOD, MAX };

// ES6 Format
// export default { getDate, getTime, getTimestamp, getMOD, MAX };
