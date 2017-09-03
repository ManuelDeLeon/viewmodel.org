List({
  colors: [
    { id: 1, color: "Red" },
    { id: 2, color: "Green"},
    { id: 3, color: "Blue"}
  ],
  render(){
    <ul>
      <ListItem b="repeat: colors, key: id" />
    </ul>
  }
})