import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { QueryProvider } from './app/providers/query-provider.tsx'
import { AppRouter } from './app/providers/router-provider.tsx'

import './styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  </StrictMode>,
)
