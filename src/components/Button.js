import styled from 'styled-components';




export const ButtonContainer = styled.button`
text-transform: uppercase;
font-size: 14px;
background: transparent;
background: var(--mainBlue);
color:white;
font-family: Montserrat,sans-serif;
margin: 0.5em 1em;
padding: 10px 20px;
text-align: center;
line-height: normal;
&:focus{
    outline: none;
}
}
`;