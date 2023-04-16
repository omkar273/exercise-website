import ExerciseCard from '@/ui/widgets/ExerciseCard';
import ExerciseDetails from '@/ui/components/ExerciseDetails';
import ExerciseVideos from '@/ui/components/ExerciseVideos';
import NavBar from '@/ui/components/NavBar';
import SimilarExercises from '@/ui/components/SimilarExercises';
import { Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ExerciseVideoCards from '@/ui/components/ExerciseVideoCards';

const ExerciseDetailsPage = () => {
    const [exerciseDetails, setexerciseDetails] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {

        const fetchExerciseData = async () => {

            try {
                const options = {
                    method: 'GET',
                    url: `https://musclewiki.p.rapidapi.com/exercises/${id}`,
                    headers: {
                        'X-RapidAPI-Key': '15d7e3c224msh61aa777ff871f58p1ea9fajsn0c97a33610ae',
                        'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
                    }
                };
                console.log(id);
                const searchedExercise = await axios.request(options);
                const data = await searchedExercise.data;
                setexerciseDetails(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchExerciseData()

    }, [id])


    return (
        <Box>
            <NavBar />
            {exerciseDetails != undefined && (<Box className='w-full py-[1.5rem] px-[2%] min-h-full'>
                <ExerciseDetails exercise={exerciseDetails} />
            </Box>)
            }
        </Box>
    )
}

export default ExerciseDetailsPage
