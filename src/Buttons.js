import './App.css';
function Buttons({chosenTrail, reset}){
    return(
        <div className="buttons"> 
        <button className='change' onClick={reset}>All trails</button>
            <button className="change" onClick={()=>chosenTrail('easy')}>Easy</button>
            <button className="change" onClick={()=>chosenTrail('moderate')}>Moderate</button>
            <button className="change" onClick={()=>chosenTrail('hard')}>Hard</button>
        </div>
    )
}
export default Buttons;