import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import TextForm from  './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
 const [mode, setmode] = useState('light')
 const [alert, setAlert] = useState(null)

 const showAlert = (message , type) =>{
      setAlert ({
        message: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
                 
 }
  const toggleMode = ()=>{
   if (mode === 'light') {
     setmode('dark');
     
     document.body.style.backgroundColor = '#06353c';
     document.body.style.color = 'white';
     showAlert("Dark mode Enable" , "success"); 
     
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("ligth mode Enable" , "success"); 
       
      }
 }
  return (
 <>
 {/* <Router> */}
< Navbar title = "mYtxt-app" title2="About Us" titlecontact="Contact Us" mode={mode} toggleMode={toggleMode} /> 
{/* <Navbar /> */}

<div className="container">
<Alert Alert={alert}/>
{/* <Switch>
          <Route path="/about">
          <About about = "About Us"/>
            
          </Route>
     
          <Route path="/">
           
          </Route>
        </Switch> */}
<TextForm  showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
</div>

{/* </Router> */}
</>
  ); 
}

export default App;
