import React from "react";
import {Grid} from "@mui/material";

const MoviesList= ({children}) =>{
    return (
        <Grid container justifyContent="center"  spacing={4} className="">
            {children}
        </Grid>
    )
}

export default MoviesList;