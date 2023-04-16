import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import bgImg from '@/assets/hero_bg_img.jpg'
import FlexBetween from './FlexBetween'

const HeroBanner = () => {
    const isNonMobileScreen = useMediaQuery('(min-width: 600px)')
    return (
        <FlexBetween display={'flex'}>
            <Box
                display={'inline-block'}
                sx={{ p: '4rem 4% 1rem 5%' }}>
                <Typography
                    variant='h3'
                    fontWeight={600}
                    color={'#ff2625'}>
                    Fitness Club
                </Typography>
                <Box p={'1.5rem 0'}>
                    <Typography
                        variant='h1'
                        fontWeight={600}>
                        Sweat , Smile
                    </Typography>
                    <Typography
                        variant='h1'
                        fontWeight={600}>
                        and Repeat
                    </Typography>
                    <Typography
                        p={'1.5rem 0'}
                        fontSize={'1.25rem'}
                        fontWeight={400}
                        color={'GrayText'}>
                        Checkout the most effective exercises
                    </Typography>
                    <Button
                        onClick={() => {
                            document.getElementById('searchBar').scrollIntoView({ behavior: 'smooth' });
                        }}
                        variant='contained' color='error' sx={{ p: '0.7rem', mt: '1rem' }}>
                        Explore exercises
                    </Button>
                </Box>

            </Box>
            {isNonMobileScreen && <img className='object-cover' src={bgImg} display={'inline-block'} />}
        </FlexBetween>
    )
}

export default HeroBanner
