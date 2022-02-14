import { useState } from 'react';
import { data } from './data';
import './App.css';
import Logic from './Logic';

function Parks(){
const [park, setPark]= useState(data);
const [showText, setText]= useState(false);

const showTextOnClick=(x)=>{
    x.showMore= !x.showMore
    setText(!showText);
}
const [pic, setPic]= useState(0);
const [info, setInfo]= useState(park);
let newArray=[...info];

const Next=(e,index)=>{
    setInfo(newArray);
    const photo= document.querySelectorAll('#photo');
    newArray[index]=park[index];

    setPic((pic=>{
        pic++;
        if(pic>1){
            pic=0;
        }
        return pic;
    }))
    photo[index].setAttribute('src', newArray[index].image[pic])
}
const Previous=(e,index)=>{
    setInfo(newArray);
    const photo=document.querySelectorAll('#photo');
    newArray[index]=park[index];

    setPic((pic=>{
        pic--;
        if(pic<0){
            pic=1;
        }
        return pic
    }))
    photo[index].setAttribute('src', newArray[index].image[pic])
}
return(
    
    <Logic word={park} click={showTextOnClick} previous={Previous} next={Next}/>
)
}
export default Parks;
