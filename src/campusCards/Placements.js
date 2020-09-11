import React from 'react'
import LineChart from './Charts/LineChart'
import  'sidebar.css'
import Layout from './../componenets/Layout/index'
import { Card } from 'antd'
import Cards from './CampaniesCards/Cards'
import Footer from './Footer/Footer'
const Placements = () => {
    return (
        <div>
            <Layout>
             <h1>Our College Placements Statistics</h1>
             <br/><br/><br/><br/><br/>
        {/* <div className="charts" className="col-md-4">
       
            <LineChart width={10}
    height={5}/> */}
        {/* </div> */}
        <Cards/>
                </Layout>
                
        </div>
    )
}

export default Placements
