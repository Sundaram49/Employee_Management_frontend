import React, { useEffect, useState } from 'react'
import EmpService from './empService';
import { Link } from 'react-router-dom';
import axios from 'axios';
import empService from './empService';

const Home = () => {
    const [empList, setEmpList] =useState([]); 
   
    useEffect(()=>{
      init();

      
    },[])
    const init =()=> {
        EmpService.getAllEmp().then((res)=>{
            setEmpList(res.data); 

        })
        .catch((err)=>{
            console.log(err) ; 
        })
      }
const [msg ,setMsg] = useState(); 

    const deleteEmp= (id)=>{
      console.log(id); 
      empService.deleteEmp(id)
      .then((res)=>{
        setMsg("Delete SuccessFully"); 
        init(); 
      })
      .catch((error)=>{
      console.log(error); 
    })
    }


  return (
 <>
 <div className="container">

  <h1 className='text-center text-succuss' > Employee Details</h1>
  {
    msg && <p className="text-center">{msg}</p>
  }
 </div>
 <table class="table">
  <thead>
   
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
    </tr>

  </thead>
  <tbody> {empList.map((e,num) =>(
    <tr>
      <th scope="row">{num+1}</th>
      <td>{e.firstName}</td>
      <td>{e.lastName}</td>
      <td>{e.email}</td>
      <td>{e.address}</td>
      <td>{e.salary}</td>
      <td>
        <Link to ={"editEmp/"+e.id} className='btn-success btn'>Edit</Link><span> </span>
      <a onClick={()=>deleteEmp(e.id)} className='btn-danger btn'>Delete</a></td>
      
    </tr>
    ))}
  </tbody>
</table>
 
 </>
  )
}

export default Home