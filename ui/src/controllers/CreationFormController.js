import React, { useEffect } from 'react';
import {useFormik} from 'formik';
import { Stack, Button, Typography, TextField, Alert, IconButton, Paper} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as Yup from 'yup';
import ReactMarkdown from 'react-markdown'
import { useState } from 'react';
import { postStory } from '../services/postServices';
const CreationSchema = Yup.object({
    title: Yup.string()
      .min(4, 'Too Short!')
      .max(100, 'Too Long!')
      .required('Required'),
    text: Yup.string()
      .min(4, 'Too Short!')
      .max(4000, 'Too Long!')
      .required('Required'),
  });

export const CreationFormController = () => {
    const {userData} = useUser(); 
    const navigate = useNavigate();
    const [preview, setPreview] = useState(false)
    function handlePreview(){setPreview(!preview)}
    function idrk(){setPreview(false)}
    useEffect(()=>{
        if(!userData.username){
            navigate('/')
        }
    },[userData, navigate])
    
    
    const formik = useFormik({
        initialValues: {
            title: '',
            text: '',
        },
        validationSchema: CreationSchema,
        onSubmit: (values) => {
            
          postStory(values.title ,values.text, userData.username).then((stat)=>{
                if(stat.status === 'ok'){
                    navigate(`/posts/${stat.post}`)
                    console.log(stat)
                }else{
                    console.log(stat)
                }

          })
          
            
    },
    });
    return(
        <>
            <Stack textAlign={"center"} spacing = {2} sx={{width:{md: 800, sm:250, xs:250}}}>        
                    <form onSubmit={formik.handleSubmit}>
                        <Typography  sx={{mb:2}} variant="h4">Write an Uplifting Story</Typography>
                        <TextField value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                            id="title" name="title" fullWidth type="text" label="title" sx={{mb:2}}/>
                        
                        {!preview ? <TextField value={formik.values.text}
                            onChange={formik.handleChange}
                            error={formik.touched.text && Boolean(formik.errors.text)}
                            helperText={formik.touched.text && formik.errors.text}
                            id="text" name="text" fullWidth type="password" multiline label="body" sx= {{mb:2}}/> : 
                            <Paper variant='outlined' sx={{mb:2}}>
                                <ReactMarkdown>{formik.values.text}</ReactMarkdown>
                            </Paper>
                        }
                        <Button onClick={idrk} type="submit" fullWidth variant = "contained">Submit</Button> 
                    </form>
                    <Alert severity = "info">Body is rendered in Markdown</Alert>
            </Stack>
            <IconButton onClick={handlePreview}>
                <VisibilityIcon/>
            </IconButton>
        </>

    )
};