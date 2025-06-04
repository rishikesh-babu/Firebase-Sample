import { useState } from 'react'
import Login from './Pages/Login'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes'
import { ToastContainer } from 'react-toastify'
import bgImage from '/backgroundImage.jpeg';

function App() {

    return (
        <div style={{ backgroundImage: `url(${bgImage})` }} className="min-h-[100dvh] bg-cover bg-no-repeat bg-top">
            <RouterProvider router={router} />
            <ToastContainer theme='dark' position='top-center' />
        </div>
    )
}

export default App
