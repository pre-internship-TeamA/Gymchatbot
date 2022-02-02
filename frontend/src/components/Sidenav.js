import { useState, useEffect } from 'react';

function Sidenav(props){

  const spourl = "http://www.spogym.co.kr/default/"

  function sendCondition_device() {
    props.getCondition(true)
  }

  function sendCondition_result() {
    props.getCondition(false)
  }

    return(
        <div className='side-nav'>
          <ul>
            <li onClick={sendCondition_device}>챗봇기능</li>
            <li onClick={sendCondition_result}>결과목록</li>
            <li><a href={spourl}>스포짐 사이트</a></li>
          </ul>
        </div>
    )
}
export default Sidenav;