// function FMessage() {
//   return <h1> Hello !</h1>;
// }

// var FMessage = function () {
//   return <h1> Hey !</h1>;
// };

var FMessage = props => <h1> {props.msg}</h1>;

export default FMessage;
