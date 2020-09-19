import React from 'react'
import { Main } from '../components/Main/Main'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <Main/>
        </div>
    )
}
