// (function(viewNote){
//   function Note(){
//     this.note =note;
//   }
//   viewNote.Note = Note;

// })(this);
//CLASS NOTEPAD

function Note (text){
  this.text = text ||"Some text to start";
 
}
Note.prototype = (function(){
  function content(){
    return this.text;
  }
});