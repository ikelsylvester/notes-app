function goToNewNotePage() {
    window.location.href = 'note.html';
}

function saveNote() {
    var title = document.getElementById('note-title').value.trim();
    var content = document.getElementById('note-content').value.trim();
    
    if (title === '' || content === '') {
        alert('Please enter a title and content for your note.');
        return;
    }
    
    // Here you can save the note to a database or perform any other desired action
    console.log('Note Title:', title);
    console.log('Note Content:', content);
    alert('Note saved successfully!');
}
