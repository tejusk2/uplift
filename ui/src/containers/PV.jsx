
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../services/postServices";
import { useNavigate } from "react-router-dom";
import {Box, Grid } from "@mui/material";
import StoryPaper from "../components/StoryPaper";

export default function PV(){
    const {postId} = useParams()
    const navigate = useNavigate()
    const [post, setPost] =  useState({})
    useEffect(()=>{
       getStory(postId).then((stat)=>{
        if(stat.status === 'failed')navigate('/pagenotfound')
        
        if(stat.status === 'ok')setPost(stat.info)
       }) 
    },[navigate, postId])
    return(
        <Box>
            <Grid spacing = {2} container alignItems='center' justifyContent='center' style={{ height: '92vh' }}>
                <StoryPaper {...post} />
            </Grid>
        </Box>
    )
}