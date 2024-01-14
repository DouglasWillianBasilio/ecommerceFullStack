import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitate buyimg and selling of products or services over the internet servers as a virtual marketplace where businesses and individual showcase their products.</p>
        <p>
            E-commerce websites typically display products or services a detailed descriptions, images, prices, and any available.
        </p>
      </div>
    </div>
  )
}

