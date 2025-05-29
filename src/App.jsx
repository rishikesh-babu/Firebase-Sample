import { useState } from 'react'
import Login from './Pages/Login'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/routes'

function App() {
	const [count, setCount] = useState(0)
	const viewPort = window.innerHeight

	return (
		<div
			style={{ minHeight: `${viewPort}px`, backgroundImage: 'url("backgroundImage.jpeg")' }}
			className="bg-cover bg-no-repeat bg-top"
		>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
