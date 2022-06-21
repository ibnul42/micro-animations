import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ButtonPulse from '../../pages/ButtonPulse'
import Home from '../../pages/Home'

function Content() {
  return (
    <div className="max-w-7xl mx-auto">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/button-pulse" element={<ButtonPulse />} />
        </Routes>
    </div>
  )
}

export default Content