import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [err,setErr]=useState(false)
    const [msg,setMsg]=useState('')
    const navigate=useNavigate()
 
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3004/login",{email,password})
        .then(res=>{
            if(res.data!=="Success"){
                setErr(true)
                setMsg(res.data)
            }
            // console.log(res)
            if(res.data==="Success"){
                navigate("/home")
            }
        
    })
        .catch(err=>console.log(err))
    }

  return (
    <div className='vh-100 d-flex bg-secondary justify-content-center align-items-center'>
      <div className='w-25 bg-white p-3 rounded'>
          <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label >Email</label>
                    <input type="email" placeholder='Enter email'  onChange={e=>setEmail(e.target.value)} name="email" className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='Enter password'  onChange={e=>setPassword(e.target.value)} name="password" className='form-control rounded-0'/>
                </div>
                
                <button type="submit" className='btn btn-success w-100'>Login</button>
                </form>
                {err && <p>{msg}</p>}
                     
      </div>
    </div>
  )
}

export default Login
