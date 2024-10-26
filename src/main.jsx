
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context, { Pokemoncontext } from './utils/Context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <Context>
    <BrowserRouter>
    <ToastContainer
    position="top-left"
    theme='colored' />
    <App />
    
       
    </BrowserRouter>
   
  </Context>
     
  
    
  
)
