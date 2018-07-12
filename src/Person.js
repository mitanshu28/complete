import React from 'react'
import './App.css'
function Person({info}) {
return(
  <div className="pond">
  <div className="card">
  <h1 className="PersonHeader">
  <span className="Initials">
{info.name.indexOf(' ')>=0 ? <span className="Initials-double">{info.name.substring(0,1)}{info.name.split(' ').slice(-1).join(' ').substring(0,1)}</span>:<span className="Initials-single">{info.name.substring(0,1)}</span>} 
    </span><span className="circle"/>
  <span className="Person-Name">{info.name}</span> </h1> 
    <p id="Recognition-Message">{info.recognitionMessage}</p>        
    </div>
    </div>

)
  }
export default Person