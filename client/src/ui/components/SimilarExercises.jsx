import { fetchData } from '@/helper/helper_functions';
import React, { useEffect, useState } from 'react'
import ExerciseVideoCards from './ExerciseVideoCards';
import { Box } from '@mui/material';

const SimilarExercises = ({ category }) => {

    const [isLoading, setisLoading] = useState(false);
    const [Exercises, setExercises] = useState([])

    useEffect(() => {
        const searchExerciseByCategory = async () => {
            setisLoading(true)
            const searchedExercise = await fetchData({ category: category });
            setExercises(searchedExercise);
            setisLoading(false)
        }
        searchExerciseByCategory()
        console.log(`no of exercises found : ${Exercises.length}`);
    }, [category])

    return (
        <div>
            <div id='slider' className='relative items-center flex justify-center px-6 scrollbar-hide'>
                <Box className='w-full h-full overflow-x-scroll scroll scroll-smooth flex scrollbar-hide gap-12 justify-start py-10 whitespace-nowrap'>
                    {Exercises.map((exercise, index) => { return <ExerciseVideoCards exercise={exercise} key={index} /> })}
                </Box>

            </div>

        </div>
    )
}

export default SimilarExercises
