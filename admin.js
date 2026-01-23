function loadComplaints() {
    const container = document.getElementById("complaints");
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    container.innerHTML = "";

    if (complaints.length === 0) {
        container.innerHTML = "<p>No complaints yet.</p>";
        return;
    }

    // 🔥 Newest complaints appear on TOP
    complaints.slice().reverse().forEach(c => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <strong>User:</strong> ${c.username}<br>
            <strong>Gender:</strong> ${c.gender}<br>
            <strong>Complaint:</strong> ${c.message}<br>
            <small>${c.time}</small>
        `;

        container.appendChild(card);
    });
}

function clearComplaints() {
    localStorage.removeItem("complaints");
    loadComplaints();
}

// Load complaints when page opens
document.addEventListener("DOMContentLoaded", loadComplaints);
