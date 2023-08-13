import logo from './logo.svg';
import './App.css';
// import User from './User_func';
import User from './user_class';
// or 
// import React,{Component} from 'react'
function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <User/>
      <User/>
      <User/>
    </div>
  );
}

// function User() { //you can use that way also
//   return (
//     <div className="App">
//       <h1>hello Users!!</h1>
//     </div>
//   );
// }

// ->>this way we can also write class component
// class User extends Component{

//   render(){
//       return(
//           <h1>HEllo User</h1>
//       )
//   }

// }

export default App;
