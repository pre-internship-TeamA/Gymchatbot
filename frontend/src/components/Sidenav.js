import { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom'

function Sidenav(props){

  const spourl = "http://www.spogym.co.kr/default/"

  // function sendCondition_device() {
  //   props.getCondition(true)
  // }

  // function sendCondition_result() {
  //   props.getCondition(false)
  // }

    return(
        <div className='side-nav'>
          <ul>
            <li /*onClick={sendCondition_device}*/>
              <NavLink to="/device" activeClassName="active">
                 챗봇기능
               </NavLink>
            </li>
            <li><a href={spourl}>스포짐 사이트</a></li>
            <li className='lastList' /* onClick={sendCondition_result}*/>
              <NavLink className="list" to="result" activeClassName="active">
                결과목록
              </NavLink>
            </li>
          </ul>
        </div>
    )
}
export default Sidenav;