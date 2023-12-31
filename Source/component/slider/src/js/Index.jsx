'use client'
import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS = { align: 'start', dragFree: false, loop: true, dragThreshold: 5 }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Embla() {
  return (
    <div className="sandbox relative" >
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </div>
  )
}

export default Embla


