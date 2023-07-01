
import React from "react";
import './../styles/App.css';

const App = ()=> {
    let [name , setName] = useState("");
    let [pass, setPass] = useState("");
    let [error , setError] = useState("");

    function func () {
        if(name=="" || pass=="") {
            setError("Both username and password are required")
        }
    }
    return (
        <div>
            <label for="name">Username:</label>
            <input type="text" onChange={(event)=>setName(event.target.value)} />
            <label for="password">Password:</label>
            <input type="password" onChange={(event)=>setPass(event.target.value)}/>
            <button onClick={func}>Login</button>
            <p id="errorMessage">{error}</p>
        </div>
    )
}

export default App
