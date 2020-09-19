import React from 'react'

import styled from 'styled-components'
import Image from '../../assets/images/profile.jpg'

const Container = styled.div`
margin-top: 5rem;
` 
const ProfileImg = styled.img`
height:5rem;
border-radius: 50px;
cursor: pointer;
` 
const ProfileName = styled.h1`
font-size: 1rem;
font-weight:300;
text-align: center;
color: ${({theme})=> theme.textColor};

` 

export const Profile = () => {
    return (
        <Container>
          <ProfileImg src={Image}/>
          <ProfileName>Eder Zambrano </ProfileName>
        </Container>
    )
}

export default Profile