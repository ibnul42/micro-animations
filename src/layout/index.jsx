import React from 'react';
import Content from './content';
import './layout.css';

function Layout() {
  return (
    <div className='bg-amber-50 h-screen'>
        <div className="h-[80px] bg-gray-100 flex justify-center items-center">
            <h3 className="font-bold text-lg">All animation</h3>
        </div>
        <div className="min-h-[calc(100%-80px)] bg-gray-900 text-white flex flex-col justify-between">
            <div className="">
                <Content />
            </div>
            <div className="h-[60px] bg-amber-300 flex justify-center items-center">
                <p className='text-center font-bold text-lg'>All right reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Layout