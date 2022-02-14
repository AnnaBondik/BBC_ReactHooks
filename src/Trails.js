import { useState } from 'react';
import Buttons from './Buttons';
import { filter } from './filter';
import Pictures from './Pictures';
import './App.css';
function Trails(){
const [trail, setTrail]= useState(filter);

const chooseTrail=(difficulty)=>{
    const newTrail= filter.filter(item=> item.difficulty===difficulty);
    setTrail(newTrail);
}
const resetTrail=()=>{
    setTrail(filter);
}

return(
    <div>
        <div className='header'>
            <h1>Explore trails in British Columbia</h1>
        </div>
        <Buttons chosenTrail={chooseTrail} reset={resetTrail}/>
        <Pictures wordprop={trail}/>
    </div>
)
 }
 export default Trails;