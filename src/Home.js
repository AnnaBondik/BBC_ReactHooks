import { useState } from 'react';
import { slides } from './slides';
import arrowRight from './right-arrow.png';
import arrowLeft from './left-arrow.png';
import './App.css';
function Home(){
    const [photo, setPhoto]= useState(0);
    const {id, image}= slides[photo];

    const next=()=>{
        setPhoto((i=>{
            i++;
            if(i>slides.length-1){
                i=0;
            }
            return i;
        }))
    }
    const previous=()=>{
setPhoto((i=>{
    i--;
    if(i<0){
        i=slides.length-1;
    }
    return i;
}))

    }
    return(
    <div>
<div className='header'> 
<h1>Welcome to Beautiful British Columbia</h1>
</div>
        <div className='slides' key={id}>
            <button className='arrow' onClick={previous}><img src={arrowLeft} width="30" alt="left"/></button>
        <img src={image} width="950" alt="bc"/>
        <button className='arrow' onClick={next}><img src={arrowRight} width="30" alt="right"/></button>
        </div>
    </div>
    )
}
export default Home;