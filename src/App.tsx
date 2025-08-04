import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { getRole } from './utils/auth';
import PrivateRoute from './components/ProtectedRoutes';
import Products from './components/Product/Products';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
        <Route path="/products" element={
          getRole() === 'admin' ? (
            <PrivateRoute><Products /></PrivateRoute>
          ) : (
            <Navigate to="/" />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;
