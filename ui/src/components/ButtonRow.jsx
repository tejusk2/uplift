import { Box, Fab, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
export default function ButtonRow({loggedIn}){
    const {setUserData} = useUser();
    function logout(){
        setUserData({})
        loggedIn = false;
    }
    return loggedIn ? (
        <Box sx={{ m:1}}>
            <Grid container spacing = {1}>
                <Grid item>
                    <Fab onClick={logout} color="primary" aria-label="edit">
                        <LogoutIcon /> 
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab component={Link} to="/create" color="primary" aria-label="edit">
                        <AddIcon />
                    </Fab>
                </Grid>
               

                
            </Grid>
            
        </Box>
    ):(
        <Box sx={{ m: 1 }}>
            <Grid container spacing = {1}>
                <Grid item>
                    <Fab component={Link} to = "/login" color="primary" aria-label="edit">
                        <LoginIcon /> 
                    </Fab>
                </Grid>
                <Grid item>
                    <Fab disabled color="primary" aria-label="edit">
                        <AddIcon />
                    </Fab>
                </Grid>
               

                
            </Grid>
            
        </Box>
    )
}