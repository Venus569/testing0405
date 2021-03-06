import React from 'react'
import img1 from '../../assets/img/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import axios from 'axios';

const axios = require('axios');

export const LoginBlock = () => {
  const [show, setShow] = React.useState(true);

  /* useEffect(() => {
  
    
    instance.get('/')
    .then(function (response) {
      // handle success
      //console.log(response);
      console.log(response.data);
      setName(response.data[0].name);
      (response.data).forEach(newValue=>
        {
          console.log("executed")
          setArray(oldArray => [...oldArray,newValue])
          setNum(num+1);
        }
      )
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      
      console.log("printing array 1",Array);
      console.log("printing number",name);
      // always executed
    });
    
    
    
  },[]);*/

  /* useEffect(() => {
  
    
    axios.post('http://localhost:3000/api/creator/login', {          
      "email": "srini3720@gmail.com",
      "password": "12345"

      
})
    .then(function (response) {
      // handle success
      console.log("received data",response);
      /*console.log(response.data);
      setName(response.data[0].name);
      (response.data).forEach(newValue=>
        {
          console.log("executed")
          setArray(oldArray => [...oldArray,newValue])
          setNum(num+1);
        }
      )
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      
      //console.log("printing array 1",Array);
      //console.log("printing number",name);
      // always executed
    });
    
    
    
  },[]);*/


 


  const [userDetails, setUserDetails] = React.useState({email: '', password: ''});
  const nevigate = useNavigate();
  function handleChange(e){
    const {name, value} = e.target;
    setUserDetails(userDetails => {
        return {
            ...userDetails,
            [name]: value
        }
    });
  }
  async function handleClick(e){
    e.preventDefault();
    console.log(userDetails);
    /*const userData = await fetch('http://localhost:3000/api/creator/login', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
    });

    const user = await userData.json();

    console.log("user",user);

    if(user) nevigate('/home')*/

    axios.post('http://localhost:3000/api/creator/login', userDetails)
    .then(function (response) {
      // handle success
      console.log(response);
      /*console.log(response.data);
      setName(response.data[0].name);
      (response.data).forEach(newValue=>
        {
          console.log("executed")
          setArray(oldArray => [...oldArray,newValue])
          setNum(num+1);
        }
      )*/
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      
      //console.log("printing array 1",Array);
      //console.log("printing number",name);
      // always executed
    });
    
    
    


  }
  return (
    <>
        <div class="login-container">
        <div class="alert alert-success" role="alert">
  This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
        <div class=" login-logo">                
        <div class=" site-logo site-logo-text">
              <a href="index-4.html">
               <i class="flaticon-video-camera"></i>
               <div class="site-logo-text">
                <h3>BrandUp</h3>
                <h6>Influencer site</h6>
              </div>
            </a>
          </div>
          </div>
                        <div class="login-form">
                            <h2>Creator Log in</h2>
                            <form>
                                <div class="input-group input-group-two mb-20">
                                    <input onChange={handleChange} value={userDetails.email} type="email" placeholder="Email" name="email"/>
                                </div>
                                <div class="input-group input-group-two mb-30">
                                    <input onChange={handleChange} value={userDetails.password} type="password" placeholder="Password" name="password"/>
                                </div>
                                <a href="login.html#">Forgot Password?</a>
                                <button onClick={handleClick} class="main-btn btn-filled mt-20 login-btn">Login</button>
                                <div class="form-seperator">
                                    <span>OR</span>
                                </div>
                                <div class="social-buttons">
                                    {/* <button type="button" class="main-btn btn-border facebook mb-20">
                                        <i class="fab fa-facebook-f"></i>
                                         Continue with Facebook
                                    </button> */}
                                    <button class="main-btn btn-filled mb-30">
                                        <i class="fab fa-google"></i>
                                         Continue with Google
                                    </button>
                                </div>
                                <p>Don't have an Account?
                                <Link to="/signup" class="d-inline-block">Create One</Link>
                                </p>
                            </form>
                        </div>

                        
                        <footer class="footer-two">
                        <div class="copyright-area pt-30 pb-30">
     
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-5 order-2 order-md-1">
              <p class="copyright-text copyright-two">Copyright By@<a href="influencer-profile.html#">Example</a> - 2022</p>
            </div>
            <div class="col-lg-6 col-md-7 order-1 order-md-2">
              <div class="footer-menu text-center text-md-right">
                <ul>
                  <li><a href="influencer-profile.html#">Terms of use</a>
                  </li>
                  <li><a href="influencer-profile.html#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      
     
      </footer>  
        
      </div> 
    </>
  )
}
