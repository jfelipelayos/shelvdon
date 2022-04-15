//@ vendor
import React from 'react'

//@ style
import './AlphabetMenu.css'

export default function AlphabetMenu({ sendDataToParent }) {
    let indexes = [...Array(26)].map((_, i) => String.fromCharCode(i + 97).toUpperCase());

  return (
    <div className='alphabet-letters-container'>
        <hr/>
        <div className='index-letter'>
          {
            indexes.map((index)=> {
                  return (
                    <span 
                      className='alphabet-menu' 
                      key={`${index}-span`}>
                        <a className='link' 
                          href={`#${index}`} 
                          id={index} 
                          onClick={()=>sendDataToParent(index)}>
                            {index}
                          </a>
                    </span>
                  )
              })}
        </div>
        <hr/>
    </div>
  )
}
