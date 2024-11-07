import './App.css'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Page from './Page'

function Dashboard() {
  return (
    <>
      <header>
        <Link to="/">Home</Link><br />
        <Link to="/page/1">Page 1</Link>
      </header>
      <Outlet />
    </>
  )
}

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/page/:id" element={<Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
