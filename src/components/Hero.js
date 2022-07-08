import React, {useEffect, useState} from "react";
import {Box, Button, Paper} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

const heroStyle={
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
}
const arrowStyle={
    backgroundColor: 'transparent',
    cursor: 'pointer',
    height: '100%',
    width: '20%',
    position: 'absolute',
    zIndex: '999',
}
const contentStyle={
    position: 'absolute',
    padding: '3px',
    width: '60%',
}

const Hero = ({data}) =>{
    const [gallery, setGallery]= useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = (data.length/4)|0;

    const fillGallery =  async ()=>{
        let res=[],i=0
        while(i<data.length/4|0){
            let ran= data[ Math.floor(Math.random() *  data.length)]
            if(!res.includes(ran))
                res[i++]= ran
        }
        setGallery(res)
    }

    useEffect(()=>{
        fillGallery()
    }, [])

    const handleNext = () => setActiveStep( (prevActiveStep)=> prevActiveStep+1 )
    const handleBack = () => setActiveStep( (prevActiveStep)=> prevActiveStep-1 )
    const handleStepChange = (step) => setActiveStep(step)
    const autoScroll = true
    let stepInterval;
    let intervalTime=5000;
    function auto() {
        stepInterval = setInterval(activeStep===maxSteps?handleStepChange(0):handleNext, intervalTime);
    }
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(stepInterval);
    }, [activeStep]);

    return(
        <Box className="w-full relative bg-purple-50 dark:bg-zinc-700">
            <Button color="secondary" className="p-2" style={arrowStyle} onClick={handleBack} disabled={activeStep === 0} >
                <KeyboardArrowLeft/> Back
            </Button>
            <Button color="secondary" className=" right-0" style={arrowStyle} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next <KeyboardArrowRight/>
            </Button>

            {gallery.map( (movie, i)=>{return(
                <Box style={heroStyle} key={i} className={i===activeStep?" opacity-100":""} >
                    {
                        i===activeStep?
                            <Paper>
                                    <img  className="w-full" alt={movie.title+" cover picture"}
                                         src={process.env.REACT_APP_IMG_BASE_URL+movie.backdrop_path}/>
                                <span style={contentStyle} className="bg-zinc-800 -mt-10 bg-opacity-50 text-sm text-white text-center align-middle font-mono text-lg
                                 transition ease-in-out delay-150 hover:-translate-y-56 h-[264px] overflow-hidden">
                                    <h2 className="pb-2">{movie.title}</h2>
                                    <p>{movie.overview}</p>
                                </span>
                            </Paper>:
                            <div/>
                    }
                </Box>
            )})}
        </Box>
    )
}

export default Hero;