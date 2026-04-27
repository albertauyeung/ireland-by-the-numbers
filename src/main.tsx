import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Story from './pages/Story';
import Explorer from './pages/Explorer';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { LocaleProvider } from './i18n/LocaleContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<Story />} />
            <Route path="/explorer" element={<Explorer />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LocaleProvider>
  </StrictMode>,
);
