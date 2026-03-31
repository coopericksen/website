import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import IndexPage from './pages/IndexPage';
import ToolsPage from './pages/ToolsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;