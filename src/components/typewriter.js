import React from "react"


class TypeWriter extends React.Component {
  constructor(props) {
  super(props);
  this.typeWriter = this.typeWriter.bind(this);
  this.state = {
    i: 0,
    text: '',
  };
}
//   var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */
//
 typeWriter() {
   var i = this.state.i;
   var txt2= this.state.text;
 if (i < this.props.title.length) {
   txt2 = txt2 + this.props.title.charAt(i);
   this.setState({text:txt2})
   i++;
   this.setState({i: i})
   setTimeout(this.typeWriter, this.props.speed);
 }

}
  componentDidMount() {
   this.typeWriter()
 }
  render() {
    return (
      <>
            <h1>{this.state.text}</h1>
      </>
    )
  }
}

export default TypeWriter
