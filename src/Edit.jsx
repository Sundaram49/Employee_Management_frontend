// import React from 'react'
import React, { useEffect, useState } from 'react'
import empService from './empService';
import { useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
    
 const { id } = useParams(); // get the id parameter from the URL
 const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const [emp, setEmp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    salary: ""
  });



  const update = (e) => {
    const value = e.target.value;
    setEmp({ ...emp, [e.target.name]: value });
  }

  const updateEmp = (e) => {
    e.preventDefault();

    empService.setEmpById(id, emp)
    
      .then((res) => {
        navigate('/'); // navigate back to the homepage after successful update
      })
      .catch((err) => {
        console.log(err);
      });
    
  }
        return (
            <div className='container'>
                <br />
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header text-center fs-3">Update 
                                {/* {msg && <p className=''>{msg}</p>} */}
                            </div>
    
                            <div className="card-body">
                                <form action="" onSubmit={(e) => updateEmp(e)} required>
                                    <div className="md-3">
                                        <lable htmlFor="">Enter First Name </lable>
                                        <input type="text" className='form-control' name='firstName' placeholder={}  onChange={update} required ></input>
                                    </div>
                                    <div className="md-3">
                                        <lable htmlFor="">Enter Last Name </lable>
                                        <input type="text" className='form-control' name='lastName' onChange={update} required ></input>
                                    </div>
    
                                    <div className="md-3">
                                        <lable htmlFor="">Enter Email </lable>
                                        <input type="email" className='form-control' name='email' onChange={update} required></input>
                                    </div>
                                    <div className="md-3">
                                        <lable htmlFor="email">Enter Address </lable>
                                        <input type="text" className='form-control' name='address' onChange={update} required></input>
                                    </div>
                                    <div className="md-3">
                                        <lable htmlFor="">Salary </lable>
                                        <input type="number" className='form-control' name='salary'onChange={update} required></input>
    
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        <input type='submit'  className='btn-success btn'  vlaue="submit" />
                                        <button className='btn-danger btn ms-2'>Reset</button>
                                    </div>
    
                                </form>
    
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
    
        )
    }
    

export default Edit