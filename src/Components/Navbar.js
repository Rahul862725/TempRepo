import React, { useState } from 'react'

export default function Navbar(props) {
     
  return (
    <> 
    <nav className={`navbar navbar-expand-lg navbar-white bg-dark`}>
  <a className="navbar-brand text-white" href="/">Football</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-white" href="/">About <span className="sr-only">(current)</span></a>
      </li >
      <li className="nav-item active">
      <a className="nav-link text-white" href="/history">History <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active"> 
        <a className="nav-link text-white" href="/topteams">Top Teams <span className="sr-only">(current)</span></a>
        </li>
      
    </ul>
  
 
  </div>
</nav>
</>
  )
}
