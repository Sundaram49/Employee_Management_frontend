import React, { useState } from 'react'
import empService from './empService';
import { useNavigate } from 'react-router-dom';
const AddEmp = () => {
    const [emp, setEmp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        salary: ""

});
    const handleChange = (e) => {
        const value = e.target.value;
        setEmp({ ...emp , [e.target.name]:value});
        // console.log(...emp)
    }
    const [msg, setMsg] = useState("");
    const submitEmp = () => {
        // e.preventDefault();
        empService
            .saveEmp(emp)
            .then((res) => { 
               
                setEmp({
                    firstName: "",
                    lastName: "",
                    email: "",
                    address: "",
                    salary: ""
                }) 
                 setMsg("Emp Added Successfully");
               
            })
            .catch((err) => {
                console.log(err);
            });

    };



    return (
        <div className='container'>
            <br />
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center fs-3">Add Emp
                            {msg && <p className=''>{msg}</p>}
                        </div>

                        <div className="card-body">
                            <form action="" onSubmit={(e) => submitEmp(e)} required>
                                <div className="md-3">
                                    <lable htmlFor="">Enter First Name </lable>
                                    <input type="text" className='form-control' name='firstName'  onChange={handleChange} required ></input>
                                </div>
                                <div className="md-3">
                                    <lable htmlFor="">Enter Last Name </lable>
                                    <input type="text" className='form-control' name='lastName' onChange={handleChange} required ></input>
                                </div>

                                <div className="md-3">
                                    <lable htmlFor="">Enter Email </lable>
                                    <input type="email" className='form-control' name='email' onChange={handleChange} required></input>
                                </div>
                                <div className="md-3">
                                    <lable htmlFor="email">Enter Address </lable>
                                    <input type="text" className='form-control' name='address' onChange={handleChange} required></input>
                                </div>
                                <div className="md-3">
                                    <lable htmlFor="">Salary </lable>
                                    <input type="number" className='form-control' name='salary'onChange={handleChange} required></input>

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

export default AddEmp