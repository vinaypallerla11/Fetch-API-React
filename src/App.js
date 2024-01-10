import React, { useState, useEffect } from 'react';
import Employee from './Employee';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(newData => {
        console.log(newData); 
        setData(newData);
      })
  }, []);
  

  return (
    <div>
      <Employee data={data} />
    </div>
  );
}

export default App;
