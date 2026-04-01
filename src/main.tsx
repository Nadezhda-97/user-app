import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './styles/index.scss'
//import App from './App.tsx'

import { QueryProvider } from './app/providers/query-provider.tsx'
import { AppRouter } from './app/providers/router-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  </StrictMode>,
)
