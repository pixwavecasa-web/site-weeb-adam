import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App.tsx';
import ProductionSuite from './components/ProductionSuite.tsx';
import ServiceScopeShowcase from './components/ServiceScopeShowcase.tsx';
import AboutSection from './components/AboutSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import './index.css';

// Root registry to prevent duplicate createRoot warnings on hot reloads
const roots = new WeakMap<Element, Root>();

function safeMount(elementId: string, node: React.ReactNode) {
  const container = document.getElementById(elementId);
  if (!container) return;

  let root = roots.get(container);
  if (!root) {
    root = createRoot(container);
    roots.set(container, root);
  }
  root.render(node);
}

// 1. If full SPA #root is present, mount the complete App
const rootEl = document.getElementById('root');
if (rootEl) {
  safeMount('root', <App />);
} else {
  // 2. Otherwise mount modular portals into the page structure
  safeMount('pipeline-react-root', <ProductionSuite />);
  safeMount('service-scope-react-root', <ServiceScopeShowcase />);
  safeMount('about-react-root', <AboutSection />);
  safeMount('contact-react-root', <ContactSection />);
}
