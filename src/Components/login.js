import {useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'


function Login(){
    const btn={
        width:'130px',
        height:'30px',
        marginTop:'3%'
    }
    
    let history = useHistory();
    const login = (()=>{
        history.push("./home");
    })

    
    return(
        <div className="container">
            <h1>LOG IN</h1>
            <input type="Email" placeholder="Email"/><br></br>
            <input type="Password"  placeholder="Enter Password"/><br></br>
            <button style={btn} onClick={login}>Log In</button>

            <span>Dont have an account</span> <span>
                
                <Link to="/sign-up">Create an Account</Link> 

                </span>

        </div>

    )
}


export default Login;