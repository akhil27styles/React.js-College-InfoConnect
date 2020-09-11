import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {auth,firestore} from 'firebase';
import { authConstant } from './Constansts';
toast.configure();
export const signup=(user)=>{
    return async (dispatch)=>{
        const db=firestore();
        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});
        auth()
        .createUserWithEmailAndPassword(user.email,user.password)
        .then(data=>{
            console.log(data);
            const currentUser=auth().currentUser;
            const name=`${user.firstName} ${user.lastName}`;
            currentUser.updateProfile({
                displayName:name
            })
            .then(()=>{
                db.collection('CollegeStudents').add({
                    firstname:user.firstName,
                    lastname:user.lastName,
                    uid:data.user.uid,
                    roll:user.roll,
                    Branch:user.Branch,
                    createdAt:new Date()
                })
                .then(()=>{
                    // sucess
                    const loggedInUser={
                        firstname:user.firstname,
                        lastname:user.lastname,
                        uid:data.user.uid,
                        email:user.email
                    }
                    localStorage.setItem('CollegeStudents',JSON.stringify(loggedInUser)); 
                
                console.log('User logged in sucessfullt...!');

               
                dispatch({
                    type:`${authConstant.USER_LOGIN}_SUCESS`,
                    payload:{user:loggedInUser}
                })
                
                })
                .catch(error=>{
                    console.log(error);
                    dispatch({
                        type:`${authConstant.USER_LOGIN}_FAILURE`,
                        payload:{error:error}
                    })
                });
            });
        })
        .catch(error=>{
            console.log(error);
            toast.error('Error',{position:toast.POSITION.TOP_CENTER});
        })
    }
}
export const signin =(user)=>{
    return async dispatch=>{
        dispatch({type:`${authConstant.USER_LOGIN}_REQUEST`});
        auth()
        .signInWithEmailAndPassword(user.email,user.password)
        .then((data)=>{
            console.log(data);
            const name=data.user.displayName.split(" ");
            const firstName=name[0];
            const lastName=name[1];
            const loggedInUser={
                firstName,
                lastName,
                uid:data.user.uid,
                email:data.user.email
            }
            localStorage.setItem('CollegeStudents',JSON.stringify(loggedInUser));
            dispatch({
                type:`${authConstant.USER_LOGIN}_SUCCESS`,
                payload:{user:loggedInUser}
            });
        })
        .catch(error=>{
            console.log(error);
            toast.error('User Not found',{position:toast.POSITION.TOP_CENTER});
            dispatch({
                type:`${authConstant.USER_LOGIN}_FAILURE`,
                payload:{error}
            })
        })
    }
}
export const isLoggedInUser=()=>{
    return async dispatch=>{
const user=localStorage.getItem('CollegeStudents')?JSON.parse(localStorage.getItem('CollegeStudents')):null;
if(user){
     dispatch({
    type:`${authConstant.USER_LOGIN}_SUCCESS`,
    payload:{user:user}
});
}
else{
    dispatch({
        type:`${authConstant.USER_LOGIN}_FAILURE`,
        payload:{error:'login again please'}
    });
}

    }
}
export const logout=()=>{
    return async dispatch=>{
        dispatch({type:`${authConstant.USER_LOGOUT}_REQUEST`});
        auth()
        .signOut()
        .then(()=>{
            localStorage.clear();
            dispatch({type:`${authConstant.USER_LOGOUT}_SUCCESS`});
        })
        .catch(error=>{
            console.log(error);
            dispatch({type:`${authConstant.USER_LOGOUT}_FALIURE`,payload:{error}})
        })
    }
}