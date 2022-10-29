import { Box, Container, Typography, Stack, Fab, Tooltip} from "@mui/material"
import { useEffect, useState } from "react"
import Balloon from "../components/Balloon"
import ButtonRowController from "../controllers/ButtonRowController"
import { homeQuery } from "../services/postServices"
import Masonry from '@mui/lab/Masonry';
import { useUser } from "../contexts/UserContext"
import { pink, indigo, red } from "@mui/material/colors"
import MoodIcon from '@mui/icons-material/Mood';
import HeightIcon from '@mui/icons-material/Height';
import SquareIcon from '@mui/icons-material/Square'
import PersonIcon from '@mui/icons-material/Person';
export default function Home(){
    
    const {userData} = useUser();
    const [itemData, setItemData] = useState([])
    const [sort, setSort] = useState(true)
    const [uD, setUD] = useState({})

    useEffect(()=>{
        setUD(userData)
        homeQuery(sort).then((data)=>{
            setItemData(data.list)
            generatePositions(data.list)
        })
    },[sort, userData])

    function changeSort(){
        setSort(!sort)
        homeQuery(!sort).then((data)=>{
            setItemData(data.list)
            generatePositions(data.list)
        })
        
    }
    
    function generatePositions(info){
        let temp = []
        for(var i = 0; i<info.length; i++){
            const pos = parseInt(Math.random()*4);//0,1,2,3
            const {happinessScore} = info[i]
            let color;
            if(happinessScore[2] > 75){
                color = 1
            }else if(happinessScore[2] > 50){
                color = 0
            }else if(happinessScore[2] > 25){
                color = 2
            }else{
                color = 3
            }
            
            for(var j=0; j<pos; j++){
                temp.push({id:21,title:"", altitude: 0})
            }
                const item = info[i]
                item.type = color;
                temp.push(item)

            for(var k=pos; k<3;k++){
                temp.push({id:21,title:"", altitude: 0})
            }
            
        }
        
        setItemData(temp)
    }
    return(
        <Box>
            
            <ButtonRowController/>
            
            <Stack sx={{m:1}} justifyContent='start' direction="row" spacing={1}>
                
                <Tooltip title={sort ? " sorting by altitude" : " sorting by happiness score"}><Fab onClick={changeSort} color="primary">{!sort ? <HeightIcon/> : <MoodIcon/>}</Fab></Tooltip>
                <Tooltip title={uD.username ? uD.username + "-" + uD.points + " points" : ""}><Fab color="primary" disabled={!uD.username ? true : false} ><PersonIcon/></Fab></Tooltip>
            </Stack>
            
            <Stack direction="row" spacing={2} justifyContent='flex-end'>
                <Typography>Happiness Score:</Typography>

                <Stack direction='row'><SquareIcon style={{color: pink[200]}}/><Typography> 75%-100%</Typography></Stack>
                <Stack direction='row'><SquareIcon style={{color: indigo[300]}}/><Typography> 50%-75%</Typography></Stack>
                <Stack direction='row'><SquareIcon style={{color: '#70463e'}}/><Typography> 25%-50%</Typography></Stack>
                <Stack direction='row'><SquareIcon style={{color: red[500]}}/><Typography> 0%-25%</Typography></Stack>
            </Stack>
            <Container style={{textAlign:'center'}}>
                <Typography variant = "h4">{userData.username ? "Welcome " + userData.username + "!" : ""}</Typography>
                <Masonry spacing={6} cols={4}>
                        {itemData.map((item) => (
                            <Balloon {...item} />
                        ))}
                </Masonry>
            </Container>
        </Box>
            
    )
}