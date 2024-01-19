import React from 'react'
import "./Featured.scss"

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Purchase your items from myTems.</h1>
                <button className='btn'>Explore</button>
            </div>
            <div className="right">
                <img src="https://pngimg.com/d/elon_musk_PNG16.png" alt="" />
            </div>
        </div>
    </div>
  )
}
