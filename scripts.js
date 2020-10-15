// Write your JavaScript code here.
// Remember to pay attention to page loading!
// window.onload = (event) => {
//   console.log("Page is fully loaded");
// };

function init() {
  console.log("Page is fully loaded");

  const takeOff = document.getElementById("takeoff");
  takeOff.addEventListener("click", function (e) {
    confirmTakeoff = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (confirmTakeoff) {
      flightStatus = document.getElementById("flightStatus");
      flightStatus.innerHTML = "Shuttle in flight.";

      shuttleBG = document.getElementById("shuttleBackground");
      shuttleBG.style.backgroundColor = "blue";

      height = document.getElementById("spaceShuttleHeight");
      height.innerHTML = 10000;
    }
  });

  const landing = document.getElementById("landing");
  landing.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBG.style.backgroundColor = "green";
    height.innerHTML = 0;
  });

  const abort = document.getElementById("missionAbort");
  abort.addEventListener("click", function () {
    confirmAbbort = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (confirmAbbort) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBG.style.backgroundColor = "green";
      height.innerHTML = 0;
    }
  });

  const rocket = document.getElementById("rocket");
  rocket.style.position = "relative";
  rocket.style.right = "10px";
  rocket.style.top = "10px";

  const buttons = document.querySelectorAll(".directions");

  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
      target = e.currentTarget;

      console.log(target);

      if (target.innerText === "Left") {
        rocket.style.right = parseInt(rocket.style.right) + 10 + "px";
      }
      if (target.innerText === "Right") {
        rocket.style.right = parseInt(rocket.style.right) - 10 + "px";
      }
      if (target.innerText === "Up") {
        rocket.style.top = parseInt(rocket.style.top) - 10 + "px";
        height = document.getElementById("spaceShuttleHeight");
        console.dir(height);
        height.innerHTML = parseInt(height.innerHTML) + 10000;
      }
      if (target.innerText === "Down") {
        rocket.style.top = parseInt(rocket.style.top) + 10 + "px";
        height = document.getElementById("spaceShuttleHeight");
        console.dir(height);
        height.innerHTML = parseInt(height.innerHTML) - 10000;
      }
    });
  }
}
window.onload = init;
