People({
  selected: '',
  people: [
    { id: 1, name: "Alan"},
    { id: 2, name: "Brito"}
  ],
  render() {
    <div>
      <ul>
        <Person b="repeat: people, key: id" />
      </ul>
      Selected: <span b="text: selected" />
    </div>
  }
})