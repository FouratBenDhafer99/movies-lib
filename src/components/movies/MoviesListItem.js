import React, {useState} from "react";
import {Grid} from "@mui/material";
import MovieModal from "./MovieModal";
import {Grade} from "@mui/icons-material";


const voteAverageStyle={
    marginLeft: '0px'
}

const MoviesListItem= ( {movie, mode}) =>{

    const [open, setOpen]= useState(false);

    const handleOpen= () => setOpen(true)
    const handleClose= () => setOpen(false)

    return (
        <div>
            <Grid item onClick={handleOpen}
                  className="dark:text-white  items-center font-mono rounded-2xl space-x-6 p-6 w-64 group hover:scale-110 ease-in duration-500 cursor-pointer">
                <img src={process.env.REACT_APP_IMG_BASE_URL+movie.poster_path}
                     alt="Movie poster"
                     className="relative rounded-2xl"
                     width="100%" ></img>
                <span style={voteAverageStyle} className="absolute m-[-270px] bg-zinc-800 text-white bg-opacity-80 rounded-r-3xl pl-2 pr-2 pb-1 pt-1">  <Grade/> {movie.vote_average}</span>
                <h2 className="">{movie.title}</h2>
            </Grid>
            <MovieModal open={open} movie={movie} mode={mode} handleClose={handleClose}/>
        </div>
    )
}

export default MoviesListItem;