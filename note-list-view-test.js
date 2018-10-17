function returnHtmlStr() {
    urlStr = '<ul><li>hello is it me your looking for</li></ul>'
    // var note = new Note();
    var noteList = new NoteList();
    noteList.makeNote('hello is it me your looking for')
    // noteList.makeNote('din needs his coffee')
    
    var viewNote = new ViewNote(noteList);
    expect.toEqual(viewNote.noteToWeb() ,urlStr)
    };
    
    returnHtmlStr();
    