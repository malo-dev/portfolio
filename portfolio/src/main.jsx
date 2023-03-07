import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,Route} from 'react-router-dom'
import ErrorBounders from '../utils/ErrorBoundery'

const App = React.lazy(() => import ('./App'))
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
        <ErrorBounders>
          <Suspense fallback={<div style={{display:"flex",justifyContent:"center", alignItems:"center", alignSelf:"center", flexDirection: "row"}}><h1 style={{color:"red",textAlign:"center"}}>Chargement en cours ...</h1></div>}>
            <App />
          </Suspense>
          </ErrorBounders>
      </React.StrictMode>
    )
    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={ router} />)
