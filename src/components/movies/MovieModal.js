import React from "react";
import {Box, Modal, Typography} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const imgStyle={
    marginLeft: 'auto',
    marginRight: 'auto',
}

const MovieModal= ({open, handleClose, movie, mode}) =>{
    return(
        <Modal open={open} onClose={handleClose} className={mode}>
            <Box style={style} className="bg-white text-black dark:bg-zinc-800 dark:text-white border-2 rounded-2xl p-7">
                <img style={imgStyle} alt={movie.title+" cover picture"} className="w-3/4 pb-4" src={process.env.REACT_APP_IMG_BASE_URL+movie.backdrop_path}/>
                <Typography variant="h4" component="h2">
                    {movie.title}
                </Typography>
                <Typography variant="h7" component="h2">
                    {movie.release_date}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {movie.overview}
                </Typography>
            </Box>
        </Modal>
    )
}

export default MovieModal;