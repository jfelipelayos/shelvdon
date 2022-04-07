import React from 'react'
import './AlphabetMenu.css'

export default function AlphabetMenu({ index, sendDataToParent }) {
    let indexes = [...Array(26)].map((_, i) => String.fromCharCode(i + 97).toUpperCase());
    
  return (
    <div style={{width:'85vw', background:'white'}}>
        <hr style={{width:'85vw'}}/>
        {indexes.map((index)=>{
                  return <span style={{marginLeft:'2.8%', fontWeight: 'bold'}}><a href={`#${index}`} id={index} onClick={()=>sendDataToParent(index)} key={index}>{index}</a></span>
              })}
        <hr style={{width:'85vw'}}/>
    </div>
  )
}
