

//login form popup
document.getElementById("loginLink").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("loginPopup").style.display = "block"; // Show the login popup
});
