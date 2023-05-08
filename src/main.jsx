import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import chakraTheme from './chakraTheme.js'
import DiffChecker from './components/common/DiffChecker.js'
import ultimateData from './components/common/ultimateData.js'

// localStorage.removeItem('A2Z_Archive')

let fetchData = localStorage.getItem('A2Z_Archive')
fetchData = fetchData === null ? ultimateData : JSON.parse(fetchData)
// fetchData = DiffChecker(ultimateData, fetchData)
// console.log(fetchData)
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={chakraTheme}>
            <BrowserRouter>
                <App fetchData={fetchData} />
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
)
