import { Outlet } from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Box, CssBaseline } from "@mui/material";
import { indigo } from "@mui/material/colors";
import UserProvider from "../contexts/UserContext";
import HomeProvider from "../contexts/HomeContext";
export default function Layout(){
    const theme = createTheme({
        palette : {
            primary : {
                main: indigo[300],
                contrastText: "white"
            }
        },
        overrides: {
            MuiButton: {
              root: {
                borderRadius: '50%',
              }, 
            }, 
          }, 
    })      
    
    return(
        <>
            <ThemeProvider theme = {theme}>
                <CssBaseline enableColorScheme>                
                    <UserProvider>
                        <HomeProvider>
                        
                            <main>
                                <Box sx={{ height: { xs: '', sm: '92vh', md: '92vh' } }}>
                                    <Outlet />
                                </Box>
                            </main>
                            
                        </HomeProvider>
                    </UserProvider>
                </CssBaseline>
            </ThemeProvider>
        </>
    )
}