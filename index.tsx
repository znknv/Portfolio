import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './src/styles/globals.css';

// Fonction pour envoyer les logs au parent (système de preview)
function postToParent(level: string, ...args: any[]): void {
  if (window.parent !== window) {
    window.parent.postMessage(
      {
        type: 'iframe-console',
        level,
        args,
      },
      '*'
    );
  }
}

// Gestionnaire d'erreurs global
window.onerror = function (message, source, lineno, colno, error) {
  const errPayload = {
    message,
    source,
    lineno,
    colno,
    stack: error?.stack,
  };
  postToParent('error', '[Meku_Error_Caught]', errPayload);
};

// Rejet de promesse non géré
window.onunhandledrejection = function (event) {
  postToParent('error', '[Meku_Error_Caught]', { reason: event.reason });
};

// Patch de la console
(['log', 'warn', 'info', 'error'] as const).forEach((level) => {
  const original = console[level];
  console[level] = (...args: any[]) => {
    postToParent(level, ...args);
    original(...args);
  };
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);