import "./App.css";
import jsondata from './data.json'
import { useState } from "react";

function App() {
  const [searchTerm,setSearchTerm] = useState('')
  
  return(
    <div className="App">
      <input type = "text" placeholder="Search.." onChange={event => {setSearchTerm(event.target.value)}}></input>
      {jsondata.filter((val)=>{
    if (searchTerm == "") {
      return val
    } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
    }
  }).map((val,key)=> {
    return (
    <div className="User" key={key}>
      <p>{val.first_name}</p>
    </div>
    );
  })
  }
    </div>
  )
}

export default App;