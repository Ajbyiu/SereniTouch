
const selectAllCheckbox = document.getElementById("selectAll");
const serviceCheckboxes = document.querySelectorAll(".service-checkbox");

selectAllCheckbox.addEventListener("change", () => {
    serviceCheckboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
    calculateTotal();
});

serviceCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
        selectAllCheckbox.checked = Array.from(serviceCheckboxes).every(cb => cb.checked);
        calculateTotal();
    });
});

function calculateTotal() {
    let total = 0;
    serviceCheckboxes.forEach(cb => {
        if (cb.checked) total += parseFloat(cb.dataset.price);
    });
    document.getElementById("totalAmount").textContent = total.toFixed(2);
}


document.getElementById("showSummary")?.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting or reloading

    const summaryBox = document.getElementById("confirmationDetails");
    summaryBox.innerHTML = ""; // Clear previous content

    const selectedServices = Array.from(document.querySelectorAll(".service-checkbox:checked"));
    if (selectedServices.length === 0) {
        summaryBox.innerHTML = "<p>No services selected.</p>";
    } else {
        selectedServices.forEach(service => {
            const label = service.closest("tr").querySelector("td").textContent.trim();
            summaryBox.innerHTML += `<p>${label} - ₱${parseFloat(service.dataset.price).toFixed(2)}</p>`;
        });
    }

    document.getElementById("confirmationModal").style.display = "block"; // Show the modal
});

 
