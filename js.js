var time = document.querySelector("time");
var buttonStart = document.querySelector("#start");
var buttonStop = document.querySelector("#stop");
var buttonPause = document.querySelector("#Pause");
var imgsd = document.querySelector("div8");
var imgsl = document.querySelector("div6");
var imgsr = document.querySelector("div4");
var div = document.querySelector("div");
// If the display style of the lds-ring class is toggled between none/display,
// then the spinner shows
//var div10 = document.querySelector("div10");
//document.querySelector(".lds-ring").style.display = "none";
var div5 = document.querySelector("div5");
var deadTime = document.querySelector("div2");
var deadTimeSeconds = -1;
var deadTimeMinutes = 0;
var numberIDinterval1;
var numberIDinterval2;
var numberIDinterval3;
var hasBeenClicked = false;
var audio = new Audio(
  "https://previews.customer.envatousercontent.com/files/171129668/preview.mp3"
);
var hasBeenClickedPause = false;
var Seconds = document.querySelector("#Seconds");
var Minutes = document.querySelector("#Minutes");
// var div10 = (document.querySelector("div10").style.display = "none");
//div10Spinner.display = "none";

//מתחיל סיבוב צבעים בכפתור ההתחלה
backGroundColors(buttonStart, "rgb(63 255 0)", "rgb(255 5 5)");

//פונקציה שמסובבת את הצבעים ברקע של האלמנט. צריך להעביר אליה 3 פרמטרים
// א2-3:את הצבעים הרצויים 1:שם האלמט אותו רוצים לצבוע.
function backGroundColors(element, color1, color2) {
  var i = 0;
  numberIDinterval2 = setInterval(function () {
    element.style.background = `linear-gradient(${i}deg,${color1}, ${color2})`;
    i++;
    if (i === 360) {
      i = 0;
    }
  }, 1);
}

//פונקציה ליצירת צבעים רנדומלים
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//פונקציות לייבוא תמונות חתולים
async function imgsLeft() {
  var res = await fetch("https://aws.random.cat/meow");
  var json = await res.json();
  imgsl.innerHTML = '<img src="' + json.file + '">';
}
async function imgsDown() {
  var res = await fetch("https://aws.random.cat/meow");
  var json = await res.json();
  imgsd.innerHTML = '<img src="' + json.file + '">';
}
async function imgsRight() {
  var res = await fetch("https://aws.random.cat/meow");
  var json = await res.json();
  imgsr.innerHTML = '<img src="' + json.file + '">';
}
async function imgAll() {
  var res = await fetch("https://aws.random.cat/meow");
  var json = await res.json();
  console.log("changing inner HTML");
  div.innerHTML = '<img id= "all" src="' + json.file + '">';
}
//עד כאן פונקציות לייבוא חתולים

//התוכנית הראשית:
buttonStart.addEventListener("click", () => {
  //document.querySelector(".lds-ring").style.display = "none";

  //אם הכפתור לא לחוץ אז תבצע את הפונקציה
  if (!hasBeenClicked) {
    if (hasBeenClickedPause === false) {
      Seconds = document.querySelector("#Seconds");
      Minutes = document.querySelector("#Minutes");
      Seconds = +Seconds.value + 1;
      Minutes = +Minutes.value;
      hasBeenClickedPause = true;
    }

    if (Seconds > 59) {
      Seconds = 60;
    }
    if (Minutes > 59) {
      Minutes = 59;
    }

    clearInterval(numberIDinterval2); //מנקה את הריצה של הכפתור שמתחיל את התוכנית
    backGroundColors(div5, "rgb(255 242 12)", " rgb(58 236 0)"); //מריץ צבעים מסתובבים בהצגת הזמן
    numberIDinterval3 = numberIDinterval2; //שומר את מספר הזהות של האינטרוול שאחראי על הצבעים של השעון
    backGroundColors(buttonStop, "rgb(255 5 5)", "rgb(63 255 0)"); //מריץ צבעים מסתובבים בכפתור הסטופ

    numberIDinterval1 = setInterval(() => {
      console.log(numberIDinterval1);
      var color1 = getRandomColor();
      var color2 = getRandomColor();
      var color3 = getRandomColor();
      div.style.background = `linear-gradient(${color1}, ${color2},${color3})`;

      if (Seconds % 7 === 0) {
        //מעלה כל 7 דקות תמונת חתולים רנדומלית

        // imgsDown();
        imgsLeft();
        imgsRight();
      }

      if (Minutes !== 0 || Seconds !== 0) {
        //אם לא הגענו לסוף הטיימר אז
        deadTimeSeconds++; //מונה את הספירה של הזמן שעבר
        if (deadTimeSeconds === 60) {
          deadTimeMinutes++;
          deadTimeSeconds = 0;
        }
        Seconds--; //מורידים שניה
        if (Seconds === -1) {
          //אם השניות הגיעו ל0 אז
          Minutes--; //תוריד דקה
          Seconds = 59; //תוחליף את השניות מ0 ל59
        }
      } else {
        time.innerText = " ";
        time.style.display = "none";
        document.querySelector(".lds-ring").style.display = "inline-block";
        clearInterval(numberIDinterval1);
        clearInterval(numberIDinterval2);
        clearInterval(numberIDinterval3);
        audio.play();
        imgAll();
        //document.querySelector(".lds-ring").style.display = "none";
      }
      if (deadTimeSeconds < 10) {
        deadTime.innerText =
          "the past time:" + deadTimeMinutes + ":0" + deadTimeSeconds;
        deadTime.style.width = "90px";
        deadTime.style.height = "44px";
      } else {
        deadTime.innerText =
          "the past time:" + deadTimeMinutes + ":" + deadTimeSeconds;
        deadTime.style.width = "90px";
        deadTime.style.height = "44px";
      }
      if (Seconds < 10) {
        time.innerText = Minutes + ":0" + Seconds;
      } else {
        time.innerText = Minutes + ":" + Seconds;
      }
    }, 1000);

    //document.querySelector(".lds-ring").style.display = "inline-block";
    //imgAll();

    buttonStop.addEventListener("click", function (event) {
      hasBeenClicked = false;
      hasBeenClickedPause = false;
      deadTimeMinutes = 0;
      deadTimeSeconds = -1;

      clearInterval(numberIDinterval1);
      clearInterval(numberIDinterval2);
      clearInterval(numberIDinterval3);

      backGroundColors(buttonStart, "rgb(63 255 0)", "rgb(255 5 5)");
    });
    buttonPause.addEventListener("click", function (event) {
      console.log("1234567");
      hasBeenClicked = false;
      hasBeenClickedPause = true;
      clearInterval(numberIDinterval1);
      clearInterval(numberIDinterval2);
      clearInterval(numberIDinterval3);
    });
  }

  hasBeenClicked = true;
});
