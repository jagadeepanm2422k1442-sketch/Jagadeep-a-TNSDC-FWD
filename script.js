// Typing effect for name
const text = "Jagadeep A";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 150);
  }
}

window.onload = typingEffect;