
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [name , setName] = useState("");
    let [pass, setPass] = useState("");
    let [error , setError] = useState("");

    function func () {
        if(name=="" || pass=="") {
            setError("Both username and password are required.")
        }
        else if (name!=="" && pass!=="") {
            setError("");
        }
    }
    return (
        <div>
            <label for="name">Username:</label>
            <input type="text" onChange={(event)=>setName(event.target.value)} />
            <label for="password">Password:</label>
            <input type="password" onChange={(event)=>setPass(event.target.value)}/>
            <button onClick={func}>Login</button>
            {error && (<Error mess="Both username and password are required."/>)}
        </div>
    )
}

function Error (props) {
return (
    <p id="errorMessage">{props.mess}</p>
)
}

export default App
