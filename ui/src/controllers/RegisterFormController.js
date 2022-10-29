import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Stack, Button, Typography, TextField, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from "@mui/material/InputAdornment";
import { handleRegister } from '../services/userServices';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext';
const SignupSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const RegisterFormController = () => {
    const [err,setErr] = useState(false);
    const navigate = useNavigate();
    const {setUserData} = useUser();
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {
            
            handleRegister(values.username,values.password,values.email).then((stat)=>{
                if(stat.status === 'error'){
                    setErr(true)
                }
                if(stat.status === 'ok'){
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
                    <Typography  sx={{mb:2}} variant="h4">Register</Typography>
                    <TextField value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} id="email" name="email" fullWidth type="email" label="email" sx={{mb:2}} InputProps={{startAdornment: (<InputAdornment position="start"><EmailIcon /></InputAdornment>)}}/>
                    
                    <TextField value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username} id="username" name="username" fullWidth type="text" label="username" sx={{mb:2}} InputProps={{startAdornment: (<InputAdornment position="start"><PersonIcon /></InputAdornment>)}}/>
                    
                    <TextField value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}id="password" name="password" fullWidth type="password" label="password" sx= {{mb:2}} InputProps={{startAdornment: (<InputAdornment position="start"><LockIcon /></InputAdornment>)}}/>
                    
                    <Button type="submit" fullWidth variant = "contained">Submit</Button> 
                </form>
                {err ? <Alert severity = "error">Username or Email Taken</Alert> : <Alert severity='info'>Please note that usernames and emails are unique</Alert>}
        </Stack>
    )
};