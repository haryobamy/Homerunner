import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import login from '../assests/img/login.jpg';


class Verification  extends Component {
    state = {  }
    render() { 
        return (

            <VerificationWrapper >
            <div className="container px-4 py-5 mx-auto">
    <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1"  style={{
            backgroundImage: `url(${login}) `,height:'auto'
          }}>
                <div className="my-auto mx-md-5 px-md-5 left">
                    <h3 className="text-white"> <span className='font-weight-bold'>"</span> With homerunner, i was able to access a number of professional service provider with a short period of time. Their service was impecable</h3>
                </div>
            </div>
                
            <div className="card card2">
                <form>
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className=" text-left text-success heading font-weight-bold">Hello, welcome back!</h3>
                        <h6 className=" text-left text-success heading font-weight-bold">Please\\\e4</h6>


                        <div id="wrapper">
  <div id="dialog">
    <h3>Please enter the 4-digit verification code we sent via SMS:</h3>
    <span>(we want to make sure it's you before we contact our movers)</span>
    <div id="form">
      <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
      <input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" /><input type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" />
      <button className="btn btn-primary btn-embossed">Verify</button>
    </div>
  </div>
</div>
                        
                        
                        </div>
                    </div>
                
                </form>
                
            </div>
            
        </div>
        
    </div>
</div>
            
            </VerificationWrapper>
          );
    }
}

const VerificationWrapper = styled.div`
input {
    margin: 0 5px;
    text-align: center;
    line-height: 80px;
    font-size: 50px;
    border: solid 1px #ccc;
    box-shadow: 0 0 5px #ccc inset;
    outline: none;
    width: 20%;
    transition: all .2s ease-in-out;
    border-radius: 3px;
    
    &:focus {
      border-color: purple;
      box-shadow: 0 0 5px purple inset;
    }
    
    &::selection {
      background: transparent;
    }
  }

  .card {
    border-radius: 0;
    border: none
}

.card2{
    width: 100%;
    padding: 40px 30px 10px 30px
    height:100%;
}

.card1 {
    width: 100%;
    background-image: linear-gradient(to right, #FFD54F, #D500F9);
    height:100%;
}

`
 
export default Verification;