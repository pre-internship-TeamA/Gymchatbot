import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Details(){

    const data = useLocation();

 
    return(
        <div className='details'>
            <div className='result_header'>상세 결과</div>
            <div className='list_content'>
                <div>
                    <span>{data.state.name}</span> / <span>{data.state.age}</span> / <span>{data.state.gender}</span>
                    <p>{data.state.height} / {data.state.weight}</p>
                </div>
                
                

                <div><p>운동 목적 : {data.state.purpose}</p>주 {data.state.style}회</div>
                <div><p> 신청 코스 : {data.state.course}</p></div>
                <div className='last_list'>
                    <Link to="/result">
                    목록으로
                    </Link>
                </div>

            </div>

                
        </div>
    )

}
export default Details