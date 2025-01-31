function finishGame() {
  clearInterval(timer);  // Stop the timer
  input_area.disabled = true;  // Disable input area
  quote_text.textContent = "Click on restart to start a new game.";  // Finishing text
  restart_btn.style.display = "block";  // Show restart button

  // Calculate CPM, WPM, and accuracy
  const cpm = Math.round(((characterTyped / timeElapsed) * 60));
  const wpm = Math.round((((characterTyped / 5) / timeElapsed) * 60));
  const accuracy = Math.round(((characterTyped - total_errors) / characterTyped) * 100);

  // Update text on page
  cpm_text.textContent = cpm;
  wpm_text.textContent = wpm;
  accuracy_text.textContent = accuracy + "%";
  cpm_group.style.display = "block";
  wpm_group.style.display = "block";

  // Feedback based on accuracy
  let feedbackMessage = "";
  let improvementTips = ""; // Tips for improvement

  if (accuracy === 100) {
      feedbackMessage = "Wow! You achieved 100% accuracy! 🎉 That's amazing!";
      improvementTips = "1. Keep practicing to maintain this level of accuracy.\n"
                      + "2. Challenge yourself to increase your typing speed while keeping up the great work!";
  } else if (accuracy >= 90) {
      feedbackMessage = "Great job! Your accuracy is impressive. 😊";
      improvementTips = "1. Try typing longer texts to build your endurance.\n"
                      + "2. Work on maintaining your speed while minimizing small errors.\n"
                      + "3. Consider practicing touch typing to further enhance your skills.";
  } else if (accuracy >= 75) {
      feedbackMessage = "Good effort! You're doing well, but there's room to grow. 👍";
      improvementTips = "1. Focus on reducing those small mistakes—every little bit helps!\n"
                      + "2. Type more frequently to develop muscle memory.\n"
                      + "3. Use typing tools to challenge your speed and precision.";
  } else if (accuracy >= 50) {
      feedbackMessage = "You're making progress! Let's work on improving further. 🌱";
      improvementTips = "1. Slow down a bit and focus on each keypress to enhance your accuracy.\n"
                      + "2. Use games or apps specifically designed to boost typing accuracy.\n"
                      + "3. Try typing shorter sentences to build your confidence.";
  } else {
      feedbackMessage = "Don't worry! Everyone starts somewhere. Keep practicing! 💪";
      improvementTips = "1. Start with basic typing exercises to build a solid foundation.\n"
                      + "2. Prioritize accuracy over speed for now—it's perfectly fine to take your time.\n"
                      + "3. Gradually increase your speed while keeping errors low.\n"
                      + "4. Consider taking short typing lessons online to reinforce your skills.";
  }

  // Display feedback and improvement tips
  const feedback_text = document.getElementById("feedback_text"); // Ensure correct ID
  feedback_text.innerHTML = `<p>${feedbackMessage}</p><p>${improvementTips.replace(/\n/g, "<br>")}</p>`; // Replace newline with <br> for HTML
  feedback_text.style.display = "block";  // Show feedback

  // Strengths and weaknesses analysis
  let strengths = "";
  let weaknesses = "";

  // Strengths based on CPM, WPM, and Accuracy
  if (wpm >= 80 && accuracy >= 90) {
      strengths += "🌟 1. Fantastic typing speed and accuracy! You’re a typing superstar!\n";
  } else if (wpm >= 60) {
      strengths += "🌟 1. Good typing speed; keep up the good work!\n";
  }

  if (accuracy >= 90) {
      strengths += "🌟 2. Excellent attention to detail with high accuracy.\n";
  }
  

  // Weaknesses based on CPM, WPM, and Accuracy
  if (wpm < 40) {
      weaknesses += "❗ 1. Consider focusing on increasing your typing speed for better efficiency. Small, regular practice sessions can help!\n";
  }

  if (total_errors > 10) { // Adjust the threshold as needed
      weaknesses += "❗ 2. Aim to reduce errors—practicing specific challenging words or phrases can be beneficial.\n";
  }
  if (accuracy <= 70) {
    weaknesses += "❗ 3. Excellent attention to detail with high accuracy.\n";
}

  // Display strengths and weaknesses
  const analysis_text = document.getElementById("analysis_text"); // Ensure correct ID
  analysis_text.innerHTML = `<div class="strengths"><p><strong>🌟 Strengths:</strong></p><p>${strengths.replace(/\n/g, "<br>")}</p></div>
                             <div class="weaknesses"><p><strong>⚠️ Weaknesses:</strong></p><p>${weaknesses.replace(/\n/g, "<br>") || "No significant weaknesses noted. Keep it up!"}</p></div>`;
  analysis_text.style.display = "flex";  // Show analysis
}
