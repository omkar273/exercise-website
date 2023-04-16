import React from 'react'

const ExerciseVideoCards = ({ exercise }) => {
    const { exercise_name, id, videoURL } = exercise;
    return (
        <div className='max-w-[200px] w-[200px] h-[auto]'>
            <video className='w-full h-[auto] object-cover' src={videoURL[0]} />
        </div>
    )
}

export default ExerciseVideoCards
