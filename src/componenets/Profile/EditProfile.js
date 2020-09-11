// import React,{useState,useEffect} from 'react'
// import {useSelector,useDispatch} from 'react-redux'
// import { firestore } from 'firebase';
// import { useFirestore} from 'react-redux-firebase'
// const EditProfile = () => {
//     const auth = useSelector(state => state.auth);
//     const dispatch=useDispatch();
//     const docRef= firestore.collection("CollegeStudents").auth.uid;
//     const [student, setstudent] = useState({
//         firstname:"",
//         lastname:"",
//         email:"",
//         roll:"",
//         Branch:"",
//     })
//     const onInputChange=()=>{

//     }
//     const submitForm=()=>{

//     }
//     const loadStudent =async ()=>{
//         try{
//          const result=await docRef.get();
         
//          if(result.exists){
//            setstudent(result.data())
//          }
//          else{
//            console.log("no such students");
//          }
//         }
//         catch(error){
//        console.log("Error:",error);
//         }
//          };
//     useEffect(() => {
//         if(auth.uid){
//           loadStudent();
//         }
//        }, [auth.uid])
//     return (
//         <div>
//              <div className="container">
//         <div className="py-4">
//           <div className="row">
//             <div className="col-md-10 mx-auto">
//               <div className="card card-body shadow">
//                 <form onSubmit={submitForm}>
//                   <div className="form-row form-group mb-4">
//                     <div className="col-md-6">
//                     <input
//                       placeholder="Enter Student First Name"
//                       name="Firstname"
//                       value={student.firstname}
//                       onChange={onInputChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       placeholder="Enter Student last name"
//                       name="lastname"
//                       value={student.lastname}
//                       onChange={onInputChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="form-row form-group mb-4">
//                   <div className="col-md-6">
//                     <input
//                       placeholder="Enter Student Roll"
//                       name="roll"
//                       value={student.roll}
//                       onChange={onInputChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       placeholder="Enter Student Email"
//                       name="email"
//                       value={student.email}
//                       onChange={onInputChange}
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input
//                       placeholder="Enter Student Branch"
//                       name="standard"
//                       value={student.Branch}
//                       onChange={onInputChange}
//                     />
//                   </div>
//                 </div>
//                 <button type="submit" className="btn btn-primary"> Update</button>
                
// </form>
// </div>
// </div>
// </div>
// </div>
// </div>
//         </div>
//     )
// }

// export default EditProfile
