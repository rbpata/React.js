import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  let arr = ["ram","mihir"];
  arr.map((item)=>{

    console.log(item);

  })
  return (
    <div className="App">
      <h1>hello world</h1>

      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button as="input" type="button" value="Input" />{' '}
      <Button as="input" type="submit" value="Submit" />{' '}

   

    </div>
  );
}

export default App;
