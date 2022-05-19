// https://www.chartjs.org/


window.function = function (userID) {

  // data
  userID = userID.value ?? "";
  
  const baseUrl = "https://script.google.com/macros/s/AKfycbwfY_dhL0hGA8uVdftJKJ7vp7-I_f49ZeRfWIe969R7vO9SQ6sal1jO3j6HtO6JKij8tw/exec";  // Please set your Web Apps URL.

const para = {
  spreadsheetId: userID,  // Please set your Google Spreadsheet ID.
  sheetName: "Data"  // Please set the sheet name you want to retrieve the values.
};
const q = new URLSearchParams(para);
const url = baseUrl + "?" + q;
fetch(url)
  .then(res => res.json())
  .then(res => {
    const values = res.values;
    return values;
  });

}
