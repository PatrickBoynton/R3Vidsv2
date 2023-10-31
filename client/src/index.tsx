import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@mui/material'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'

const theme = createTheme({
  palette: {
    text: {
      primary: '#aaaaaa',
    },
    common: {
      black: '#a854a8',
      white: '#ffdb60',
    },
    mode: 'dark',
    primary: {
      main: '#a854a8',
      light: '#aaa',
    },
    secondary: {
      main: '#ffdb60',
    },
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="search" element={<App />} />
      <Route index={true} element={<App />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryProvider = new QueryClient()
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryProvider}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
