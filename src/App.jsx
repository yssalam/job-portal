import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import AdminLayout from './components/AdminLayout.jsx';
import Home from './pages/Home.jsx';
import JobDetail from './pages/JobDetail.jsx';

// AUTHENTICATION ADMIN
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import CreateJob from './pages/CreateJob.jsx';
import EditJob from './pages/EditJob.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {

  return (
    <Routes>

      {/* PUBLIC */}
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='jobs/:id' element={<JobDetail />} />
        <Route path='/login' element={<Login />} />
      </Route>

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
        <Route index element={<Admin />} />
        <Route path="create" element={<CreateJob />} />
        <Route path="edit/:id" element={<EditJob />} />
      </Route>
    </Routes>
  )
}

export default App
