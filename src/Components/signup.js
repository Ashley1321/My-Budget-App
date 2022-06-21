import {useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'


function Signup(){

    const btn={
        width:'130px',
        height:'30px',
        marginTop:'3%'
    }
    
    let history = useHistory();

    const Register = ()=>{
        history.push("./home");
    }
    return(
        <div className="container">
            <h1>Sign UP</h1>
            <input type="Email" placeholder="Enter Email"/><br></br>
            <input type="Password" placeholder="Enter Password"/><br></br>
            <button style={btn} onClick={Register}>Sign Up</button>
        </div>

    )
}

export default Signup;