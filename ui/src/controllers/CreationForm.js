import { CreationFormController } from "./CreationFormController";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function CreationForm(){
    return(
        <>
            <CreationFormController/>
            <Button component = {Link} to={'/'}>Home</Button>
        </>
    )
}