// Retrieve the note record from localStorage
let noteJson = localStorage.getItem('note');

// Check if noteJson is not null
if (noteJson) {
    // Parse the JSON string back into an object
    let note = JSON.parse(noteJson);

    // Extract text and date properties from the note object
    let text = note.text;
    let date = note.date;

    // Update the HTML content to display the text and date
    document.getElementById('note-text').textContent = text;
    document.getElementById('note-date').textContent = date;
} else {
    // Handle case where no note is found in localStorage
    alert("No note found in localStorage.");
}
