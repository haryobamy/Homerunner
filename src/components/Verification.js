import React, { Component } from 'react';
import '../../../dashboard/node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import login from '../assests/img/login.jpg';
import {Link} from 'react-router-dom';
import avatar from '../assests/img/avatar.jpg';
import ReactCodeInput from 'react-verification-code-input';


class Verification  extends Component {
 
    
    render() { 
        return (

            <VerificationWrapper >
            <div className=" px-4 py-5 mx-auto">
    <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
            <div className="card card1"  style={{
            backgroundImage: `url(${login}) `,height:'auto',backgroundSize:'cover',
            overflow:'hidden',
            position:'relative',
          }}>

<div className='text-white justify-content-center my-5 mx-5 navbar-brand'>
              <Link to='/'>
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

            <Link to='/sign-up' className='ml-auto text-success my-5'>
                Don't have an account?
                       <span className='font-weight-bold'>Register in here</span>
                       
                </Link>
                <form>
                <div className="row justify-content-center my-auto">
                    <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className=" text-left text-success heading ">Verification</h3>

                        <div id="wrapper">
  <div id="dialog">
    <h6 className='text-success'>Please enter the 4-digit code sent to your Phone</h6>
    <div id="form">
        < ReactCodeInput type='number' fields={4} className=''/>

      <button className="btn btn-blue btn-embossed mx-5 my-5">Continue</button>
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

.styles_react-code-input__CRulA {
    display: flex;
    margin: 3rem 0 0 2.5rem;
}

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
    border: none;
    dispaly:flex;
    width:100%;
    
}

.btn-blue{
    color:#fff;
    border-radius: 5px;
    background-color: #1f3251;
    height: 50px;
    width: 50%;
    font-family: Montserrat;
    font-size: 21px;
    font-weight: 300;
    line-height: 1.19;
    padding-left: 1.5rem!important;
    padding-right: 1.5rem!important;
    
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
    display:flex;
}

`
 
export default Verification;