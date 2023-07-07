import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    
    axios.defaults.withCredentials=true;
 
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://crud-mern-api-iota.vercel.app/register/",{name,email,password})
        .then(res=>{console.log(res)
        navigate("/login")})
        .catch(err=>console.log(err))
    }

  return (
    <div className='vh-100 d-flex bg-secondary justify-content-center align-items-center'>
      <div className='w-25 bg-white p-3 rounded'>
          <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label >Name</label>
                    <input type="text" placeholder='Enter Name' onChange={e=>setName(e.target.value)} name="email" className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label >Email</label>
                    <input type="email" placeholder='Enter email'  onChange={e=>setEmail(e.target.value)} name="email" className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='Enter password'  onChange={e=>setPassword(e.target.value)} name="password" className='form-control rounded-0'/>
                </div>
                
                <button type="submit" className='btn btn-success w-100'>Register</button>
                </form>
                <p>Already have an account</p>
                <Link to="/login"><button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</button></Link>
          
      </div>
    </div>
  )
}

export default Signup
