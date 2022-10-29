import React from 'react';
import {useFormik} from 'formik';
import { Stack, Button, Typography, TextField, Alert } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from "@mui/material/InputAdornment";
import { handleLogin } from '../services/userServices';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext';


export const LoginFormController = () => {
    const [err,setErr] = useState(false);
    const navigate = useNavigate();
    const {setUserData} = useUser();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        
        onSubmit: (values) => {
            
            handleLogin(values.username, values.password).then((stat)=>{
                
                if(stat.status === 'failed'){
                    setErr(true)
                }
                if(stat.status === 'authenticated'){
                    setErr(false)
                    setUserData(stat.data)
                    navigate('/')
                }
            })
            
    },
    });
    return(
        <Stack textAlign={"center"} spacing = {2} sx={{width:{md: 800, sm:250, xs:250}}}>        
                <form onSubmit={formik.handleSubmit}>
                    <Typography  sx={{mb:2}} variant="h4">Login</Typography>
                    <TextField value={formik.values.username}
                        onChange={formik.handleChange}
                        id="username" name="username" fullWidth type="text" label="username" sx={{mb:2}} InputProps={{startAdornment: (<InputAdornment position="start"><PersonIcon /></InputAdornment>)}}/>
                    
                    <TextField value={formik.values.password}
                        onChange={formik.handleChange}
                        id="password" name="password" fullWidth type="password" label="password" sx= {{mb:2}} InputProps={{startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>)}}/>
                    
                    <Button type="submit" fullWidth variant = "contained">Submit</Button> 
                </form>
                {err ? <Alert severity = "error">Authentication Failed</Alert> : null}
        </Stack>
    )
};