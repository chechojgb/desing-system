
import React from 'react';
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ButtonsPage from './pages/ButtonsPage';
import LinksPage from './pages/LinksPage';
import TooltipsPage from './pages/TooltipsPage';
import TextInputsPage from './pages/TextInputsPage';
import TextareasPage from './pages/TextareasPage';
import SelectsPage from './pages/SelectsPage';
import CheckboxesPage from './pages/CheckboxesPage';
import BadgesPage from './pages/CheckboxesPage';
import SwitchesPage from './pages/SwitchesPage';
import SlidersPage from './pages/SlidersPage';
import AvatarsPage from './pages/AvatarsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/componentes/botones" element={<ButtonsPage />} />
          <Route path="/componentes/links" element={<LinksPage />} />
          <Route path="/componentes/tooltips" element={<TooltipsPage />} />
          <Route path="/componentes/text-inputs" element={<TextInputsPage />} />
          <Route path="/componentes/textareas" element={<TextareasPage />} />
          <Route path="/componentes/selects" element={<SelectsPage />} />
          <Route path="/componentes/checkboxes" element={<CheckboxesPage />} />
          <Route path="/componentes/badges" element={<BadgesPage />} />
          <Route path="/componentes/toggles" element={<SwitchesPage />} />
          <Route path="/componentes/sliders" element={<SlidersPage />} />
          <Route path="/componentes/avatares" element={<AvatarsPage />} />
        </Routes>
        
      </Layout>
    </Router>
  );
}

export default App;