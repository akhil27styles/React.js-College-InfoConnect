import React,{useState,useEffect}from 'react'

const Pagination = ({showperpage,onPaginationChange,total}) => {
    const [counter, setcounter] = useState(1);
    useEffect(() => {
       const value=showperpage*counter;
       onPaginationChange(value-showperpage,value);
    }, [counter]);
    const onButtonClick=(type)=>{
  if(type==="prev"){
   if(counter===1){
       setcounter(1)
   }
   else{
       setcounter(counter-1); 
   }
  }
  else if(type==="next"){
      if(Math.ceil(total/showperpage)===counter){
          setcounter(counter)
      }
      else{
       setcounter(counter+1);
      }
  }
    };
    return (
        <>
        <hr/>
        <div style={{float:"right"}}>
          
           <span class="material-icons" onClick={()=>onButtonClick("prev")} style={{cursor:"pointer"}}>arrow_back_ios</span>
           <span class="material-icons" onClick={()=>onButtonClick("next")}  style={{cursor:"pointer"}}>arrow_forward_ios</span>
    <h4>Page of {counter} of{total}</h4>
        </div>
        </>
    )
}

export default Pagination
