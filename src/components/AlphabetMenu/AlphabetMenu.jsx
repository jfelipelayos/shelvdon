import React from 'react'
import './AlphabetMenu.css'

export default function AlphabetMenu({ sendDataToParent }) {
    let indexes = [...Array(26)].map((_, i) => String.fromCharCode(i + 97).toUpperCase());
    
  return (
    <div style={{width:'85vw', background:'white'}}>
        <hr style={{width:'85vw'}}/>
        <div className='index-letter'>
        {indexes.map((index)=>{
                  return <span className='alphabet-menu' key={`${index}-span`}><a className='link' href={`#${index}`} id={index} onClick={()=>sendDataToParent(index)}>{index}</a></span>
              })}
        </div>
        <hr style={{width:'85vw'}}/>
    </div>
  )
}
