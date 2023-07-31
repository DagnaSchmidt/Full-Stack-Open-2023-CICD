import React from 'react'
// import ReactDOM from 'react-dom'
// ReactDOM.render(<App />, document.getElementById('app'))

import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
