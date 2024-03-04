
import {   useEffect, useState } from 'react';
import "./App.css"
function App() {


const references=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
const [tableau,setTableau]=useState(["","","","","","","","",""])
const [x,setX]=useState(true)
const [finale,setFinale]=useState(false)

useEffect(()=>{

if(x===false){
let table1=[]
   tableau.map((e,index)=> {if(e.localeCompare("x")===0){return index } return null}).forEach((e)=>{
if(e!==null ){table1.push(e)}
})

references.forEach((e)=>{
if(table1.includes(e[0]) && table1.includes(e[1]) && table1.includes(e[2])){
setFinale(true)
}})}



 if(x===true){
  let table2=[]
     tableau.map((e,index)=> {if(e.localeCompare("o")===0){return index } return null}).forEach((e)=>{
  if(e!==null ){table2.push(e)}
  })
  references.forEach((e)=>{
    if(table2.includes(e[0]) && table2.includes(e[1]) && table2.includes(e[2])){
    setFinale(true)
    }})}

  


},[tableau])






const tache=(indice)=>{

 
    if(x===true && tableau[indice].length===0){
      setTableau(tableau.map((element,index)=>{
        if(index===indice){return "x"} 
      
      return element
      }))
    
    
    setX(false)
    }
    
    
    if(x===false && tableau[indice].length===0){
      setTableau(tableau.map((element,index)=>{
        if(index===indice){return "o"} 
      
      return element
      }))
    
    
    setX(true)
    }
    
 




}



  return (
    <div className="App w-screen h-screen flex justify-center items-center" >
      
<div className=''>
{finale===false ? 
<div>
<h1 className='font-bold text-3xl text-black'>Tic Tac Toe</h1>
  <table className='w-96 h-96'>


<tbody>

<tr className='w-full h-1/3'>
  <th className='bg-blue-600 border border-black w-1/3' onClick={()=>{tache(0)}} >{tableau[0]}</th>
  <th onClick={()=>{tache(1)}}  className='bg-blue-600 border border-black w-1/3'>{tableau[1]}</th>
  <th onClick={()=>{tache(2)}}   className='bg-blue-600 border border-black w-1/3'>{tableau[2]}</th>
</tr>
<tr className='w-full h-1/3'>
  <th  onClick={()=>{tache(3)}}   className='bg-blue-600 border border-black w-1/3'>{tableau[3]}</th>
  <th onClick={()=>{tache(4)}}   className='bg-blue-600 border border-black w-1/3'>{tableau[4]}</th>
  <th onClick={()=>{tache(5)}}   className='bg-blue-600 border border-black w-1/3'>{tableau[5]}</th>
</tr>
<tr className='w-full h-1/3'>
  <th onClick={()=>{tache(6)}}   className='bg-blue-600 border border-black w-1/3'>{tableau[6]}</th>
  <th onClick={()=>{tache(7)}}   className='bg-blue-600 border border-black w-1/3'>{tableau[7]}</th>
  <th onClick={()=>{tache(8)}}   className='bg-blue-600 border border-black w-1/3'>{tableau[8]}</th>
</tr>


</tbody>

</table>
</div>
: null}



{(finale===true && x===false) || (finale===true && x===true) ? 
finale===true && x===false ? 
<div className='flex flex-col'>
  <p>first player won</p> 
  <button className='bg-blue-200 rounded-lg' onClick={()=>{
setFinale(false)
setTableau(["","","","","","","","",""])
setX(true)
  }}>play again</button>
</div> : finale===true && x===true ? 
<div className='flex flex-col'>
  <p>second player won</p> 
  <button className='bg-blue-200 rounded-lg' onClick={()=>{
setFinale(false)
setTableau(["","","","","","","","",""])
setX(true)
  }}>play again</button>
  </div> : null 
: null}






</div>


    </div>
  );
}

export default App;
