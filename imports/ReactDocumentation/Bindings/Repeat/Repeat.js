import { PrismCode } from "react-prism";
Repeat({
  basicColors: ["red", "green", "blue"],
  colors: [
    { id: "red", name: "Red" },
    { id: "green", name: "Green" },
    { id: "blue", name: "Blue" }
  ],
  render() {
    <div class="ui segment">
      <h2 class="ui header">repeat</h2>
      <a class="anchor active" id="BindingsRepeat" />
      <p>
        This binding will repeat the element for each element in an array. You
        can use the 'key' binding to specify which property of the objects in
        the array is the unique key. If you don't specify a key then the array
        index is used.
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="repeat: collection"`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`b="repeat: collection, key: property"`}</PrismCode>

      <h3>repeat components</h3>

      <p>Let's say you have list of colors:</p>
      <PrismCode component="pre" className="language-javascript">{`  colors:[
    { id: 'red' , name: 'Red' },
    { id: 'green' , name: 'Green' },
    { id: 'blue' , name: 'Blue' }
  ]`}</PrismCode>

      <p>And a component to display each individual color:</p>
      <PrismCode component="pre" className="language-javascript">{`Color({
  id: '',
  name: '',
  render() {
    <label b="text: name, style: { color: id }" />
  }
});`}</PrismCode>

      <hr />
      <p>
        You can display each color using a map (without the repeat binding):
      </p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`{this.colors().map((repeatObject, repeatIndex) => {
  return <Color {...repeatObject} key={repeatObject.id} />
})}`}</PrismCode>
      {this.colors().map((repeatObject, repeatIndex) => {
        return <Color {...repeatObject} key={repeatObject.id} />;
      })}

      <hr />
      <p>Of course you can simplify that by using the repeat binding:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`<Color b="repeat: colors, key: id" />`}</PrismCode>
      <Color b="repeat: colors, key: id" />

      <p>
        What happens here is that the Color component receives all the
        properties of the array objects. In this case they are "id" and "name".
        The key React should use is the property "id".
      </p>

      <h3>repeatObject and repeatIndex</h3>
      <p>
        Sometimes the sub-component's properties don't match the objects you're
        iterating upon. Other times you need access to the position/index of the
        object. For those cases the repeat binding gives you access to the
        repeatObject and repeatIndex variables. So if your color object looks
        like this:
      </p>

      <PrismCode
        component="pre"
        className="language-javascript"
      >{`ColorPosition({
  position: 0,
  rgb: '',
  name: '',
  render() {
    <label b="text: position + ':' + name + ' ', style: { color: rgb }" />
  }
});`}</PrismCode>

      <p>You can repeat the object like this:</p>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`<ColorPosition b="repeat: colors, key: id" rgb={repeatObject.id} position={repeatIndex} />`}</PrismCode>
      <ColorPosition
        b="repeat: colors, key: id"
        rgb={repeatObject.id}
        position={repeatIndex}
      />

      <p>
        In this case we're passing rgb and position explicitly and the name is
        passed with the rest of the object properties.
      </p>

      <h3>repeat html elements</h3>
      <p>
        Now let's say you don't want to create a component just to display the
        colors. You can use the repeat binding on regular elements and use
        repeatObject and repeatIndex to get the information you want.
      </p>
      <PrismCode component="pre" className="language-javascript">{`      <ul>
        <li b="repeat: colors, text: repeatIndex + ':' + repeatObject.name + ' ', style: { color: repeatObject.id }" />
      </ul>
`}</PrismCode>
      <ul>
        <li b="repeat: colors, text: repeatIndex + ':' + repeatObject.name + ' ', style: { color: repeatObject.id }" />
      </ul>

      <h3>primitives</h3>
      <p>
        You can use repeatObject when looping through an array of primitive
        types, like strings:
      </p>
      <PrismCode component="pre" className="language-javascript">{`basicColors:[
  'red',
  'green',
  'blue'
]`}</PrismCode>
      <PrismCode
        component="pre"
        className="language-javascript"
      >{`<Color b="repeat: basicColors" name={repeatObject} id={repeatObject} />`}</PrismCode>
      <Color b="repeat: basicColors" name={repeatObject} id={repeatObject} />

      <h3>Inner blocks</h3>
      <p>You can include jsx blocks inside the repeat item:</p>
      <ul>
        <li b="repeat: basicColors">
          <div b="text: repeatObject" />
        </li>
      </ul>

      <PrismCode component="pre" className="language-javascript">{`Example({
  colors: [
    'red',
    'green',
    'blue'
  ],
  render() {
    <ul>
      <li b="repeat: colors">
        <div b="text: repeatObject" />
      </li>
    </ul>
  }
});`}</PrismCode>
    </div>;
  }
});
