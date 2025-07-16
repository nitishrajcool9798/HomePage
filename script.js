// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Basic JavaScript for any future interactivity, currently not required for static replication.
    // For example, if the play button were to open a modal:
    document.querySelector('.play-button').addEventListener('click', () => {
        // In a real application, you might open a video modal here
        console.log('Play button clicked!');
        // You could add a modal overlay or redirect to a video page
        // For this static example, we'll just log to console.
    });
});
function openModal() {
  document.getElementById("authModal").classList.remove("hidden");
  showLogin(); // Default to login form
}

function closeModal() {
  document.getElementById("authModal").classList.add("hidden");
  clearMessages();
}

function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  clearMessages();
}

function showLogin() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  clearMessages();
}

function clearMessages() {
  document.getElementById("loginMsg").textContent = "";
  document.getElementById("signupMsg").textContent = "";
}

function handleSignup(e) {
  e.preventDefault();
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;
  const msg = document.getElementById("signupMsg");

  if (password !== confirm) {
    msg.textContent = "Passwords do not match!";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "{}");
  if (users[username]) {
    msg.textContent = "Username already exists!";
    return;
  }

  users[username] = { password };
  localStorage.setItem("users", JSON.stringify(users));

  msg.textContent = "Signup successful! Please login.";
  msg.style.color = "lightgreen";

  setTimeout(showLogin, 1000);
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMsg");

  let users = JSON.parse(localStorage.getItem("users") || "{}");

  if (!users[username] || users[username].password !== password) {
    msg.textContent = "Invalid username or password!";
    return;
  }

  msg.textContent = "Login successful!";
  msg.style.color = "lightgreen";

  setTimeout(() => {
    closeModal();
    alert("Welcome, " + username + "!");
    // window.location.href = "dashboard.html"; // redirect if needed
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('video');
  const playBtn = document.getElementById('playBtn');

  if (video && playBtn) {
    playBtn.addEventListener('click', () => {
      video.play();
      playBtn.style.display = 'none';
    });
  }
});


