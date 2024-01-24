import React from 'react'
// import './Users.css'
import {useLocation} from 'react-router-dom'
import LeftSideBar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'


const Users = () => {

  const location=useLocation();
  console.log(location);


  return (
    <div className="home-container-1">
          <LeftSideBar/>
          <div className='home-container-2'>
               {
                   location.pathname==='/Users'?
                   <UsersList/>:
                  <></>
               }
          </div>

    </div>
  )
}

export default Users