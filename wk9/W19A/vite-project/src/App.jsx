import './App.css'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
import Home from './Home'
import Page from './Page'

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page/123">Page</Link></li>
      </ul>
      <Outlet />
    </div>
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
