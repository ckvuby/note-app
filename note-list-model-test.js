function emptyNoteStore() {
    var noteList = new NoteList()
    expect.isEmpty(noteList._noteStore.length === 0)
};

emptyNoteStore();

function seeAllNotes() {
    var note = new Note();
    var noteList = new NoteList(note);
    noteList._noteStore = ['hello']
    expect.toContain(noteList.seeList().length > 0)
};
seeAllNotes();

function addNote() {
    var note = new Note();
    var noteList = new NoteList()
    note.add('hello');
    note.add('dim sum')
    noteList.addNoteObj(note);
    console.log(noteList._noteStore)
    expect.toIncludeStr(noteList._noteStore[0]._noteList, 'hello');
    expect.toIncludeStr(noteList._noteStore[0]._noteList, 'dim sum');
};
addNote();