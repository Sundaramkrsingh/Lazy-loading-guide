import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  return (
    <>
      <BrowserRouter>

        <Appbar />

        <Routes>
          <Route path="/" element={
            <Suspense fallback={"loading..."}> 
              <Landing /> 
            </Suspense>} />

          <Route path="/dashboard" element={
          <Suspense fallback={"loading..."}> 
            <Dashboard /> 
          </Suspense>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
    <button onClick={() => {navigate("/")}}> Landing </button>
    <button onClick={() => {navigate("/dashboard")}}> Dashboard </button>
  </div>
}

export default App