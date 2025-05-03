import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SobreNosPage from './pages/SobreNosPage';
import ServicosPage from './pages/ServicosPage';
import ContatoPage from './pages/ContatoPage';
import BlogPage from './pages/BlogPage';
import ResidentialInstallationsPage from './pages/ResidentialInstallationsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage'; // <- Importação adicionada
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-nos" element={<SobreNosPage />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/servicos/residencial" element={<ResidentialInstallationsPage />} />
            <Route path="/projetos/:slug" element={<ProjectDetailsPage />} /> {/* Nova rota */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
