import left from './left-arrow.png';
import right from './right-arrow.png';
function Logic({word, click, next, previous}){
    return(
    <div>
        <div className='header'>
       <h1>The most beautiful parks in Metro Vancouver</h1>
        </div>
       
           {word.map((x =>{
            const {image, name, desc, showMore}=x;
            const index= word.indexOf(x);
        return(
        <div className='cont'>
        <div className='container'>
        <button onClick={(e)=>previous(e,index)} className="arrow"><img src={left} width="20"/></button>
        <img id="photo" src={image[0]} width="400" height="220" alt='park'/>
        <button onClick={(e)=>next(e,index)} className="arrow"><img src={right} width="20"/></button>
        </div>
        <div className='heading'>
        <div>
            <h3>{name}</h3>
        </div>

        <p>{showMore ? desc : desc.substring(0,100)} ...
        <button onClick={()=> click(x)} className="showMore">{showMore? "Show less" : 'Show more'}</button></p>
        </div>
        </div>
        
            )
        }))}
       
      
       </div> 
    )
}
export default Logic;