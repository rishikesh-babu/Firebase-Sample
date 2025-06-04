import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className='min-h-[100dvh] flex flex-col'>
            <Header />
            <div className='grow flex flex-col justify-center items-center'>
                <Outlet />
            </div>
        </div>
    )
}
