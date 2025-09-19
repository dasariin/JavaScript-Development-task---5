const paragraphs = [
  "Programming is the art of telling a computer what to do through instructions.",
  "JavaScript is a versatile language used for web development and beyond.",
  "Practice typing every day to improve your speed and accuracy.",
  "Learning new skills opens up opportunities for personal and professional growth."
];

let startTime;
let selectedParagraph;

window.onload = () => {
  selectedParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
  document.getElementById("paragraph").innerText = selectedParagraph;
  startTime = new Date();
};

function finishTest() {
  const typedText = document.getElementById("typedText").value;
  const endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000 / 60; // minutes

  const wordsTyped = typedText.trim().split(/\s+/).length;
  const wpm = Math.round(wordsTyped / timeTaken);

  const originalWords = selectedParagraph.split(/\s+/);
  const typedWords = typedText.split(/\s+/);

  let errors = 0;
  for (let i = 0; i < typedWords.length; i++) {
    if (typedWords[i] !== originalWords[i]) {
      errors++;
    }
  }

  document.getElementById("result").innerHTML = `
    <p><strong>Time Taken:</strong> ${timeTaken.toFixed(2)} minutes</p>
    <p><strong>Words Per Minute (WPM):</strong> ${wpm}</p>
    <p><strong>Errors:</strong> ${errors}</p>
  `;
}
