import React,{useEffect,useState} from 'react'
import firebase from 'firebase'
import {Link,useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
const Deatil = () => {
    const { id } = useParams();
    const [notice, setnotice] = useState([])
  const [isLoading, setisLoading] = useState(true)
    useEffect(() =>{
        fun();
       }, [])
       const fun=async()=>{
         const events =  await firebase.firestore().collection('Notices')
         events.get().then((querySnapshot) => {
             const tempDoc = []
             querySnapshot.forEach((doc) => {
                 if(doc.id===id){
                tempDoc.push({ id: doc.id, ...doc.data() })
                 }
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
         <div style={{marginLeft:"60rem",marginTop:"20rem"}}>
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
         </div>
         )
     }
    return (
        <>
            <h1>ALL Details</h1>
            <div>
            <Link to="/" style={{ textDecoration: 'none' }}><span style={{marginRight:"100px",float:"right",cursor:"pointer",fontSize:"50px",marginBottom:"-50px"}} class="material-icons">clear</span></Link></div>
            <hr/>
            {
        notice.map((pos)=>(
            <>
        <h3>Title:</h3>
        <h3>{pos.Post}</h3>
       <h4>Details:</h4>
       <h4>{pos.Details}</h4>
        <h6 style={{color:"grey",fontSize:"30px",fontStyle:"italic"}}>Posted By {pos.PostedBy} on {new Date((pos.Date.seconds)*1000).toJSON()}</h6>
       </>
         ))}
     </> 
    
    )
}

export default Deatil
