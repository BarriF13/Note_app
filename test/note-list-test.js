describe('NoteList',() => {
  describe('showList',() => {
  it('Shows list of notes', ()=> {
    var noteList = new NoteList()
    noteList.add('This is my fist note')
    expect(noteList.showList()[0]).isInstanceOf(Note)
  })
  })
})