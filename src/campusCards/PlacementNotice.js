import React from 'react'
import Common from './Common'
import SideBar from './SideBar'
import  Layout from '../componenets/Layout/index' 

const PlacementNotice = () => {
  return (
    <Layout>
    <div>
         <hr/>
         <br/>
         <div className="container">

<div className="py-4" style={{marginTop:"100px"}}>
  <h1 style={{fontFamily:'Cormorant Garamond, serif',marginLeft:"600px"}}>College InfoConnect</h1>
  <h5 style={{marginLeft:"580px"}}>Stay updated, anywhere anytime!</h5>
    <h1 style={{marginLeft:"50px"}}>Campus Recruitemnt</h1>
        <Common/>
        <SideBar/>
        </div>
</div>
    </div>
    </Layout>

  )
}

export default PlacementNotice
