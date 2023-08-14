import './App.css';
import React,{useEffect,useState} from 'react';
import User from './user';
function App() {

  const [count,setCount] = useState(0);
  const [data,setData] = useState(0);
  // useEffect(() =>{
  //   console.log("UseEffect")
  // },[data])
  // useEffect(() =>{
  //   console.log("UseEffect")
  // },[count])
  return (
    <div className="App">
      <User count={count} data = {data}/>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <button onClick={()=>setData(data+1)}>Increment data</button>
    </div>
  );
}


export default App;
