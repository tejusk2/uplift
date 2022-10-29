import {Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Loon from "../assets/sampleBaloon.png"
import Blank from "../assets/blank.png"

import Loon2 from "../assets/sampleBaloon2.png"
import Loon3 from "../assets/sampleBaloon3.png"
import Loon4 from "../assets/sampleBaloon4.png"



export default function Balloon({title, altitude, _id, type}){
    const navigate = useNavigate()
    function navPost(){
        navigate(`/posts/${_id}`)
    }
    const colorList = [Loon, Loon2, Loon3, Loon4]
    return title === "" ? (
        <span key={_id}>
            <img src={Blank} alt="" loading="lazy"/>
            
        </span>
    ) : (
            <span key={_id} onClick={navPost} style={{cursor:'pointer'}}>
                <Stack style={{textAlign:'center'}}>
                    <img
                        src={`${colorList[parseInt(type)]}?w=225&fit=crop&auto=format`}
                        srcSet={`${colorList[parseInt(type)]}?w=225&fit=crop&auto=format&dpr=2 2x`}
                        alt=""
                        loading="lazy"
                    />
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="subtitle1">{altitude}'</Typography>
                </Stack>
            </span>
        )
}