import React, { Component } from 'react'
import './Nav1.css';
export default class Nav1 extends Component {
  render() {
    return (
        <div className='container' >
        <nav>
         <ul>
             <li><a href="">Home</a></li>
             <li><a href="">Contact</a></li>
             <li><a href="">Service</a></li>
         </ul>
        </nav>
        </div>
    )
  }
}
