import React, {useState} from 'react'
import "./Carousel.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

export const Carousel = ({data}) =>{
    const [slide,setSlide] = useState(0);

    const nextSlide = () =>{
        setSlide(slide === data.length -1 ? 0 : slide+1);
    }

    const previousSlide = () =>{
        setSlide(slide === 0 ? data.length-1 : slide-1);
    }


    return (
    <div className='carousel'>
  <BsArrowLeftCircleFill className='arrow arrow-left' onClick={previousSlide}/>
  
  {data.map((item, idx) => {
    return (
      <img
        className={slide === idx ? "slide" : "slide slide-hidden"}
        src={item.src}
        alt={item.alt}
        key={idx}
      />
    );
  })}
  
  <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
  
  <span className='indicators'>
    {data.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setSlide(idx)}
        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
      />
    ))}
  </span>
</div>

    );
};