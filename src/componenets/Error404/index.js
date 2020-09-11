import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <div>
             <div className="Error">
               <h1 className="text-center">ERROR 404</h1>
               <h1 className="text-center">This Page Doest Not Exist</h1>
               <h1 className="text-center">Kindly return to Home Page</h1>
                <h1 className="text-center"><Link to="/">Click Here</Link></h1>
              
        </div>
        </div>
    )
}

export default Error
