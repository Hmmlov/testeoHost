import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'
import Testing from './testing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Testing />
  </React.StrictMode>,
)
