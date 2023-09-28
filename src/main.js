//


import data from './data.json'
import Cardcomp from './card';

function Main(){
    return(

<>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"4%", marginLeft:"10px", marginRight:"10px"}}>
     {data.map(function(item){
return(
    <Cardcomp image={item.image_url} title ={item.title}/>

    
   )
     }
    )
     }
     </div>
            </>
    );
}

export default Main;