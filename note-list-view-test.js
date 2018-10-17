function returnHtmlStr() {
    urlStr = '<ul><li><div>hello is it me your looking for</div></li></ul>'
    // var note = new Note();
    var noteList = new NoteList();
    
    noteList.makeNote('hello is it me your looking for')
    // noteList.makeNote('din needs his coffee')

    var viewNote = new ViewNote(noteList);
    expect.isTrue(viewNote.noteToWeb() == urlStr)
};

returnHtmlStr();