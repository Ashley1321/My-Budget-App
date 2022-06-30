import React, {useState} from "react";
import {useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../config/firebase"


function Signup(){

    const btn={
        width:'130px',
        height:'30px',
        marginTop:'3%'
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    let history = useHistory();

    const Register = ()=>{

        createUserWithEmailAndPassword(auth,email,password).then(()=>{
            history.push("./home");
        }).catch((error)=>{
            console.log(error);
        })

    };


    return(
        <div className="container">
            <h1>Sign UP</h1>
            <input type="Email" placeholder="Enter Email"  onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="Password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/><br></br>
            <button style={btn} onClick={Register}>Sign Up</button>
        </div>

    )
}

export default Signup;