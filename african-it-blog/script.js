function SeeLess(){
const details = document.getElementById("first-div");
      const myButton = Event.target;

      if (details.style.display === "none") {
        details.style.display = "block";
        myButton.textContent = "Read Less...";
      } else {
        details.style.display = "none";
        myButton.textContent = "Read More...";
      }

}
