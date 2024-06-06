
function goToNewNotePage() {
    window.location.href = "new_note.html";
}

function saveNote() {
    // Retrieve title and content from input fields
    let title = document.getElementById('note-title').value.trim();
    // let  = document.getElementById('note-content').value.trim();
    let text = document.getElementById('note-content').value.trim();
    
    // Check if title or content is empty
    if (title === '' || text === '') {
        alert('Please enter a title and content for your note.');
        return;
    }
    
    // Create a new Note object
    let newNote = {
        title: title,
        text: text,
        date: new Date().toLocaleString()
    };
    
    // Retrieve existing notes from local storage
    let existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    // Add the new note to the array of notes
    existingNotes.push(newNote);

    // Store the updated array of notes in local storage
    localStorage.setItem('notes', JSON.stringify(existingNotes));

    // Redirect to the new_note.html page
    window.location.href = "new_note.html";
}
