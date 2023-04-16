import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    const navigate = useNavigate();

    return (
        <Box onClick={() => navigate(`/exercises/${exercise.id}`)}
            className='w-60 rounded-b-lg bg-white border-y-4   border-t-red-600 hover:scale-105 hover:opacity-90'>
            <Typography
                variant='h3'
                fontWeight={600}
                p={'1.25rem 0 2rem 0'}
                textAlign={'center'}>
                {exercise.exercise_name}
            </Typography>

            <Box className='px-5 pb-8' >
                <Typography
                    variant='body1'
                    fontSize={'1rem'}
                    fontWeight={600}
                >
                    {exercise.Difficulty}
                </Typography>
                <Typography
                    variant='body1'
                    fontSize={'1rem'}
                    fontWeight={600}
                >
                    {exercise.Category}
                </Typography>
                <Typography
                    variant='body1'
                    fontSize={'1rem'}
                    fontWeight={600}
                >
                    {exercise.target.Primary[0]}
                </Typography>
                <Typography
                    variant='body1'
                    fontSize={'1rem'}
                    fontWeight={600}
                >
                    Fitness Club
                </Typography>
            </Box>

        </Box>
    )
}

export default ExerciseCard
