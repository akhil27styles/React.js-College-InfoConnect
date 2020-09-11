import React from 'react'
import Layout from '../../componenets/Layout'
import Campus from '../../campusCards/Campus'
import SideBar from '../../campusCards/SideBar'

const Header = (props) => {
    return (
        <Layout>
        <div>
             <hr/>
             <br/>
            <Campus/>
            <SideBar/>
        </div>
        </Layout>
    )
}

export default Header
