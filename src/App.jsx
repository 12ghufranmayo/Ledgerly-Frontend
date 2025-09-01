import { useState } from 'react'
import './App.css'
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'
import { Outlet, Route, Routes } from 'react-router-dom'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import NavigationLayout from './components/Layouts/NavigationLayout.jsx'
import ClientsList from './pages/Client/ClientsList.jsx'
import AddClient from './pages/Client/AddClient.jsx'

function App() {
  const [count, setCount] = useState(0)

return (
    <>
      <Routes>
        { /* Protected Routes */}
        <Route element={ <PrivateRoutes /> }>
            <Route element={ <NavigationLayout /> } >
                <Route path="/dashboard" element={ <h1 className='text-3xl font-bold underline'>Dashboard</h1> } />
                <Route path="/clients" element={ <ClientsList /> }>
                  <Route path="create" element={ <AddClient /> }/>
                  <Route path="edit/:id" element={ <h1 className='text-3xl font-bold underline'>Edit</h1> } />
                </Route>
            </Route>
        </Route>
        
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
      </Routes>
    </>
  )
}

export default App
