import { Box, Button, Typography ,Link, useMediaQuery} from "@mui/material";

export default function App(){

    const friendtab = useMediaQuery('(max-width:1200px)');
    return(
        <>
        {friendtab?(''):(<Box  sx={{fontSize:'12px',textDecoration:'none'}}>
            <Link variant="text" sx={{textDecoration:'none'}} href='#Privacy'>  Privacy </Link>
            <Link variant="text" sx={{textDecoration:'none'}} href='#Terms'> · Terms </Link>
            <Link variant="text" sx={{textDecoration:'none'}} href='#Advertising'> · Advertising </Link>
            <Link variant="text" sx={{textDecoration:'none'}} href='#Ad'> · Ad Choices </Link>
            <Link variant="text" sx={{textDecoration:'none'}} href='#Cookies'> · Cookies </Link>
            <Link variant="text" sx={{textDecoration:'none'}} href='#More'> · More </Link>
            <Link variant="text" sx={{textDecoration:'none'}} href='#Meta'> · Meta © 2024 </Link>
        </Box>)}
        
        </>
    )
}