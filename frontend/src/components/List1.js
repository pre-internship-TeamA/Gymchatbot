
import { useState, useEffect } from 'react';
import App from '../App';

function List1(){

//    useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users' )
//     .then(response =>{
//         console.log(response)
//     })
// },[] )

const [counseling, setCounseling] = useState(null);
const axios = require("axios")
const addurl = "images/add.png"

useEffect( () => {
          const url = encodeURI("/apis/esd/Gym_counseling/records");
          const headers = {
           "coginsight-api-key" : `roebQelczjsdRVqwtKG6ezTZInQfBeUnrREDoy7dTrGbvwkYxJzgmVMMw6q7p83fjsCZ3cuIVbuwFcNoyhpjEQ==|pt0f0hklgSYGCL0dhmtpzF5ngvh3QPcVNDUhqGXJ1D0=` ,
           "coginsight-domain-id" : `4f33c78d-678b-4f8d-a62c-54f54061139c`
          } 
          axios.get(url,{headers}).then((response) =>{
            setCounseling(response.data.result)
            
          })
}, [])
console.log(counseling)
if (!counseling) return null;
    return(
        <div className ="list">
            <ul>
            {counseling.map(user => (
                    <li key={user._id}>
                        <div>
                            <p className='name'>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.gender}</p>
                            <p>{user.height}/{user.weight}</p>
                            <p>{user.purpose}</p>
                            <p>{user.course}</p>
                            <p><img src={addurl}></img></p>
                            <hr></hr>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
export default List1;
