import List from '../components/List'
import List1 from '../components/List1';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';



function Result(){

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(7);
    const [counseling, setCounseling] = useState(null);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    // Access-Control-Allow-Origin : https://stage.coginsight.net/apis/esd/Gym_counseling/records
    const axios = require("axios")
    useEffect( () => {

            const url = encodeURI("/coginsight/apis/esd/Gym_counseling/records");
            const headers = {
            "coginsight-api-key" : `roebQelczjsdRVqwtKG6ezTZInQfBeUnrREDoy7dTrGbvwkYxJzgmVMMw6q7p83fjsCZ3cuIVbuwFcNoyhpjEQ==|pt0f0hklgSYGCL0dhmtpzF5ngvh3QPcVNDUhqGXJ1D0=` ,
            "coginsight-domain-id" : `4f33c78d-678b-4f8d-a62c-54f54061139c`,
            "Access-Control-Allow-Origin" : `*`
            } 
            axios.get(url,{headers}).then((response) =>{
                setCounseling(response.data.result)
                
            })
    }, [])
    console.log(counseling)
    if (!counseling) return null;

    return(
        <div className='result'>
            <div className='result_header'>결과 목록</div>
            <div className='list_header'>
                <ul>
                    <li>
                        <p className='name'>이름</p>
                        <p>나이</p>
                        <p>성별</p>
                        <p>키/체중</p>
                        <p>운동목적</p>
                        <p>운동코스</p>
                    </li>
                </ul>
            </div>
            <div className='result_content'>
                {/* <List></List> */}
                <List1 counseling={currentPosts(counseling)}></List1>
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={counseling.length} paginate={setCurrentPage}></Pagination>
        </div>
    )
}
export default Result;