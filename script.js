const textArray = [
  "(M) Help! SOMEBODY HELP ME!",
  "(M) SOMEBODY! SOMEBODY HELP ME!!",
  "(M) HELP! SOMEBODY HELP ME!",
  "(F) Let's end all of this.",
  "(F) We don't need two Mimas!",
  "(M) I AM MIMA!",
  "(F) That's funny! Mima is a pop idol!",
  "(F) You're just a dirty old impostor!",
  "(M) LIKE I CARE! I AM WHO I AM!!",
];
const textContainer = document.getElementById("text-container");
let currentIndex = 0;

document.addEventListener("click", function (event) {
  const newText = textArray[currentIndex];
  const genderClass = newText.includes("(M)") ? "male" : "female";

  const newTextElement = document.createElement("span");
  newTextElement.className = genderClass;
  newTextElement.textContent = newText.slice(4);

  Object.assign(newTextElement.style, {
    position: "absolute",
    top: `${event.clientY}px`,
    left: `${event.clientX}px`,
  });

  textContainer.appendChild(newTextElement);
  currentIndex = (currentIndex + 1) % textArray.length;
});
