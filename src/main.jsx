// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ── IMPORTANT: global.css must be the FIRST stylesheet imported.
// It owns the reset (*{margin:0;padding:0}), overflow-x:hidden on
// html/body/#root, and all shared utilities (.container, .btn-*, grids).
// Your current path is './styles/global.css' — update this import to
// match wherever you placed the file in your project.
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
