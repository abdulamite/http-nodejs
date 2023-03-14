function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getCurrentDate() {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

function convertDateToPST(date) {
  const dateObj = new Date(date);
  const utcDate = dateObj.getTime() + dateObj.getTimezoneOffset() * 60000;
  const pstDate = new Date(utcDate - 28800000);
  return pstDate;
}

module.exports = {
  randomArrayItem,
  getCurrentDate,
  convertDateToPST,
};
