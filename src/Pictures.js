
function Pictures({wordprop}){
return(
    <div className="pics">
        {wordprop.map((x=>{
            const{id,name,image}=x;
            return(
                <div key={id} className="pictures">
                    <img src={image}  width="400" height="270" alt="trail"/>
                    <p className="trail">{name}</p>
                </div>
            )
        }))}
    </div>
)
    
}
export default Pictures;