import axios from 'axios'
import { useState, useEffect } from 'react';

function List(){

   const [users, setUsers] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

//    useEffect( () => {
//        const fetchUsers = async () => {
//            try {
//                setError(null);
//                setUsers(null);
//                setLoading(true);
//                const response = axios.get(
//                    '/apis/esd/Gym_counseling/records?%EC%84%B1%EB%B3%84=%EB%82%A8%EC%84%B1' ,{
//                     headers: {
//                         'coginsight-api-key' : "roebQelczjsdRVqwtKG6ezTZInQfBeUnrREDoy7dTrGbvwkYxJzgmVMMw6q7p83fjsCZ3cuIVbuwFcNoyhpjEQ==|pt0f0hklgSYGCL0dhmtpzF5ngvh3QPcVNDUhqGXJ1D0=" ,
//                         'coginsight-domain-id' : "4f33c78d-678b-4f8d-a62c-54f54061139c"
//                     }
//                 });
//                setUsers(response.data);
//                console.log(response.data)
//            } catch (e) {
//                setError(e);
//            }
//            setLoading(false);
//        }
//        fetchUsers()
//    }, [])

   useEffect( () => {
    const fetchUsers = async () => {
        try {
            setError(null);
            setUsers(null);
            setLoading(true);
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users' 
             );
            setUsers(response.data);
            console.log(response)
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }
    fetchUsers()
},[])


   

   if (loading) return <div>로딩중.. </div>
   if (error) return <div>에러 발생</div>
   if (!users) return null;

console.log(users)
    // const axiosTest = () => {
    //     axios.get("https://stage.coginsight.net/apis/esd/Gym_counseling/records?%EC%84%B1%EB%B3%84=%EB%82%A8%EC%84%B1", {
    //         params: {
    //             'coginsight-api-key' : "roebQelczjsdRVqwtKG6ezTZInQfBeUnrREDoy7dTrGbvwkYxJzgmVMMw6q7p83fjsCZ3cuIVbuwFcNoyhpjEQ==|pt0f0hklgSYGCL0dhmtpzF5ngvh3QPcVNDUhqGXJ1D0=" ,
    //             'coginsight-domain-id' : "4f33c78d-678b-4f8d-a62c-54f54061139c"
    //         }
    //     })
    //     .then(console.log("hello"))
    //     .catch()
    // }
    return(
        <div className ="list">
            <h3>리스트</h3>
            <hr></hr>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                        
                    </li>

                ))}
            </ul>
            
        </div>
    )
}
export default List;