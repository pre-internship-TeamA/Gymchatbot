import {Link} from 'react-router-dom'

function List1(counseling){

//    useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users' )
//     .then(response =>{
//         console.log(response)
//     })
// },[] )
console.log(counseling)

const addurl = "images/add.png"

    return(
        <div className ="list">
            <ul>
            {counseling.counseling.map(user => (
                    <li key={user._id}>
                        <div>
                            <p className='name'>{user.name}</p>
                            <p>{user.age}</p>
                            <p>{user.gender}</p>
                            <p>{user.height}/{user.weight}</p>
                            <p>{user.purpose}</p>
                            <p>{user.course}</p>
                            <p>
                                <Link to ="/detail"
                                 state={{
                                     name : user.name,
                                     age : user.age,
                                     gender : user.gender,
                                     height : user.height,
                                     weight : user.weight,
                                     purpose : user.purpose,
                                     course : user.course,
                                     style : user.style,
                                     money : user.money
                                 }}>
                                    <img src={addurl}></img>
                                </Link>
                            </p>
                            <hr></hr>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}
export default List1;
