describe('NoteList',() => {
  describe('show',() => {
    it('Shows list of notes', ()=> {
      var noteList = new NoteList()
      noteList.add('This is my fist note')
      expect(noteList.slist()[0]).isInstanceOf(Note)
    })
  })
})