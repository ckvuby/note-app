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
    x = []
    console.log('this is note list:', this.list)
    this.list._noteStore.forEach(function(note) {
        console.log('this is each element in the note list array', note)
        note._noteList.forEach(function(noteStr) {
            console.log('this is each element in the note array', noteStr)
            y.push(noteStr) 
        })
    })
    console.log(y)
    var open = '<li>'
    var close = '</li>'
     y.forEach(function(j) {
        console.log(open + j + close)
        x.push(open + j + close)
     })
     var start = '<ul><div>'
     var end = '</div></ul>'
     tt = x.join("")
     ss = start + tt + end
    console.log(x)
    console.log(ss)
};