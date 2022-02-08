import List from '../components/List'
import List1 from '../components/List1';

function Result(){

    return(
        <div className='result'>
            <div className='result_header'>결과 목록</div>
            <div className='list'>
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
                <List1></List1>
            </div>

          </div>
    )
}
export default Result;