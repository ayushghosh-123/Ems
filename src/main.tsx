import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Authprovider from './Contex/Authprovider.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Authprovider>
      <App/>
  </Authprovider>
  </StrictMode>,
)
