import React from 'react'
import Header from '../Header'
const index = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    )
}

export default index
