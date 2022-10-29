import { Box, Card, CardContent, Grid} from "@mui/material";
import LoginForm from "../controllers/LoginForm";
export default function Login(){
    
    return(
        <Box>
            
            <Grid container
                spacing={1}
                alignItems='center'
                justifyContent='center'
                style={{ height: '92vh' }}
            >
                
                <Card variant = "outlined" sx={{pl:1,pr:1 }}>
                    <CardContent>
                        <LoginForm/>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    );
}