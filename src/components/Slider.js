import React, { useState } from 'react'
import './Slider.css'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

const Slider = ({data}) => {
    const[slide, setSlide] = useState(0);
    
    function nextSlide(){
        setSlide(slide === data.pics.length - 1 ? 0 : slide + 1);
        console.log(setSlide)
    }

    function prevSlide(){
        setSlide(slide === 0 ? data.pics.length - 1 : slide - 1);
    }

   return (
    <div className='carousel'>

        <BsArrowLeftCircleFill className='arrow left' onClick={prevSlide}/>
        {
            data.pics.map((curr, index) => {
                return <img src={curr.src} alt={curr.alt} key={index} className={slide === index ? "slide" : 'slide-hidden'}/>
            })
        }
        <BsArrowRightCircleFill className='arrow right' onClick={nextSlide}/>
        <span className='indicators'>
            {data.pics.map((_, index) =>{
                return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
            })}
        </span>
    </div>
  )
}

export default Slider