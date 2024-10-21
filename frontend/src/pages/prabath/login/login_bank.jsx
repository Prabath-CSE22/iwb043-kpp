import React, { useState } from 'react'
import './login.css'
import 'boxicons'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const login_bank = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function submit (event){
    event.preventDefault();
    const payload = {username : username, password : password};
    const url = "http://localhost:9090/CheckBankAdmin";
    try {
      const response = await axios.post(url, payload,{withCredentials:true}); // Use the custom Axios instance
      console.log('Response data:', response);
      navigate("/bank_admin");
      // Handle the response (e.g., show a success message)
    } catch (error) {
      alert("Invalid username or password");
      // Handle the error (e.g., show an error message)
    }
  }
  return (
    <>
      <main>
      <div className='login'>
      <div className='headimg'>
      <i class='bx bxs-bank'></i>
      </div>
        
        <h3 className='heading'>BANK ADMIN LOGIN</h3>
        
        <form onSubmit={submit}>
        <div className="form-group">
            <i className='bx bxs-user'></i>
            <input type="username" className="form-control" id="exampleInputUsername1" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <i className='bx bxs-lock-alt'></i>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input" id="customControlValidation1" />
              <label class="custom-control-label" for="customControlValidation1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => {<Link to="/manujaya/bank_admin"> </Link>}}>Login</button>

          <p className="signup-link">
            Don't have an account? <Link to="/bank_admin_signup">Sign up</Link>
          </p>
        </form>
      </div>
      </main>
    </>
  )
}

export default login_bank
