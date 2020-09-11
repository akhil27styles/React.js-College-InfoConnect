import React from 'react'
import  './sidebar.css'
import {logout} from '../actions/actions'
import {NavLink,Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
const SideBar = () => {
  const auth = useSelector(state => state.auth);
  const dispatch=useDispatch();
    return (
        <div>
    
<div class="sidenav">
  <Link to="/">Home &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &nbsp; &nbsp;&nbsp;<span class="material-icons">
home
</span></Link>
  <Link to="/relevent">Relevent Notices  &emsp;&emsp;<span class="material-icons">
event_note
</span></Link>
<Link to="/placement">Placement Notices &nbsp;&nbsp;&nbsp;<span class="material-icons">
analytics
</span></Link>
  <Link to="/About">About &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;<span class="material-icons">
account_box
</span></Link>

  <Link to="/charts">Placement Statistics &nbsp;<span class="material-icons">
analytics
</span></Link>
  <Link to="/contact">Contact  &emsp;&emsp;&emsp; &emsp; &emsp; &nbsp; &nbsp;<span class="material-icons">
perm_contact_calendar
</span></Link>
  <hr/>
  <a href="https://nptel.ac.in/">Nptel <span class="material-icons">
school
</span></a>
<a href="https://swayam.gov.in/">Swayam<span class="material-icons">
school
</span></a>
  <Link to={"#"} onClick={()=>{ dispatch(logout())
             }}>Logout  &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &nbsp;<span class="material-icons">
             login
             </span></Link>
             
<h2 style={{marginTop:"300px",color:"white"}}>COLLEGE MAHAVIDYPEETHA</h2>
<h2 style={{marginTop:"390px",color:"white"}}>InfoConnect</h2>
<p style={{marginTop:"150px",color:"white",marginLeft:"70px"}}>Stay updated, anywhere anytime!</p>
</div>
  </div>
    )
}

export default SideBar
