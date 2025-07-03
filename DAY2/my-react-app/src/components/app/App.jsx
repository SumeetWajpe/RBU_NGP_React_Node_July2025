import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import FMessage from "../functional/message.functional";
import Counter from "../functional/counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     // return <ListOfCourses />;
//     return (
//       <div>
//         <FMessage msg="Hello" />
//         <FMessage msg="Hey" />
//         <FMessage msg="Hola" />
//       </div>
//     );
//   }
// }

export default App;
