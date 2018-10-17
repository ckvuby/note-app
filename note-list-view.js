(function(exports){
    function ViewNote(list) {
        this.list = list
        this.noteTable = ['help me']
    }
    exports.ViewNote = ViewNote;
    // exports.noteTable = this.noteTable;
})(this);

ViewNote.prototype.noteToWeb = function() {
    y = []
    console.log('this is note list:', this.list)
    this.list._noteStore.forEach(function(note) {
        console.log('this is each element in the note list array', note)
        note._noteList.forEach(function(noteStr) {
            console.log('this is each element in the note array', noteStr)
            y.push(noteStr) 
        })
    })
    console.log(y)
    // i = ""
    //  noteTable.forEach(function(j) {
    //     i + '<li>' + j + '</li>'
    //  })
    //  console.log('<ul>' + i + '</ul>')
    //  return '<ul>' + i + '</ul>'
};