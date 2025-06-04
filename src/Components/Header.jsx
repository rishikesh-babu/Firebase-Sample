import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='px-3 py-5 flex justify-between items-center shadow-lg backdrop-blur-2xl rounded-b-sm'>
            <div className='font-semibold text-2xl'>
                <Link to={'/'}>
                    Logo
                </Link>
            </div>
            <div className='flex gap-5 text-lg font-semibold'>
                <Link to={'/login'}>
                    Login
                </Link>
                <Link to={'/signup'}>
                    Signup
                </Link>
            </div>
        </div>
    )
}
