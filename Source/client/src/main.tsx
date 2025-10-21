import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWrapper from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './shared/constants/queryClient.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppWrapper />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
