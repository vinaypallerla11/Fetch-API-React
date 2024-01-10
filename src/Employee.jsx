import React from 'react';
import './Employee.css'

const Employee = ({ data }) => {
  return (
    <div>
      <ul className='list-content'>
        {data.map(item => (
          <div>
            <li style={{color:'red'}} key={item.id}>{item.name}</li>
            <li style={{color:'blue'}}key={item.id}>{item.username}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Employee;
