import React from 'react'

const Manufecturer = ({companies}) => {
  return (
    <div>
      <h1>
        Mobile Manufacturers
      </h1>
      <ul>
        {
            companies.map((items)=>{
                return <li style={{listStyle:items==="Apple"?"circle":""}}>{items}</li>
            })
        }
      </ul>
      

    </div>
  )
}

export default Manufecturer
