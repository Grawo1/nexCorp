import React from "react";


function List(){
   
    
               console.log("data")
           let items =  window.localStorage.getItem('List');
           
           return(
            <div>
                <h2>List</h2>
            <div>{items}</div>
        
                </div>
          
        )


}


export default List;