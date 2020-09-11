import React from 'react'
import {Bar} from 'react-chartjs-2'
import Layout from '../../componenets/Layout'
import Cards from '../CampaniesCards/Cards'
const LineChart = () => {
    const data={
        labels:['2015','2016','2017','2018','2019','2020'],
        datasets:[
            {
                label:'Our Placed Students',
                data:[500,432,380,490,400,395],
                borderColor:['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)'],
                backgroundColor:['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)'],
            },
            {
                label:'No. Of Campanies Visited',
                data:[40,70,80,110,90,78],
                borderColor:['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)'],
                backgroundColor:['rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)','rgba(255,206,86,0.2)'],
            
            },
        ]
    }
    return (
    <div>
        <Layout>
          <h1 style={{textAlign:"center"}}>Our College Placements Statistics</h1>
        <hr/>
    <Bar data={data}  width={30}height={10} options={{ maintainAspectRatio: true }}/>
    <Cards/>
   </Layout>
    </div>
    )
}

export default LineChart
