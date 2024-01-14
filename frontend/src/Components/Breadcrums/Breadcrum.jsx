import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="arrowIcon" /> SHOP <img src={arrow_icon} alt="arrowIcon" /> 
        {product.category} <img src={arrow_icon} alt="arrowIcon" />
        {product.name}
    </div>
  )
}
