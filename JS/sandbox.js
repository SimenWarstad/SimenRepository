function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password != confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    alert("Passwords match");
    return true;
  } 