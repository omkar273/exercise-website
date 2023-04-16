import { fetchData } from '@/helper/helper_functions';
import HeroBanner from '@/ui/components/HeroBanner.jsx';
import NavBar from '@/ui/components/NavBar';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { categories } from '@/Data/exerciseData'
import ExerciseCard from '@/ui/widgets/ExerciseCard';
import ReactPaginate from 'react-paginate';
import '@/pages/HomePage/homepage.css'
import { GridLoader } from 'react-spinners';
import gymExerciseLogo from '@/assets/transparent_gym_logo.png'

const HomePage = () => {


    const [query, setquery] = useState('')
    const [Exercises, setExercises] = useState([])
    const [pageNumber, setpageNumber] = useState(0)
    const [isLoading, setisLoading] = useState(false);

    const exercisesPerPage = 8;
    const pagesVisited = pageNumber * exercisesPerPage;
    const pageCount = Math.ceil(Exercises.length / exercisesPerPage);

    const onHandleSearch = async () => {
        const serchedExercise = await fetchData({ name: query });
        serchedExercise(serchedExercise);
        setquery('')
    }

    useEffect(() => {
        const fetchExerciseData = async () => {
            const searchedExercise = await fetchData();
            setExercises(searchedExercise);
        }
        fetchExerciseData()

    }, [])

    const slideLeft = () => {
        console.log(`slide left called`);
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;

    }
    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const handlePageChange = ({ selected }) => setpageNumber(selected);

    const searchExerciseByCategory = async (category) => {
        setisLoading(true)
        const searchedExercise = await fetchData({ category: category });
        setExercises(searchedExercise);
        setisLoading(false)
    }

    return (
        <Box fontFamily={'Play'} pb={'2rem'} className='overflow-hidden scroll-smooth scroll static scrollbar-hide'>
            <NavBar />
            <Box>
                <HeroBanner />


                {/* start of main homepage */}
                <Box pt={'3.5rem'}>
                    <Typography
                        align='center'
                        variant='h1'
                        fontWeight={600}>
                        Awesome Exercises You
                    </Typography>
                    <Typography
                        pt={'0.5rem'}
                        align='center'
                        variant='h1'
                        fontWeight={600}>
                        should know
                    </Typography>


                    {/* searchBar */}
                    <Box
                        id='searchBar'
                        justifyContent={'center'}
                        alignItems={'center'}
                        display={'flex'}
                        m={'1rem 0 '}
                        p={'0 10%'}>
                        <TextField placeholder='Search Exercises'
                            sx={{
                                input: {
                                    fontSize: '1rem'
                                },
                                width: '80%'
                            }}
                            onChange={(e) => setquery(e.target.value)}
                        />
                        <Button
                            variant='contained'
                            color='error'
                            onClick={() => {
                                alert(query)
                                onHandleSearch()
                            }}
                            sx={{ p: '1rem 2.5rem', ml: '0.25rem', height: '100%' }}>
                            Search
                        </Button>
                    </Box>

                    {/* horizontal scrollbar */}
                    <div id='slider' className='relative items-center flex justify-center px-6 scrollbar-hide'>

                        {/* left scroll button */}
                        <IconButton onClick={slideLeft} className='hover:opacity-90'>
                            <ChevronLeft sx={{ fontSize: '24px' }} />
                        </IconButton>

                        <Box className='w-full h-full overflow-x-scroll scroll scroll-smooth flex scrollbar-hide gap-12 justify-start py-10 whitespace-nowrap'>
                            {categories.map((category, index) => {
                                return (
                                    <Box
                                        onClick={() => searchExerciseByCategory(category)}
                                        className='bg-white rounded-sm border-y-4   border-t-red-600 mb-20 p-6'>
                                        <img
                                            src={gymExerciseLogo}
                                            height={'100px'}
                                            width={'100px'}
                                            className='flex justify-center w-full py-1 ' />
                                        <Typography
                                            className='w-[150px]  p-2 text-center break-words rounded cursor-pointer hover:scale-110 hover:opacity-70'
                                            key={index}

                                            variant='h5'
                                            fontWeight={600}
                                            fontSize={'1.2rem'}
                                            color={'black'}>
                                            {category}
                                        </Typography>
                                    </Box>
                                )
                            })}

                        </Box>

                        {/* scroll right button */}
                        <IconButton onClick={slideRight}>
                            <ChevronRight
                                sx={{ fontSize: '24px', justifyContent: 'flex-end' }} />
                        </IconButton>
                    </div>

                    {/* exercises */}
                    <Box id='exercises' className='relative bg-slate-100 py-8 mx-[5%] rounded-2xl'>
                        {isLoading &&
                            (
                                <Box className='flex justify-center py-40' >
                                    <GridLoader
                                        color="#e03c3c"
                                        cssOverride={{}}
                                        loading
                                        size={20}
                                    />
                                </Box>
                            )}
                        {!isLoading && (
                            <Box className='w-full px-[6%] flex flex-wrap justify-center gap-8 overflow-y-scroll'>
                                {Exercises.slice(pagesVisited, pagesVisited + exercisesPerPage).map((exercise, index) => { return <ExerciseCard exercise={exercise} key={index} /> })}
                            </Box>
                        )}
                    </Box>
                    <Box className='flex'>
                        <ReactPaginate
                            pageCount={pageCount}
                            previousLabel={'Prev'}
                            nextLabel={'next'}
                            onPageChange={handlePageChange}
                            containerClassName='paginationBttns'

                        />
                    </Box>

                </Box>
            </Box>
        </Box >
    )
}

export default HomePage;