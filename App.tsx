import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ComingSoonPage from './features/comingSoon/ComingSoonPage';

// Esport Pages
import EsportHome from './features/esport/pages/Home';
import Association from './features/esport/pages/Association';
import Projects from './features/esport/pages/Projects';
import Competition from './features/esport/pages/Competition';
import Agenda from './features/esport/pages/Agenda';
import Medias from './features/esport/pages/Medias';
import Partners from './features/esport/pages/Partners';
import Prestations from './features/esport/pages/Prestations';
import Contact from './features/esport/pages/Contact';
import Join from './features/esport/pages/Join';

// Auth & Admin
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Dashboard from './features/admin/Dashboard';

// Route Guard (Simple Mock)
const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const isAdmin = localStorage.getItem('velito_role') === 'ADMIN';
  if (!isAdmin) {
    return <Navigate to="/auth/login" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* Default Redirect */}
          <Route index element={<Navigate to="/esport" replace />} />

          {/* === MODULE ESPORT (VEA) === */}
          <Route path="esport">
            <Route index element={<EsportHome />} />
            <Route path="association" element={<Association />} />
            <Route path="projets" element={<Projects />} />
            <Route path="competition" element={<Competition />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="medias" element={<Medias />} />
            <Route path="partenaires" element={<Partners />} />
            <Route path="prestations" element={<Prestations />} />
            <Route path="contact" element={<Contact />} />
            <Route path="adherer" element={<Join />} />
          </Route>

          {/* === OTHER MODULES (Coming Soon) === */}
          <Route path="vena" element={<ComingSoonPage />} />
          <Route path="interactive" element={<ComingSoonPage />} />
          <Route path="plateforme" element={<ComingSoonPage />} />
          <Route path="maville" element={<ComingSoonPage />} />
          <Route path="hub" element={<ComingSoonPage />} />
          <Route path="messages" element={<ComingSoonPage />} />

          {/* === AUTH === */}
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />

          {/* === ADMIN === */}
          <Route path="admin" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

          {/* Catch All */}
          <Route path="*" element={<Navigate to="/esport" replace />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;