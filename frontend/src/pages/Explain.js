import { useState, useEffect } from 'react';

function Explain(){

    const [exercise, setExercise] = useState(null);
    
    useEffect( ()=>{
        setExercise(
            [
                {
                    name : "사이드레터럴레이즈",
                    exercise : "어깨운동"
                },
                {
                    name : "벤치프레스",
                    exercise : "가슴운동"
                },
                {
                    name : "풀업",
                    exercise : "등운동"
                }

            ]
        )
    }, [])
    console.log(exercise)
    if (!exercise) return null;
    return(
        <div className ="explain">
            {exercise.map(exercise => (
                    <div className='exercise_box' key={exercise._name}>
                        {exercise.name}/ {exercise.exercise}
                    </div>
                ))}
        </div>
    )
}
export default Explain;