// Correct Answers

const correctAnswers = {
  q1: "def",

  q2: "list",

  q3: "#",

  q4: "append",

  q5: "print",
};

// Timer

let timeLeft = 300;

let examSubmitted = false;

const timer = setInterval(function () {
  if (timeLeft <= 0) {
    clearInterval(timer);

    if (!examSubmitted) {
      submitExam();
    }

    return;
  }

  timeLeft--;

  let minutes = Math.floor(timeLeft / 60);

  let seconds = timeLeft % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.getElementById("timer").textContent = minutes + ":" + seconds;
}, 1000);

// Submit Exam

function submitExam() {
  if (examSubmitted) {
    return;
  }

  examSubmitted = true;

  clearInterval(timer);

  let score = 0;

  let totalQuestions = Object.keys(correctAnswers).length;

  // Check answers

  for (let question in correctAnswers) {
    const selectedAnswer = document.querySelector(
      `input[name="${question}"]:checked`,
    );

    if (selectedAnswer && selectedAnswer.value === correctAnswers[question]) {
      score++;
    }
  }

  // Calculate percentage

  const percentage = (score / totalQuestions) * 100;

  // Display score

  document.getElementById("score").textContent =
    "Score: " + score + " / " + totalQuestions;

  document.getElementById("percentage").textContent =
    "Percentage: " + percentage + "%";

  // Pass / Fail

  if (percentage >= 50) {
    document.getElementById("status").textContent = "Status: Passed 🎉";
  } else {
    document.getElementById("status").textContent = "Status: Failed ❌";
  }

  // Show result

  document.getElementById("result").style.display = "block";

  // Disable submit button

  document.getElementById("submitBtn").disabled = true;
}
