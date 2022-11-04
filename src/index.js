import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MemoExample from './MemoExample'
import UseMemoExample from './UseMemoExample'
import UseCallbackExample from './UseCallbackExample'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route exact path={'/'} element={<Navigate to={'/memo'} replace />} />
      <Route exact path={'/memo'} element={<MemoExample />} />
      <Route exact path={'/use-memo'} element={<UseMemoExample />} />
      <Route exact path={'/use-callback'} element={<UseCallbackExample />} />
    </Routes>
  </Router>
)
