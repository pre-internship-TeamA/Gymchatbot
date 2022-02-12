function Exercise(exercise){
    console.log(exercise)

    return(
        <>
            {exercise.exercise.map(exercise => (
                    <div className='exercise_box' key={exercise._name}>
                        {exercise.name}/ {exercise.exercise}
                    </div>
                ))}
        </>
    )
}
export default Exercise;
