import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useMediaQuery } from '@mui/material';

const CircularSliderWithBar = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [sliderValue, setSliderValue] = useState<number>(0);
    const [circularSliderValue, setCircularSliderValue] = useState<number>(0);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        event.preventDefault()
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
            setCircularSliderValue(newValue * 10);
        }
    };

    return (
        <Box sx={{ marginTop: '5rem' }} >
            <Box width={isMobile ? '50%' : '40%'} sx={{ margin: 'auto' }}>
                <div style={{border:'5px dotted white', borderRadius:'100%', padding:'1rem'}}>
                <CircularProgressbarWithChildren 
                   value={circularSliderValue}
                   styles={{
                    background: {
                        fill: "#819DA8", // Change this color to the one you want
                      },
                    path: {
                        stroke: "#fff", // White stroke color
                        filter: "drop-shadow(0 0 .5px rgba(255, 255, 255, 1))", // Add a white shadow
                    },
                  }}
                >
                    <div style={{position: 'relative'}}>
                        <img style={{ width: 90, marginTop: 0 }} src="/earth3.png" alt="doge" />
                    </div>
                    <div style={{ fontSize: '3rem', position: 'absolute', top: `${isMobile ? '5rem' : '7rem'}` }}>
                        <h4>{sliderValue}</h4>
                    </div>
                </CircularProgressbarWithChildren>
                </div>
               
            </Box>

            <Box sx={{ width: '40%', margin: 'auto', marginTop: '5rem' }}>
                <Slider
                    sx={{ color: '#6CDBE6',  height: 10 }}
                    value={sliderValue}
                    aria-label="Default"
                    onChange={handleSliderChange}
                    min={0}
                    max={10}
                    step={1}
                    size="small"
                />
            </Box>

        </Box>
    )
}

export default CircularSliderWithBar