import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/profile.jpg'

const Container = styled.div`
 display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
  
` 

const Profile = styled.img`
height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
` 

const MessageIcon = styled.span`
  color: ${({ theme }) => theme.colorGray}; 
    font-size: 27px;
    cursor: pointer;

` 
export const Nav = () => {
    return (
        <Container>

            <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
         
            <Profile src={Image}/>
                Nav
        </Container>
    )
}

export default Nav