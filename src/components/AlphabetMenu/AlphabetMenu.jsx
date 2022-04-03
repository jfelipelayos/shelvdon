import React from 'react'
import './AlphabetMenu.css'

export default function AlphabetMenu() {
    let indexes = [...Array(26)].map((_, i) => String.fromCharCode(i + 97).toUpperCase());
  return (
    <div style={{position: 'fixed', width:'20vw'}}>
        <hr style={{width:'100vw'}}/>
        {indexes.map((index)=>{
                  return <span style={{marginLeft:'11.5%', fontWeight: 'bold'}}><a href={`#${index}`}>{index}</a></span>
              })}
              <hr style={{width:'100vw'}}/>
    </div>
  )
}
