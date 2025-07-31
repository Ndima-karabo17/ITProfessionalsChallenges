function SeeLess(event) {
  const details = document.getElementById("first-div");
  const myButton = event.target;

  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "flex";
    myButton.textContent = "SEE LESS...";
  } else {
    details.style.display = "none";
    myButton.textContent = "SEE MORE...";
  }
}
