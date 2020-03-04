describe('View Note List', ()=>{
  describe('.toHTML', ()=>{
    it ('Converts and outputs notes to html strings' , ()=> {
        var noteList = new NoteList()
        noteList.add('Favourite car: Aston Martin DBX')
        noteList.add('Favourite drink: Louis Roederer Cristal Champagne')
        var noteListView = new noteListView(noteList)

      var expectedOutput = '<ul><li><div>Favourite car: Aston Martin DBX</div></li><li><div>Favourite drink: Louis Roederer Cristal Champagne</div></li></ul>'
      expect(noteListView.toHTML()).toEq(expectedOutput)

    })
  })
})