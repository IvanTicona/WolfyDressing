import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <main className="wolfy text-foreground bg-background">
          <App />
        </main>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)
