 
const tips = [
      "Take 5 deep breaths right now.",
      "Go outside for a few minutes — fresh air helps.",
      "Jot down 3 things you're thankful for today.",
      "Put your phone down for 30 minutes.",
      "Check in with a friend. A short call counts.",
      "Listen to your favorite song and really enjoy it.",
      "Say something kind to yourself today.",
      "Drink water and stretch your arms and legs.",
      "Give yourself permission to rest.",
      "You are doing better than you think."
    ];

function showTip() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("daily-tip").innerText = tip;
} 