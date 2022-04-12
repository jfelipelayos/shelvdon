import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import AlphabetMenu from '../../AlphabetMenu/AlphabetMenu'
import { BookFinishedCard } from '../../BookFinishedCard/BookFinishedCard'
import EmptyList from '../../EmptyList/EmptyList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import "../../../styles/Sections.css";

export const Favorites = () => {
  const { favorites: favorite } = useContext(GlobalContext)
  let indexedList = {};
  let [index, setIndex] = useState('');


  const setIndexStructure = () => {
    favorite.map(i => indexedList[i.name[0]] = [])
  }

  const setIndexValues = () => {
    setIndexStructure();
    favorite.map(i => indexedList[i.name[0]].push(i))
  }

  const sendDataToParent = (index) => {
    setIndex(index);
  };

  setIndexValues();

  return (
    <div>
      <div className="subheader-section">
        <h2>Favorite books</h2>
        {index ? (
          <h2 className="subheader-title">by letter:</h2>
        ) : null}
        <h1 className="subheader-title-index">{index}</h1>
        <button href="#clear" className="subheader-title-button" onClick={(()=>setIndex(''))}><FontAwesomeIcon icon={faBroom}/> <span className="hide-caption-button-mobile">Clear filters</span></button>
      </div>
      <AlphabetMenu sendDataToParent={sendDataToParent} />
      <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center subsection-list">
        {indexedList[index]?.length > 0 ? (
          <ul>
            {indexedList[index]?.map((book) => (
              <BookFinishedCard book={book} />
            ))}
          </ul>
        ) : (<EmptyList index={index} list = {favorite}/>)}
      </div>
    </div>
  )
}
