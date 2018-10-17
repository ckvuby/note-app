function showNote() {
    var note = new Note();
    expect.isTrue(note.noteList === 'Hi');
};
showNote();

function addNoteText() {
    var note = new Note();
    note.add("My fav language is JS")
    expect.isTrue(note._noteList[0] === "My fav language is JS");
}; 
addNoteText();

function displayNotes() {
    var note = new Note();
    note.add("My fav language is JS")
    expect.isTrue(note.displayNotes()[0] === "My fav language is JS");
}; 
displayNotes();
