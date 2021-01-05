import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import login from '../assests/img/login.jpg';
import { MDBBtn, MDBCol, MDBIcon } from "mdbreact";
import avatar from '../assests/img/avatar.jpg';




// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
    Row
  } from "reactstrap";









class Login extends Component {
    state = {  }
    render() { 
        return (
        <>
        
            <LoginWrapper >
            <div className="px-4 py-5 mx-auto">
    <div className="card card0 overlay">
        <div className="d-flex flex-lg-row flex-column">
            <div className="card card1 "  style={{
            backgroundImage: `url(${login}) `,height:'auto',
            backgroundSize:'cover',
            overflow:'hidden',
            position:'relative',
          }}>
              <div className='text-white justify-content-center my-5 mx-5 navbar-brand'>
              <Link to='www.homerunner.ng'>
                    <img src={avatar}
                     alt='logo'
                     height={20}
                     width={150}
                     />
                </Link>
                <span>
                |   Future For Living
                </span>
                     </div>
              
                <div className="my-auto mx-md-5 px-md-5 left">
                    <h3 className="text-white"> <span className='font-weight-bold'>"</span> With homerunner, i was able to access a number of professional service provider with a short period of time. Their service was impecable</h3>
                </div>
            </div>
                
            <div className="card card2">

            <Link to='/sign-up' className='ml-auto text-success my-3'>
                Don't have an account?
                       <span className='font-weight-bold'>Register in here</span>
                       
                </Link>

                <form>
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className=" text-left text-success heading font-weight-bold">Hello, welcome back!</h3>
                        
                        <div className="form-group"><input type="text" id="email" name="email" placeholder="Enter Your Phone Number" className="form-control"/> </div>
                        <div className="form-group"> <input type="password" id="psw" name="psw" placeholder="Pin" className="form-control"/> 
                            {/* <button  className="btn bg-black text-muted"> <span className='far fa-eye-slash'></span> </button> */}
                        </div>
                        <div class="d-flex align-items-start">
            <div class="remember"> <label class="option text-muted"> Remember me <input type="checkbox" name="checkbox"/> <span class="checkmark"></span> </label> </div>
            <div class="ml-auto"> <a href="#" id="forgot">Forgot Password?</a> </div>
            </div>
                        <div className="row justify-content-center my-5 px-3">
                             <button className="btn-block btn-blue">Login</button>
                              </div>
                        <div className="row justify-content-center my-3 px-3"><button>
                        <MDBBtn size="md" color="indigo" >Login With Your Facebook<MDBIcon fab icon="mdb" /></MDBBtn>
                        </button>
                        </div>
                        <div className="row justify-content-center my-3 px-3"><button>
                        <MDBBtn size="md" color="indigo" >Login With Your Google<MDBIcon fab icon="mdb" /></MDBBtn>
                        </button>
                        </div>
                    </div>
                </div>
                </form>
                
            </div>
            
        </div>
        
    </div>
</div>
            
            </LoginWrapper>
            </>
           
         );
    }
}
const LoginWrapper = styled.div`



input,
textarea {
    background-color: #F3E5F5;
    border-radius: 5px !important;
    padding: 12px 15px 12px 15px !important;
    width: 100%;
    box-sizing: border-box;
    border: none !important;
    border: 1px solid #F3E5F5 !important;
    font-size: 16px !important;
    color: #000 !important;
    font-weight: 400
    
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #D500F9 !important;
    outline-width: 0;
    font-weight: 400
}


button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.card {
    border-radius: 0;
    border: none;
    width:100%;
    height:100%;
}

.card2{
    width: 100%;
    padding: 40px 30px 10px 30px
}

.card1 {
    width: 100%;
    background-color: green;

}

// .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     z-index: 10;
//     background-color: rgba(0, 0, 0, 0.6);
//   }


.heading {
    margin-bottom: 60px !important
}

::placeholder {
    color: #000 !important;
    opacity: 1
}

:-ms-input-placeholder {
    color: #000 !important
}

::-ms-input-placeholder {
    color: #000 !important
}

.form-control-label {
    font-size: 12px;
    margin-left: 15px
}

.msg-info {
    padding-left: 15px;
    margin-bottom: 30px
    color:green !important
}
.btn-blue{
    color:#fff;
    border-radius: 5px;
    background-color: #1f3251;
    height: 50px;
    width:70%;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 300;
    line-height: 1.19;
    padding-left: 1.5rem!important;
    padding-right: 1.5rem!important;
    margin: 30px 15% 30px 15%
}



.btn-color:hover {
    color: #fff;
    background-image: linear-gradient(to right, #D500F9, #FFD54F)
}

.btn-white {
    border-radius: 50px;
    color: #D500F9;
    background-color: #fff;
    padding: 8px 40px;
    cursor: pointer;
    border: 2px solid #D500F9 !important
}

.btn-white:hover {
    color: #fff;
    background-image: linear-gradient(to right, #FFD54F, #D500F9)
}

a {
    color: #000
}

a:hover {
    color: #000
}

.bottom {
    width: 100%;
    margin-top: 50px !important
}

.sm-text {
    font-size: 15px
}

@media screen and (max-width: 1200px) {
    .card1 {
        width: 100%;
        padding: 40px 30px 10px 30px
    }

    .card1 {
        width: 100%
    }

    .left {
        margin-top: 100px !important;
        margin-bottom: 100px !important
    }
}

@media screen and (max-width: 768px) {
    .container {
        padding: 10px !important
    }

    .card1 {
        padding: 50px
    }

    .left {
        margin-top: 50px !important;
        margin-bottom: 50px !important
    }
}
.option {
    position: relative;
    padding-left: 30px;
    cursor: pointer
}

.option label.text-muted {
    display: block;
    cursor: pointer
}

.option input {
    display: none
}

.checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
    cursor: pointer
}

.option input:checked~.checkmark:after {
    display: block
}

.option .checkmark:after {
    content: "";
    width: 13px;
    height: 13px;
    display: block;
    background: #400485;
    position: absolute;
    top: 48%;
    left: 53%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 300ms ease-in-out 0s
}

.option input[type="checkbox"]:checked~.checkmark {
    background: #fff;
    transition: 300ms ease-in-out 0s;
    border: 1px solid #400485
}

.option input[type="checkbox"]:checked~.checkmark:after {
    transform: translate(-50%, -50%) scale(1)
}
`
 
export default Login;
