import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ProductsContextProvider from './context/ProductContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </React.StrictMode>
)
