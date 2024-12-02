import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <div className='min-h-full root absolute w-full flex flex-col'>
    <div className='flex-1'>
      <StrictMode>
        <App />
      </StrictMode>
    </div>
    <Footer />
  </div>
  ,  
)
