import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Z, {Hi as H, Bye} from './Hello.jsx'

// createRoot(document.getElementById('root')).render(<div>{App()}{Z()}{H()}{Bye()}</div>)
createRoot(document.getElementById('root')).render(<div>
        <App />
        <Z />
        <H />
        <Bye />
    </div>)
