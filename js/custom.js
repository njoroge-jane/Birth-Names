var valid = function (day, month, year, gender) {
  if (day < 1 || day > 31){
      alert("Input correct day");
      if (year % 4 === 0 && month == 2 && day > 29) {
        alert("Feb for a leap year can not have more 29 days");
      }
    } 
    // (month == 2 && day > 28) ||
    // (year % 4 === 0 && month == "February" && day > 29) ||
    // year < 1900 ||
    // year > 2100
   
  else {
    var dayOfBirth = dayOfTheWeek(
      parseInt(year.slice(0, 2)),
      parseInt(year.slice(2, 4)),
      parseInt(month),
      parseInt(day)
    );
    alert(dayOfBirth);
    if (gender === "female") {
      var akanName = female[dayOfBirth];
      alert(akanName);
    } else if (gender === "male") {
      var akanName = male[dayOfBirth];
      alert(akanName);
    }

    // return true;

    document.getElementById("akan-name").innerHTML = akanName;
  }
};
var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("valid");
var dayOfTheWeek=function(CC,YY,MM,DD){
  var d=(k+(Math.floor((13*m-1)/5))+D+(Math.floor(D/4))+(Math.floor(C/4))-(2*C))%7;
}
var dayOfTheWeek = function (CC, YY, MM, DD) {
  console.log(`${CC} of ${YY} MONTH ${MM} DAY${DD}`);
  let indexOfDay =Math.floor((((CC/4) - 2*CC - 1) + ((5*YY/4)) + ((26*(MM + 1)/10)) + DD) % 7);
  return indexOfDay;
  
};

var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var gender = ["female", "male"];

