import React from 'react'

export default function Card(props) {
  return (
    <div className='card'> 
    <h1>Title: {props.title}</h1>
    {!props.flag &&  
      <img src={props.imgUrl}/>
    }
    {!props.flag && <p>{props.article}</p>}
    {props.flag && <h5>Rating: {props.rating}</h5>}
    {props.flag && <h5>Roster: {props.roster}</h5>}
    </div>
  )
}
