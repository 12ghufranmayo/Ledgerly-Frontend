import './App.css'
import Registration from './pages/Registration.jsx'
import Login from './pages/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import ClientsList from './pages/Client/ClientsList.jsx'
import AddClient from './pages/Client/AddClient.jsx'

function App() {
return (
    <>
      <Routes>
        { /* Protected Routes */}
        <Route element={ <PrivateRoutes /> }>
          <Route path="/dashboard" element={ <h1 className='text-3xl font-bold underline'>Dashboard</h1> } />
          <Route path='/clients' element={ <ClientsList /> } />
          <Route path="clients/create" element={ <AddClient /> }/>
          <Route path="edit/:id" element={ <h1 className='text-3xl font-bold underline'>Edit</h1> } />
        </Route>
        
        { /* Un Protected Routes */}
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Registration />}/>
      </Routes>
    </>
  )
}

export default App
