import { useState, useEffect } from 'react';
import {Link, NavLink} from 'react-router-dom'

function Sidenav(props){

  const spourl = "http://www.spogym.co.kr/default/"

    return(
        <div className='side-nav'>
          <ul>
            <li>
              <NavLink to="/device" activeclassname="active">
                 챗봇 기능
               </NavLink>
            </li>
            <li>
              <NavLink  to="/explain" activeclassname="active">
                건강 지식
              </NavLink>
            </li>
            <li><a href={spourl}>스포짐 사이트</a></li>
            <li className='lastList' /* onClick={sendCondition_result}*/>
              <NavLink to="/result" activeclassname="active">
                상담 결과 목록
              </NavLink>
            </li>
          </ul>
        </div>
    )
}
export default Sidenav;