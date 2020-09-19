import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

export const Menu = () => {
    return (
        <Container>
            <MenuItem  title="Dashboard" icon={'home'}/>
            <MenuItem  title="Cursos" icon={'file-multiple'} active/>
            <MenuItem  title="Estudiantes"  icon={'gift'}/>
            <MenuItem  title="MENU 1" icon={'bank'}/>
            <MenuItem  title="MENU 2" icon={'cog'}/>
        </Container>
    )
}

export default Menu