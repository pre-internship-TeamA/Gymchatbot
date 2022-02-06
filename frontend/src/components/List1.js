import axios, { Axios } from 'axios'
import { useState, useEffect } from 'react';

function List1(){

   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users' )
    .then(response =>{
        console.log(response)
    })
},[] )


    return(
        <div className ="list">
            <h3>리스트</h3>
            <hr></hr>
            <ul>
            </ul>
            
        </div>
    )
}
export default List1;