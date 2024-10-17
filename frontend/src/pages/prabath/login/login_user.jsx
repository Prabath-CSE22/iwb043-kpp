import React, { useState } from 'react'
import './login.css'
import 'boxicons'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const login_user = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  async function submit (event){
    event.preventDefault();
    //post the username password to the backend
    
    const payload = {username : username, password : password};
    const url = "http://localhost:9090/CheckUser";
    try {
      const response = await axios.post(url, payload,{ withCredentials: true }); // Use the custom Axios instance
      console.log('Response data:', response);
      navigate("/geesan/user_dashboard");
      // Handle the response (e.g., show a success message)
    } catch (error) {
      console.log(error);
      alert("Invalid username or password");
      // Handle the error (e.g., show an error message)
    }
  }
  return (
    <>
      <main>
      <div className='login'>
      <div className='headimg'>
      <i className='bx bxs-user-circle'></i>
      </div>
        
        <h3 className='heading'>USER LOGIN</h3>
        
        <form onSubmit={submit}>
          <div className="form-group">
            <i className='bx bxs-user'></i>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <i className='bx bxs-lock-alt'></i>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="custom-control custom-checkbox mb-3">
              <input type="checkbox" className="custom-control-input" id="customControlValidation1" />
              <label className="custom-control-label" htmlFor="customControlValidation1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>

          <p className="signup-link">
            Don't have an account? <Link to="/prabath/signup_user">Sign up</Link>
          </p>
        </form>
      </div>
      </main>
    </>
  );
}

export default login_user
