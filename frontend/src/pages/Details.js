import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom'



function Details(){

    const data = useLocation();
    const logo2 = "images/logo2.png"
 
    return(
        <>
        <div className='details'>
            <div className='result_header'>상세 결과</div>
            <div className='list_content'>
                <div>
                    <span>{data.state.name}</span> / <span>{data.state.age}</span> / <span>{data.state.gender}</span>
                    <p>{data.state.height} / {data.state.weight}</p>
                </div>
                <div><p>운동 목적 : {data.state.purpose}</p>{data.state.style}회 / 예상 가격 : {data.state.money}</div>
                <div><p> 신청 코스 : {data.state.course}</p></div>
                <div className='last_list'>
                    <Link to="/result">
                    목록으로
                    </Link>
                </div>
            </div>
            <img className="detail_logo2" src={logo2}></img>
        </div>
        
        </>
    )

}
export default Details