document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const paymentMethod = document.getElementById("paymentMethod").value;

    // Simple validation (can be expanded as needed)
    if (name === "" || email === "" || amount === "" || paymentMethod === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Display a success message
    alert(`Thank you for your donation of ₹${amount}, ${name}! Your payment through ${paymentMethod} has been successfully processed.`);

    // Optionally, reset the form
    document.getElementById("donationForm").reset();
});
