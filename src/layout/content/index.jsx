import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'

function Content() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default Content