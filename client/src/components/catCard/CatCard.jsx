import React from 'react'
import "./CatCard.scss"
import { Link } from 'react-router-dom'

export const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
      <div className='catCard'>
        <div className="container">
            <img src={item.img} alt="" />
            <span className='desc'>{item.desc}</span>
            <span className='title'>{item.title}</span>
        </div>
    </div>
    </Link>
  )
}
