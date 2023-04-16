import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import FlexBetween from './FlexBetween';
import { useTheme } from '@emotion/react';
import logo from '@/assets/website_logo.jpg'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    const isNonMobileScreen = useMediaQuery('(min-width: 600px)')

    return (
        <FlexBetween
            sx={{
                position: '-webkit-sticky',
                top: 0, left: 0,
                backgroundColor: palette.background.alt,
                width: "100%",
                p: '0.5rem 2.5%'
            }}>
            <FlexBetween
                direction={'row'}
                onClick={() => navigate('/')}
                cursor={'pointer'}
            >
                <img
                    style={{ width: '80px', height: 'auto', borderRadius: '50%', cursor: 'pointer' }}
                    src={logo}
                />
                <Typography
                    noWrap
                    sx={{
                        fontFamily: 'serif',
                        alignItems: 'center',
                        fontSize: '2rem',
                        "&:hover": {
                            cursor: 'pointer'
                        }
                    }}>
                    GYM boi
                </Typography>
            </FlexBetween>

            {isNonMobileScreen &&
                <Stack gap={'1.5rem'} direction={'row'}>
                    <Typography sx={{
                        fontSize: '1.25rem',
                        cursor: 'pointer',
                        "&:hover": {
                            // textDecorationLine: 'underline',
                            borderBottom: '3px solid #ff2625',
                            transform: 'scale(1.05)',
                        }
                    }}
                    >
                        Home
                    </Typography>
                    <Typography
                        onClick={() => {
                            document.getElementById('exercises').scrollIntoView({ behavior: 'smooth' });
                        }}
                        sx={{
                            fontSize: '1.25rem',
                            "&:hover": {
                                borderBottom: '3px solid #ff2625',
                                // textDecorationLine: 'underline',
                                transform: 'scale(1.05)',
                                cursor: 'pointer'
                            }
                        }}>
                        Exercises
                    </Typography>
                </Stack >}
        </FlexBetween >
    )
}

export default NavBar;
