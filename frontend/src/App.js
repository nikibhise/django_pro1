
import axios from 'axios'

import { useState, useEffect } from 'react'

function App() {
  const [employees, setEmployees] = useState([])

  async function getData(){
    try{
      const res = await axios.get('http://127.0.0.1:8000/ev/')
      setEmployees(res.data)
    }catch (error) {
      console.error(error)
    }
    
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
  
      <div>
      <h1>Employee List</h1>
      <table border='1'>
        {employees.map((employee) => (
          <tr key={employee.emp_id}>

            <td>{employee.emp_id}</td>
            <td>{employee.Name}</td>
            <td>{employee.department}</td>
          </tr>
        ))}
      </table>
      
    </div>
  
    </div>
  )
}

export default App