import List from '../components/List'
import List1 from '../components/List1';

function Result(){

    return(
        <div className='result'>
            <div className='result_header'>결과 목록</div>
            <div className='result_content'>
                <List></List>
                <List1></List1>

            </div>

          </div>
    )
}
export default Result;