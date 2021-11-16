var day = document.getElementById("day").value;
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;

var validDates = function (day, month, year,gender) {
  var fullDate=year+"/"+month+"/"+day;
  var dayOfBirth=findDay(fullDate);
  if (day === "" || year === "") {
    alert("Fill blanks");
  } else if (year % 4 == 0 && month == 2 && day > 29) {
    alert("February has 29 days");
  } else if (month == 2 && day > 28) {
    alert("February has 28 days");
  } else if (day < 1 || day > 31) {
    alert("Days cannot be more than 31");
  } else if (year < 1800 || year > 2100) {
    alert("Year is invalid");
  } else {
    // return true;
    if (gender == "female") {
      var akanName = femaleName[dayOfBirth];
      alert(akanName);
    } else if (gender == "male") {
      var akanName = maleName[dayOfBirth];
      alert(akanName);
    }
    document.getElementById("akan-name").innerHTML = akanName;
  }
};

alert (dayOfBirth);
var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


var findDay=function(dateString){
  var dt = new Date(dateString);
  var weekDay = dt.getDay();
  return weekDay;

}

// alert(weekDay);
var gender = ["female", "male"];
