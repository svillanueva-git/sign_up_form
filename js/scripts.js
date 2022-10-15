
const passMatch = document.getElementById("confirm-pwd");

passMatch.addEventListener("input", (event) => {
  const pw1 = document.getElementById("pwd");
  if (passMatch.value != pw1.value) {
    passMatch.setCustomValidity("Passwords do not match!");
    passMatch.reportValidity();
  } else {
    passMatch.setCustomValidity("");
  }
});