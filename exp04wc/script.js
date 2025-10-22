function validateForm() {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let address = document.getElementById("address").value.trim();
  let message = document.getElementById("message");

  // First Name
  if (!/^[A-Za-z]{6,}$/.test(firstName)) {
    message.textContent = "❌ First Name must be alphabets and at least 6 characters long!";
    message.style.color = "red";
    return false;
  }

  // Last Name
  if (lastName === "") {
    message.textContent = "❌ Last Name cannot be empty!";
    message.style.color = "red";
    return false;
  }

  // Email
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    message.textContent = "❌ Invalid Email format!";
    message.style.color = "red";
    return false;
  }

  // Password
  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters!";
    message.style.color = "red";
    return false;
  }

  // Mobile Number
  if (!/^[0-9]{10}$/.test(mobile)) {
    message.textContent = "❌ Mobile number must be exactly 10 digits!";
    message.style.color = "red";
    return false;
  }

  // Address
  if (address === "") {
    message.textContent = "❌ Address cannot be empty!";
    message.style.color = "red";
    return false;
  }

  // Success
  message.textContent = "✅ Registration Successful!";
  message.style.color = "green";
  return false; // Prevent actual form submission (for demo)
}

