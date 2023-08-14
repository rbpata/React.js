import './App.css';
import React from 'react'
import {Table} from 'react-bootstrap'
function App() {
  const users = [
    { name: 'Ram', email: 'Ram@test.com', contact: '111' },
    { name: 'Burce', email: 'bruce@test.com', contact: '222' },
    { name: 'Peter', email: 'peter@test.com', contact: '111' },
    { name: 'Sam', email: 'sam@test.com', contact: '777' },
  ]
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped variant='white' >
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contacts</td>
        </tr>
        {
          users.map((item,i)=>
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
        <td>{item.contact}</td>
        </tr>
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;