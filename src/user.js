import React,{useEffect,useState} from 'react';
function User(props) {
  useEffect(() =>{
    alert("Count is :- "+props.count);

  },[props.count,props.data]);
  return (
    <div className="App">
      <h2>Count = {props.count}</h2>
      <h2>Data = {props.data}</h2>
    </div>
  );
}


export default User;
