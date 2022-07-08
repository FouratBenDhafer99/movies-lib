import React from "react";
import {AppBar, IconButton, Stack, Switch, Toolbar, Typography} from "@mui/material";
import {DarkMode, LightMode, MovieFilter} from "@mui/icons-material";

function Navbar (props){

    const changeMode =(event: React.ChangeEvent<HTMLInputElement>)=>{
        props.onChange(event.target.checked?'dark':'')
    }

    return(
        <AppBar position="static">
            <Toolbar className="bg-purple-700 dark:bg-black">
                <IconButton size="large" edge="start" aria-label="logo" color="inherit">
                    <MovieFilter/>
                </IconButton>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                    MoviesLib
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Stack direction="row" alignItems="center">
                        <LightMode/><Switch color="primary" onChange={changeMode}/><DarkMode/>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;