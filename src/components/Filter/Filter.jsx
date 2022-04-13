import React, { useState } from 'react'
import Dropdown1 from '../miniComponents/Dropdown1';

function Filter({department,setDepartment}) {
    
    const arr = ["ALL","MCA", "MBA", "IT", "CS", "ENTC"];
    // const [department,setDepartment] = useState("MCA")
  return (
    <div className="control m-4">
    <div className="select">
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
          <option value="" selected disabled hidden>Filter by Department</option>
        {arr.map((i) => (
          <option>{i}</option>
        ))}
      </select>
    </div>
  </div>
  )
}

export default Filter