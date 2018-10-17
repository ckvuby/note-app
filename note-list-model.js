(function(exports) {
    function NoteList() {
        this._noteStore = []
    }
    exports.NoteList = NoteList;
})(this);

NoteList.prototype.seeList = function() {
    return this._noteStore;
}

NoteList.prototype.addNoteObj = function(obj) {
    this._noteStore.push(obj);
}

NoteList.prototype.makeNote = function(str) {
    var x = new Note();
    x.add(str);
    
    this._noteStore.push(x)
    // console.log('im inside makeNote', x, this._noteStore)
}

