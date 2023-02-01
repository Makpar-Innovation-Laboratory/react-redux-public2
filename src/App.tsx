import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import Dashboard from './components/dashboard/dashboard';
// import Preferences from './components/preferences/preferences';
 import Login from './components/login/login'

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />
  }

  const handleClick = async () => {
    const data = await fetch('https://6vuj1jpl91.execute-api.us-east-1.amazonaws.com/prod/cognito', {
      mode: "no-cors",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    console.log(data)
    return
  };


  return (
    <div className="wrapper">
      <h1>Application</h1>
      <button onClick={() => handleClick()}></button>
      <h3>{dataA}</h3>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
