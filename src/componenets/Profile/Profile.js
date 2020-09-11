import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
const Profile = () => {
    const auth = useSelector(state => state.auth);
    const dispatch=useDispatch();

    return (
        <div>
             <h2 style={{textAlign:"center"}}>{auth.authenticated?`
             FirstName ${auth.firstName}`:''}</h2>
             
        </div>
    )
}

export default Profile
