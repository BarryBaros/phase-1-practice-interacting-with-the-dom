let counterValue = 0;
let timerInterval;
let paused = false;

function increment() {
  counterValue++;
  updateCounter();
}

function decrement() {
  counterValue--;
  updateCounter();
}

function likeComment() {
  const likesList = document.getElementById("likes");
  const listItem = document.createElement("li");
  listItem.textContent = `Number ${counterValue} has been liked.`;
  likesList.appendChild(listItem);
}

function pauseCount() {
  const pauseButton = document.getElementById("pause");
  if (paused) {
    // Resume counter
    paused = false;
    pauseButton.textContent = "pause";
    timerInterval = setInterval(() => {
      if (!paused) {
        counterValue++;
        updateCounter();
      }
    }, 1000);
    enableButtons();
  } else {
    // Pause counter
    paused = true;
    pauseButton.textContent = "resume";
    clearInterval(timerInterval);
    disableButtons();
  }
}

function enableButtons() {
  document.getElementById("minus").disabled = false;
  document.getElementById("plus").disabled = false;
  document.getElementById("heart").disabled = false;
}

function disableButtons() {
  document.getElementById("minus").disabled = true;
  document.getElementById("plus").disabled = true;
  document.getElementById("heart").disabled = true;
}

function updateCounter() {
  document.getElementById("counter").textContent = counterValue;
}

function submitComment() {
     event.preventDefault();
  const commentInput = document.getElementById("comment-input");
  const commentText = commentInput.value;
  if (commentText.trim() !== "") {
    const commentList = document.getElementById("comment-list");
    const commentItem = document.createElement("div");
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);
    // Clear input
    commentInput.value = "";
  }
}

// Add event listener to the submit button
document
  .getElementById("submit-comment")
  .addEventListener("click", submitComment);

// Start timer
timerInterval = setInterval(() => {
  if (!paused) {
    counterValue++;
    updateCounter();
  }
}, 1000);
