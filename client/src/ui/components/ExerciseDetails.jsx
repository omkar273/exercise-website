import { fetchYoutubeData, openInNewTab } from '@/helper/helper_functions'
import { Button, Chip, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayArrow } from '@mui/icons-material'

const ExerciseDetails = ({ exercise }) => {
    const [thumbnailUrl, setthumbnailUrl] = useState('')
    const navigate = useNavigate();
    const ytUrl = exercise.videoURL[0];

    useEffect(() => {
        setthumbnailUrl(ytUrl);
    }, [])

    return (
        <div className='w-full min-w-full flex'>
            <Box className='w-[60%]'>
                <video className='w-full h-fit object-cover cursor-pointer hover:opacity-80 transition-all '
                    src={thumbnailUrl}
                    onClick={() => openInNewTab(thumbnailUrl)} />

                <Box className='w-full py-[1rem] px-[2%]'>
                    <Box
                        onClick={() => openInNewTab(ytUrl)}
                        className=' inline-flex px-1 text-white font-serif text-center border-2 border-red-50 rounded-full align-middle p-1'
                    >
                        <IconButton>
                            <PlayArrow color='primary' />
                        </IconButton>
                        <Typography
                            variant='h3'
                            fontFamily={'serif'}
                            fontWeight={600}
                            pr={'0.25rem'}
                            color={'ButtonText'}
                            textAlign={'center'}>
                            Play
                        </Typography>
                    </Box>
                </Box>

            </Box>
            <Box className='w-[40%]'>
                <Typography
                    variant='h1'
                    fontWeight={600}
                    p={'1.25rem 0 2rem 0'}
                    textAlign={'center'}>
                    {exercise.exercise_name}
                </Typography>

                {exercise.steps.map((step, index) => {
                    return <Box className='w-full px-[5%] py-2 flex align-middle'>
                        <Typography
                            variant='h4'
                            fontWeight={600}
                            alignItems={'center'}>
                            {index + 1 + '. '}
                        </Typography>

                        <Typography
                            variant='h6'
                            fontWeight={600}
                            textAlign={'start'}
                            key={index}>
                            {step}
                        </Typography>
                    </Box>
                })}
            </Box>
        </div>
    )
}

export default ExerciseDetails
