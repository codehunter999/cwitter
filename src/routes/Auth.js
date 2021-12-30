import React, {useState} from "react";
import { authService } from "../firebase";


//자동으로 import 되는 코드
const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        console.log(event.target.name);
        const {target:{name,value}} = event;
        if(name === "email"){
            setEmail(value)
        } else if(name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
        //event.preventDefault(); 이벤트동작 무효화
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                // create account
                data = await authService.createUserWithEmailAndPassword(email, password);
            }else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch(error){
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
                <input type="submit" value={newAccount ? "Create Account" : "Sign In"}/>
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"} </span>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>    
        </div>
    );
}

export default Auth;
//export default () => <span>Auth</span>