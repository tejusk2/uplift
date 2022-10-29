import { Button} from "@mui/material";
import { useState } from "react";
import { RegisterFormController } from "./RegisterFormController";
import { LoginFormController } from "./LoginFormController";
import { Link } from "react-router-dom";





export default function LoginForm(){
    const [register, setRegister] = useState(false)
    const handleAuthChange = () => setRegister(!register)

    
    
    

    return register ? (
        <>
            <RegisterFormController/>
            <Button onClick={handleAuthChange} variant = "text">{register  ? "log me in instead" : "create a new account"}</Button>
            <Button component = {Link} to={'/'}>Go Back</Button>
        </>
        
    ) : (
        <>
            <LoginFormController/>
            <Button onClick={handleAuthChange} variant = "text">{register  ? "log me in instead" : "create a new account"}</Button>
            <Button component = {Link} to={'/'}>Go Back</Button>
        </> 
    )
}