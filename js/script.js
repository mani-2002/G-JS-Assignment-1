document.addEventListener("DOMContentLoaded", function () {
  var datepicker = document.getElementById("datepicker");
  var displayDate = document.getElementById("displayDate");
  datepicker.addEventListener("input", function () {
    var selectedDate = datepicker.value;
    displayDate.textContent = selectedDate;
  });
});

function setItemIntoLocalStorage() {
  var fname = document.getElementById("fl1box").value;
  var lname = document.getElementById("fl2box").value;
  var email = document.getElementById("mail").value;
  var phonenumber = document.getElementById("telle").value;
  var gender = document.querySelector('input[name="Gender"]:checked').value;
  var city = document.getElementById("selc").value;
  var appposition = document.getElementById("apppos").value;
  var earposition = document.getElementById("dt").value;
  var preferredinterviewdate = document.getElementById("datepicker").value;

  localStorage.setItem("first name", fname);
  localStorage.setItem("last name", lname);
  localStorage.setItem("email", email);
  localStorage.setItem("phone number", phonenumber);
  localStorage.setItem("Gender", gender);
  localStorage.setItem("city", city);
  localStorage.setItem("applied position", appposition);
  localStorage.setItem("earliest possible start date", earposition);
  localStorage.setItem("preferred interview date", preferredinterviewdate);
}
var applyButton = document.getElementById("btn");
applyButton.addEventListener("click", setItemIntoLocalStorage);

var FNAME1 = localStorage.getItem("first name");
var LNAME1 = localStorage.getItem("last name");
var EMAIL1 = localStorage.getItem("email");
var PHONENUMBER1 = localStorage.getItem("phone number");
var GENDER1 = localStorage.getItem("Gender");
var CITY1 = localStorage.getItem("city");
var APPPOSITION1 = localStorage.getItem("applied position");
var EARPOSITION1 = localStorage.getItem("earliest possible start date");
var PREFERREDINTERVIEWDATE1 = localStorage.getItem("preferred interview date");

document.getElementById("fl1box").value = FNAME1;
document.getElementById("fl2box").value = LNAME1;
document.getElementById("mail").value = EMAIL1;
document.getElementById("telle").value = PHONENUMBER1;
document.getElementById("selc").value = CITY1;
document.getElementById("apppos").value = APPPOSITION1;
document.getElementById("dt").value = EARPOSITION1;
document.getElementById("datepicker").value = PREFERREDINTERVIEWDATE1;
if (GENDER1 === "Male") {
  document.getElementById("male").checked = true;
} else if (GENDER1 === "Female") {
  document.getElementById("female").checked = true;
} else {
  document.getElementById("trans").checked = true;
}

function restrictAlphabets(e) {
  var regex = /^[a-zA-Z]*$/;
  var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!regex.test(key)) {
    e.preventDefault();
    return false;
  }
}

function validateInput() {
  var input = document.getElementById("telle").value;
  var regex = /[^0-9]/g;
  var numericValue = input.replace(regex, "");

  var formattedValue = "";
  for (var i = 0; i < numericValue.length; i++) {
    if (i === 3 || i === 6) {
      formattedValue += "-";
    }
    formattedValue += numericValue.charAt(i);
  }

  document.getElementById("telle").value = formattedValue;
}

function submitForm(event) {
  event.preventDefault();

  var fname = document.getElementById("fl1box").value;
  var lname = document.getElementById("fl2box").value;
  var email = document.getElementById("mail").value;
  var phonenumber = document.getElementById("telle").value;
  var gender = document.querySelector('input[name="Gender"]:checked').value;
  var city = document.getElementById("selc").value;
  var appposition = document.getElementById("apppos").value;
  var earposition = document.getElementById("dt").value;
  var preferredinterviewdate = document.getElementById("datepicker").value;

  if (
    fname === "" ||
    lname === "" ||
    email === "" ||
    phonenumber === "" ||
    gender === "" ||
    city === "" ||
    appposition === "" ||
    earposition === "" ||
    preferredinterviewdate === ""
  ) {
    document.getElementById("popupMessage").textContent =
      "Please enter all the details.";
  } else {
    document.getElementById("popupMessage").textContent =
      "You have successfully applied for the full-stack developer job.";
  }

  var overlay = document.getElementById("overlay");
  overlay.style.display = "flex";
}

function closePopup() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
