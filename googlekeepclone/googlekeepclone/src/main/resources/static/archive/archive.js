window.addEventListener("DOMContentLoaded", () => {
    const email = localStorage.getItem("email");
    document.querySelector(".profile_text").innerHTML = email;

    fetch(`http://localhost:8080/api/notes/archive?email=${email}`)
        .then(response => response.json())
        .then(notes => {
            notes.forEach(note => renderNote(note.content));
        })
        .catch(error => console.error("Error fetching archive notes:", error));
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
