import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReloadPrompt from './components/ReloadPrompt/ReloadPrompt.jsx'
import Calculadora from './components/Calculadora.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculadora />
    <ReloadPrompt />
  </StrictMode>
)
