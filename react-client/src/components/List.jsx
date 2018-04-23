import React from 'react';

const List = (props) => (
  <div >
    
   
    {props.items.map(item => 
    		              <div id='List'>    

                      <table id ='table'>
                    <tr>
                      <th>{item.name}</th>
      
                     </tr> 
                     <tr>
                      <td>{item.content}</td>
                       </tr>   

                      </table>
                     <br></br>
    		              </div>
      
    )}  
  </div>
)

export default List;