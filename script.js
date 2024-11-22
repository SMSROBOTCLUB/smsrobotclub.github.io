// JavaScript for form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMsg');

  if (username === "roboticsuser" && password === "robot2425llclibrary") {
    alert("Login Successful!");
    window.location.href = "dashboard.html"; // Redirect to dashboard
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
