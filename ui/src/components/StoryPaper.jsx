import {IconButton, Paper, Stack, Typography, Chip} from "@mui/material";
import ReactMarkdown from "react-markdown";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useUser } from '../contexts/UserContext';
import { useEffect, useState } from "react";
import { raisePost, gradePost } from "../services/postServices";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import SentimentNeutralOutlinedIcon from '@mui/icons-material/SentimentNeutralOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

export default function StoryPaper({altitude, creator, createdAt, title, text, _id}){
    
    const date = new Date(createdAt).toDateString();
    
    const {userData, setUserData} = useUser()
    const [likable, setLikable] = useState(true)
    const [rateable, setRateable] = useState(true)
    const [al, setAl] = useState(altitude)


    function likePost(){
        if(likable){
            raisePost(userData.username, _id)
            setLikable(false)
            setUserData({liked: userData.liked.push(_id), ...userData})
            setAl(al+50)
            
        }
    }
    function dislike(){
        setHappiness(5)
    }
    function nuetral(){
        setHappiness(15)
    }
    function happy(){
        setHappiness(30)
    }

    function setHappiness(num){
        if(rateable){
            //console.log(num)
            gradePost(userData.username, _id, num)
            setRateable(false)
            setUserData({rated: userData.rated.push(_id), ...userData})
        }
    }
    useEffect(()=>{
        if(!al){
            setAl(altitude)
        }
        
        if(userData.username){
            const liked = userData.liked;
            const rated = userData.rated
            if(!liked){
                setLikable(true)
            }else if(liked.includes(_id)){
                setLikable(false)
            }
            if(!rated){
                setRateable(true)
            }else if(rated.includes(_id)){
                setRateable(false)
            }

        }else{
            setLikable(false)
            setRateable(false)
        }
    }, [userData,likable, _id, altitude, al])
        
    return(
       <>
        <Paper square variant="outlined" sx={{width:{xl: 1300 ,lg: 1000 ,md:800, sm:600, xs:300}}} style={{borderLeft:'60px solid rgb(170, 183, 254)'}}>
                    <IconButton component={Link} to ='/'><HomeIcon/></IconButton>
                    <IconButton  color={'primary'} disabled={!likable} onClick={likePost}><ThumbUpOffAltIcon/></IconButton>

                    <Stack direction="row" style={{justifyContent:"end"}}>
                        <IconButton color={'primary'} disabled={!rateable} onClick={dislike}><SentimentDissatisfiedOutlinedIcon/></IconButton>
                        <IconButton color={'primary'} disabled={!rateable} onClick={nuetral}><SentimentNeutralOutlinedIcon/></IconButton>
                        <IconButton color={'primary'} disabled={!rateable} onClick={happy}><SentimentSatisfiedOutlinedIcon/></IconButton>
                    </Stack>
                <Stack spacing={1} style={{textAlign:'center'}}>
                    <Typography variant="h3" >{title}</Typography>                
                    <ReactMarkdown>{text}</ReactMarkdown>
                </Stack>
                <Stack spacing={2} direction="row" style={{justifyContent:"end"}}>
                    <Chip icon={<ArrowUpwardIcon/>} label={`Altitude - ${al}'`}/>
                    <Chip icon={<PersonIcon/>} label={`Creator - ${creator}`}/>
                    <Chip icon={<CalendarMonthIcon/>} label={date} />
                </Stack>
        </Paper>
       </>
            
        
    )  
}