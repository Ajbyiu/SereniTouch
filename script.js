document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const services = Array.from(document.getElementById("service").selectedOptions)
        .map(option => option.text)
        .join(", ");
    const notes = document.getElementById("notes").value;

    document.getElementById("bookingDetails").style.display = "none";
    document.getElementById("bookingSuccess").style.display = "block";

    document.getElementById("successName").textContent = name;
    document.getElementById("successEmail").textContent = email;
    document.getElementById("successPhone").textContent = phone;
    document.getElementById("successServices").textContent = services;
    document.getElementById("successDate").textContent = date;
    document.getElementById("successNotes").textContent = notes || "None";

    document.getElementById("bookingForm").reset();
});

function hideConfirmation() {
    document.getElementById("bookingSuccess").style.display = "none";
}
