import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import IndexPage from './pages/Index';
import ToolsPage from './pages/Tools';
import ToolPage from './pages/Tool';
import ProjectsPage from './pages/Projects';
import ProjectPage from './pages/Project';
import AboutPage from './pages/About';
import NotFound from './pages/NotFound';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/:toolId" element={<ToolPage />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Analytics />
    </BrowserRouter>
  )
}

export default App;