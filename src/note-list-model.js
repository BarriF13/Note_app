'use strict'

function NoteList(){
  this.list = [];//array for holding all the notes
};

NoteList.prototype= (function(){
  function showList(){
    return this.list;
  }

  function add(text){
    var note = new Note(text)
    this.list.push(note)
  } 

  return {
    showList: showList,
    add: add
  };

})();