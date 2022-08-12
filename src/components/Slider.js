import React, { useState } from 'react'
import SliderData from './SliderData'

const Slider = ({currentIndex, setCurrentIndex, customise}) => {
  
  return (
    <div className='slider'>
        {
            SliderData.map((element, index) => {
               return (
                <div className={currentIndex === index ? "slideImage active" : "slideImage"} key={index}>
                 <img src={element.image} alt="image" />
               </div>
               )
            })
        }
        {
          customise.dots && (
            <div className="dots">
            {
                SliderData.map((ele, index) => {
                    return <div className={ currentIndex === index ? "dot active" : "dot"} key={index} onClick = { () => {setCurrentIndex(index)}}></div>
                })
            }
        </div>
          )
        }
       
    </div>
  )
}

export default Slider
