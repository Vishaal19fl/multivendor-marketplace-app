import React, { useState } from 'react';
import "./Gigs.scss";
import { gigs } from "../../data";
import { GigCard } from "../../components/gigCard/GigCard";

export const Gigs = () => {

  const [sort, setSort] = useState("sales");
  const [open,setOpen] = useState(false);

  const reSort = (type) =>{
    setSort(type)
    setOpen(false)
  }

  return (
    <div className="gigs">
      <div className="container">
        <span className='breadcrumbs'>myTems > Web Development > </span>
        <h1>Web Developers</h1>
        <p>
          Choose the best web development service.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>Sort By</span>
            <span className='sortType'>{sort == "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)}/>
            {open && (<div className="rightMenu">
              {sort == "sales" ?( <span onClick={()=>reSort("createdAt")}>Newest</span>) :
              (<span onClick={()=>reSort("sales")}>Best Selling</span>)}
            </div>)}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig)=>(
            <GigCard key={gig.id} item={gig}/>
          ))}
        </div>
      </div>
    </div>
  )
}
