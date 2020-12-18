import React, { Component } from 'react';
import login from '../assests/img/login.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'





class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <SignUpWrapper >
            <div className="container px-4 py-5 mx-auto">
    <div className="card card0">
        <div className="d-flex flex-lg-row flex-column">
            <div className="card card1"  style={{
            backgroundImage: `url(${login}) `,height:'auto'
          }}>
                <div className="my-auto mx-md-5 px-md-5 left">
                    <h3 className="text-white"> <span className='font-weight-bold'>"</span> With homerunner, i was able to access a number of professional service provider with a short period of time. Their service was impecable</h3>
                </div>
            </div>
                
            <div className="card card2">
                
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className=" text-left text-success heading font-weight-bold">Let's Get Started</h3>
                        
                        <form>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="First name" required />
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Last name" required />
                </div>

                <div>
                    <select name='house' required id='house' className='form-control my-3'>
                            <option value=''>Type of House</option>
                            <option value='1'>house 1</option>
                            <option value='1'>house 1</option>
                            <option value='1'>house 1</option>
                            <option value='1'>house 1</option>
                            <option value='1'>house 1</option>
                            <option value='1'>house 1</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name Your House" required/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Address"required />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email Address" required/>
                </div>

                <div className="form-group">
                    <input type="text" maxLength='11' className="form-control" placeholder="Phone Number"required />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block my-5">Contiue</button>
            </form>
            
                        
                    </div>
                </div>
                
                
            </div>
            
        </div>
        
    </div>
</div>
            
            </SignUpWrapper>
         );
    }
}

const SignUpWrapper = styled.div`

}
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
select{
    background-color: #F3E5F5;
    border-radius: 5px !important;
}

select,input:focus,
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
    border: none
}

.card2{
    width: 100%;
    padding: 40px 30px 10px 30px
}

.card1 {
    width: 100%;
    background-image: linear-gradient(to right, #FFD54F, #D500F9)
}


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

.btn-color {
    border-radius: 50px;
    color: #fff;
    background-image: linear-gradient(to right, #FFD54F, #D500F9);
    padding: 15px;
    cursor: pointer;
    border: none !important;
    margin-top: 40px
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

@media screen and (max-width: 992px) {
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
 
export default SignUp;