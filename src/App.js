import React, { useEffect, useState } from "react";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import UserList from './UserList'

function App() {
  const [userList, setUserList] = useState();
  const [error, setError] = useState(null);
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
 
.then(res=>{setUserList(res.data); console.log(res.data)})
.catch(err=>{setError(err); console.log(error)})
},[])

  return (
    <div className="App">
      <NavBar/>
      <UserList userList={userList}/>
    </div>
  );
}

export default App;
