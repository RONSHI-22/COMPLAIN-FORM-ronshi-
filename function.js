document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("complainForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const complaint = {
            username: document.getElementById("username").value,
            gender: document.getElementById("gender").value,
            message: document.getElementById("complainBox").value,
            time: new Date().toLocaleString()
        };

        let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
        complaints.push(complaint);

        localStorage.setItem("complaints", JSON.stringify(complaints));

        alert("Complaint submitted!");
        form.reset();
    });
});
