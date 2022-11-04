import React from 'react'
import Oven from '../Oven/Oven'
import Sink from '../Sink/Sink'
import './Kitchen.css'

function Kitchen() {
  return (
    <div class='kitchen'>Kitchen
        <Oven />
        <Sink />
    </div>
  )
}

export default Kitchen