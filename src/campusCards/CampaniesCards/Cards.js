import React from 'react'
import './style.css'
import Footer from '../Footer/Footer'
const data=[
    {
        id:1,
        name:"TATA",
        img:"https://i.ibb.co/x31mLMX/tata.jpg"
    },
    {
      id:2,
      name:"KRONOS",
      img:"https://i.ibb.co/jVktmZF/KRONOS.jpg"
  },
  {
      id:3,
      name:"SAMSUNG",
      img:"https://i.ibb.co/mN112FN/SAMSUNG.jpg"
  },
  {
      id:4,
      name:"CAPEGEMINI",
      img:"https://i.ibb.co/rsDLNkx/CAMPE.webp"
  },
  {
    id:5,
    name:"Accenture",
    img:"https://i.ibb.co/HzhnYv4/accenture.jpg"
},
{
    id:6,
    name:"Wipro",
    img:"https://i.ibb.co/bBxSM00/wipro.png"
},
{
    id:7,
    name:"info",
    img:"https://i.ibb.co/7j2zcYH/info.png"
},
{
    id:8,
    name:"hcl",
    img:"https://i.ibb.co/4fqWJn1/hcl.png"
},
{
    id:9,
    name:"naggrpo",
    img:"https://i.ibb.co/zZS8Q9K/nagarro.png"
},
{
    id:11,
    name:"Byjus",
    img:"https://i.ibb.co/k40dCjW/Byjus.png"
},
{
    id:11,
    name:"Algo",
    img:"https://i.ibb.co/Th0bmpj/Algoworks.jpgg"
},
{
    id:12,
    name:"Algo",
    img:"https://i.ibb.co/997hTck/hexaware.jpg"
},
{
    id:13,
    name:"grade",
    img:"https://i.ibb.co/zmGHfvq/GRADE.jpg"
},
{
    id:14,
    name:"planet",
    img:"https://i.ibb.co/JpbKMpd/imc.png"
},
{
    id:15,
    name:"DXC",
    img:"https://i.ibb.co/sCwCLfJ/DXC.jpg"
},
{
    id:16,
    name:"HANG",
    img:"https://i.ibb.co/CQTn6Qr/handu.png"
},

 
]
const Cards = (props) => {
    return (
        <div class="container">
     <h1 style={{textAlign:"center"}}>College Major Recruiters</h1>
            {data.map(da=>(
        <img src={da.img} className="card-img-top" alt={da.name} style={{width:"25%",height:"50%"}}/>  
        )) }
        
            </div>
          

    
    )
}

export default Cards
