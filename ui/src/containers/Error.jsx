import { Box, Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
export default function Error(){
    return(
        <Box>
            <Grid container spacing={2} alignItems='center'
                justifyContent='center'
                textAlign="center"
                style={{ height: '100%' }}>
                    <Typography variant="h1">Error 404: Page Not Found</Typography>
                    <Button component={Link} to={'/'}>Take Me Home!!!</Button>
            </Grid>
        </Box>
    )
}