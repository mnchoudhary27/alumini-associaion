document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const year = document.getElementById("year").value;
    const branch = document.getElementById("branch").value;

    // Simple validation (can be expanded as needed)
    if (name === "" || email === "" || phone === "" || year === "" || branch === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Here, you can send the data to the server or display a success message
    alert("Registration successful!");

    // Optionally, reset the form
    document.getElementById("registrationForm").reset();
});
