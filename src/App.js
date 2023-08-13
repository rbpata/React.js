import './App.css';
import { useState } from 'react';
import Login from './login';
function App() {
  // const [name, setName] = useState("");
  // const [tnc, setTnc] = useState(false);
  // const [intrest, setInterest] = useState("");
  // function getFormData(e) {

  //   console.log(name, tnc, intrest)
  //   e.preventDefault();

  // }
  // return (

  //   // <div className="App">
  //   //   <h1>Handle Form in React</h1>
  //   //   <form onSubmit={getFormData}>
  //   //     <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} />
  //   //     <select onChange={(e) => setInterest(e.target.value)}>
  //   //       <option>Select Options</option>
  //   //       <option>Marvel</option>
  //   //       <option>DC</option>
  //   //     </select> <br /><br />
  //   //     <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and</span>
  //   //     <br /><br />
  //   //     <button type="submit">Submit</button>
  //   //     <button> clear</button>

  //   //   </form>
  //   // </div>
  // );


  // froms validations 

  return(
<div>
    <Login/>
</div>
    

  );

}
export default App;
