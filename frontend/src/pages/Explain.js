import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Exercise from '../components/Exercise';

function Explain(){

    const [exercise, setExercise] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    
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
                },
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
            <Exercise exercise={currentPosts(exercise)}></Exercise>
            <Pagination postsPerPage={postsPerPage} totalPosts={exercise.length} paginate={setCurrentPage}></Pagination>
        </div>
    )
}
export default Explain;