// Get the button that opens the dropdown
var dropdownBtn = document.querySelector(".dropbtn");

// Add a click event listener to the button
dropdownBtn.addEventListener("click", function () {
    // Toggle the class "show" on the dropdown-content element
    document.querySelector(".dropdown-content").classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdown = document.querySelector(".dropdown-content");
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
        }
    }
});
