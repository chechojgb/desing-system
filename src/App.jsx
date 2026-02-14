
import React from 'react';
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ButtonsPage from './pages/ButtonsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/componentes/botones" element={<ButtonsPage />} />
        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;