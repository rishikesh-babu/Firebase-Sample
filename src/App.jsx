import { useState } from 'react'
import Login from './Pages/Login'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes'
import { ToastContainer } from 'react-toastify'

function App() {

    return (
        <div className="min-h-[100dvh] bg-[url('backgroundImage.jpeg')] bg-cover bg-no-repeat bg-top">
            <RouterProvider router={router} />
            <ToastContainer theme='dark' position='top-center' />
        </div>
    )
}

export default App
