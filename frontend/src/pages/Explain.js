import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Exercise from '../components/Exercise';

function Explain(){

    const [exercise, setExercise] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    const axios = require("axios")
    useEffect( () => {
            const url = encodeURI("http://localhost:5000/");
            axios.get(url).then((response) =>{
                setExercise(response.data)
                console.log(response.data)
            })
    }, [])
    if (!exercise) return null;
    return(
        <div className ="explain">
            <Exercise exercise={currentPosts(exercise)}></Exercise>
            <Pagination postsPerPage={postsPerPage} totalPosts={exercise.length} paginate={setCurrentPage}></Pagination>
        </div>
    )
}
export default Explain;
