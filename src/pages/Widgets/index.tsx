import { Box, Grid } from '@mui/material'
import React from 'react'
import CircularSliderWithBar from '../../components/CircularSliderWithBar'
import { TypeAnimation } from 'react-type-animation'
import { useMediaQuery } from '@mui/material';
import VolumeBar from '../../components/VolumeBar';

const Widgets = () => {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isTablet = '(min-width: 768px)';
    return (
        <Box m={3} sx={{ textAlign: 'center' }}>
            <TypeAnimation
                sequence={[
                    'INTELLECT',
                    1000,
                    'INTELLECT ASSIGNMENT', //  Continuing previous Text
                    1000,
                    'INTELLECT',
                    1000,
                    '',
                    1000,
                ]}
                style={{ fontSize: `2.2rem`, fontWeight: 'bold' }}
                repeat={Infinity}
            />
            {/* <h2 className='heading-primary'>
                INTELLECT ASSIGNMENT
            </h2> */}
            <Grid container spacing={isMobile ? 10 : isTablet ? 10 :  2} mt={isMobile ? 0 : isTablet ? 1 : 10}>
                <Grid item xs={12} md={6} lg={6}>
                    <div style={{ textAlign: 'center' }}>
                        <h3 className='heading-secondary'>
                            WIDGET 1
                        </h3>
                        <CircularSliderWithBar />
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <div style={{textAlign: 'center' }}>
                        <h3 className="heading-secondary">
                            WIDGET 2
                        </h3>
                        <VolumeBar />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Widgets