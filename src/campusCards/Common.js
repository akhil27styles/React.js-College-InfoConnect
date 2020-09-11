import React,{useEffect,useState} from 'react'
import firebase from 'firebase'
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './sidebar.css'
import Pagination from './Pagination'
import Footer from './Footer/Footer'
import './campusstyle.css'
const Campus = () => {
  const [notice, setnotice] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [showperpage, setshowperpage] = useState(8)
const [pagination, setpagination] = useState(
  {
    start:0,
    end:showperpage,
  }
);
  useEffect(() =>{
   fun();
  }, [])
  const fun=async()=>{
    const events =  await firebase.firestore().collection('Notices')
    events.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
           tempDoc.push({ id: doc.id, ...doc.data() })
        })
        tempDoc.forEach(p=>
          setnotice(notices => [...notices,p])
          )
      setisLoading(false);
      console.log(tempDoc)
      // })
     }).catch(error=>console.log(error));
  }
  if (isLoading===true){
    console.log("Loading");
     return (
      <div style={{marginLeft:"40rem",marginTop:"10rem"}}>
   <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      </div>
      )
}
const onPaginationChange=(start,end)=>{
setpagination({start:start,end:end}); 
}
  return (
<>
        <Pagination showperpage={showperpage} 
    onPaginationChange={onPaginationChange}
    total={notice.length}/>
       
    <table className="table table-bordered" style={{marginLeft:"100px"}}>
<thead>
<tr>
  <th scope="col">S.no</th>
<th scope="col">Posted by</th>
<th scope="col">Post</th>
<th scope="col">Date</th>
</tr>
</thead>
<tbody>
{
notice.slice(pagination.start,pagination.end).map((pos,index)=>(
  
  <tr key={index}>
    <th scope ="row" >{index+1}</th>
   <td>{pos.PostedBy}</td>
    <Link to={`/detail/${pos.id}`} style={{ textDecoration: 'none' }}><td className="link"></td>{pos.Post}</Link>
    <td style={{fontWeight:"bold"}}>{new Date((pos.Date.seconds)*1000).toJSON()} </td>
    
  </tr>))}

</tbody>
</table> 
</>
 
  )
}

export default Campus
