// Handler for the "change" event of the "rememberMe" checkbox
const rememberMeCheckbox = document.getElementById("rememberMe");
rememberMeCheckbox.addEventListener("change", function () {
  // If the checkbox is checked, save the user's email and password to local storage
  if (rememberMeCheckbox.checked) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  } else {
    // If the checkbox is unchecked, remove the user's email and password from local storage
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
});

// Check if the user's email and password are saved in local storage
if (localStorage.getItem("email") && localStorage.getItem("password")) {
  // Pre-populate the email and password fields
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("password").value = localStorage.getItem("password");

  // Check the "rememberMe" checkbox
  document.getElementById("Le").checked = true;
}
