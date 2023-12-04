import React from 'react';
import './Nav.css'
function Nav(){

     const body=document.getElementById('body')
     const btn1=document.getElementsByClassName('btn1')
     const card=document.getElementsByClassName('card')

     console.log(card)
     var flag=true
    function handler(){
        if(flag){
            body.style.backgroundColor='black'
            btn1[0].innerHTML='Normal Mode'
            card[0].style.backgroundColor='black'
            card[0].style.color='white'
        }
        else{
            body.style.backgroundColor='white'
            btn1[0].innerHTML='Dark Mode'
            card[0].style.backgroundColor='white'
            card[0].style.color='black'
        }

        flag=!flag
       
    }

    return(
        <div className='container1'>
       <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Service</a></li>
        </ul>
       </nav>

       <button className='btn1' onClick={handler} >Dark Mode</button>
       </div>
    )
}

export default Nav;