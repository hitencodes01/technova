"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Results from '@/components/Results'
import React from 'react'

export default function page() {
    return (
        <div>
            <Navbar />
            <div className='mt-5'>
                <Results  />
            </div>
            <Footer /></div>
    )
}
