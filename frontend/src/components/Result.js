import List from './List'

function Result(){

    return(
        <div className='result'>
            <div className='result_header'>결과 목록</div>
            <div className='result_content'>
                <List></List>
                <List></List>
                <List></List>
            </div>

          </div>
    )
}
export default Result;