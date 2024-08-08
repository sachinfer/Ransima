import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { useState } from 'react';

function SignUp() {

  const [email,setEmail] = useState();
  const [password,setPassword] =useState();

  const auth = getAuth();

  function LoginWithEmail(){
    console.log("Login Function")
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      window.location.href = '/';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
  }
  
    return (
        <MDBContainer fluid>
    
          <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>
    
          <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 text-center'>
    
              <h2 className="fw-bold mb-5">SignUp Now</h2>
    
   
              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' onChange={e=>setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={e=> setPassword(e.target.value)}/>
    
              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
    
              <MDBBtn className='w-100 mb-4' size='md' onClick={LoginWithEmail}>SIGN UP</MDBBtn>
    
              <div className="text-center">
    
                <p>or sign up with:</p>
    
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>
    
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>
    
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>
    
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>
    
              </div>
    
            </MDBCardBody>
          </MDBCard>
    
        </MDBContainer>
      );
}

export default SignUp;