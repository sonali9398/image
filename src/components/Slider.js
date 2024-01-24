import React from 'react'
import pics from '../constants'
const Slider = () => {
  return (
    <div>
        <h1>Image Slider</h1>
        {
            pics.map((curr) => {
                return curr
            })
        }
    </div>
  )
}

export default Slider