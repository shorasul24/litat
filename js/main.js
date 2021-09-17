//Speed
var speedWalk = 3.6;
var speedBic = 20.1;
var speedCar = 70;
var speedPlane = 800;

//Speed class

var elForm = document.querySelector(".form");
var userDistances = Number(document.querySelector(".input").value);
var userError = document.querySelector(".error");
var walkResult = document.querySelector(".see__walk");
var bicResult = document.querySelector(".see__bic");
var carResult = document.querySelector(".see__car");
var planeResult = document.querySelector(".see__plane");


//Function


function Datetime (num) {
   var hour = Math.floor(num);
   var minute = Math.floor((num-hour) * 60);
   var secund =Math.floor(((num-hour) * 60 - minute) * 60);

   if (hour > 0 && minute > 0 && secund > 0){
      return `${hour} soat ${minute} minut ${secund} sekund`
   } else if (hour > 0) {
      return `${hour} soat`
   } else if (minute > 0) {
      return `${minute} minut`
   } else if (secund > 0) {
      return `${secund} sekund`
   } else {
      return ""
   }
}

// submit function
elForm.addEventListener('submit', function(evt){
   evt.preventDefault()

   var userDistances = Number(document.querySelector(".input").value.trim());

   userDistances.value = null;

   if (userDistances <= 0 || isNaN(userDistances)) {
      userError.textContent = 'Please enter a number !';
      return;
   } else {
      userError.textContent =""
   }

   var resultWalk = Datetime(userDistances / speedWalk);
   var resultBic = Datetime(userDistances / speedBic);
   var resultCar = Datetime(userDistances / speedCar);
   var resultPlane = Datetime(userDistances / speedPlane);

   walkResult.textContent = resultWalk;
   bicResult.textContent = resultBic;
   carResult.textContent =  resultCar;
   planeResult.textContent = resultPlane;

})
   
