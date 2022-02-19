function Exercise(exercise){
    console.log(exercise)

    return(
        <>
            {exercise.exercise.map(exercise => (
                    <div className='exercise_box' key={exercise._name}>
                        <p className='sub'>{exercise.sub}</p>
                        <p className='det'>{exercise.detail}</p>
                    </div>
                ))}
        </>
    )
}
export default Exercise;
