(function(exports) {
    function Note() {
        this.noteList = 'Hi';
        this._noteList = []

    };
    
    exports.Note = Note;
})(this);


Note.prototype.add = function(text) {
    this._noteList.push(text);

};

Note.prototype.displayNotes = function () {
    return this._noteList
};
