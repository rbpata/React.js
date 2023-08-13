import './App.css';
import React from 'react';
function App() {
  const [status, setStatus] = React.useState(false);

  return (
    <div className="App">
      {
        status?
      <h1>hello world</h1>: null
}
      <button onClick={()=>setStatus(true)}>Show</button>
      <button onClick={()=>setStatus(false)}>Hide</button>
    </div>
  );
}

export default App;
