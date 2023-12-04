import React from "react";
import './Home.css'
import Card from './Card';

function Home() {
    const obj1={img:'./pic1.png',title:'Card Title 1'}
    const obj2={img:'./pic2.png',title:'Card Title 2'}
    const obj3={img:'./pic3.png',title:'Card Title 3'}
    return (
        <>
            <div className="container">
             <Card {...obj1}/>
             <Card {...obj2}/>
             <Card {...obj3}/>
               
            </div>
        </>
    )
}

export default Home;