import { Box, Grid, Card, CardContent } from "@mui/material"
import CreationForm from "../controllers/CreationForm"


export default function PostCreator(){
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
                        <CreationForm/>
                    </CardContent>
                </Card>
            </Grid>
        </Box>
    )
}