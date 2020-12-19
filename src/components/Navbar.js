import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import avatar from '../assests/img/avatar.jpg';


 class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5 container'>
                <Link to='/'>
                    <img src={avatar}
                     alt='store'
                     height={80}
                     width={70}
                    className='navbar-brand' />
                </Link>
                <ul className='navbar-nav align-item-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            | The Future for Living
                        </Link>
                    </li>
                </ul>
                <Link to='/sign-up' className='ml-auto text-success'>
                Don't have an account?
                       <span className='font-weight-bold'>Register in here</span>
                       
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link: (--mainWhite)!important;
font-size:1.3rem;
text-transform:capitalize;
`



export default Navbar;  