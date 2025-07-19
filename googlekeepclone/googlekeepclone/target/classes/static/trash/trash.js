window.addEventListener("DOMContentLoaded", () => {
    const email = localStorage.getItem("email");
    document.querySelector(".profile_text").textContent = email;

    // Fetch archived notes
    fetch(`/api/notes/trash?email=${email}`)
        .then(response => response.json())
        .then(notes => {
            notes.forEach(note => renderNote(note.content));
        })
        .catch(error => console.error("Error fetching archived notes:", error));
});

function renderNote(content) {
    const noteContainer = document.querySelector(".data");

    const noteDiv = document.createElement("div");
    noteDiv.classList.add("data_inside");
    noteDiv.innerHTML = `
        <p>${content}</p>
    `;

    noteContainer.appendChild(noteDiv);
}
