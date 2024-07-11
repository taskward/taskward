import '@/assets/styles/main.scss'
import 'nprogress/nprogress.css'
import '@/shared/i18n'
import '@/shared/echarts'

import { enableMapSet } from 'immer'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app'

enableMapSet()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
