import React, { useContext, useState } from "react";

//@context
import { GlobalContext } from "../../../context/GlobalState";
import AlphabetMenu from "../../AlphabetMenu/AlphabetMenu";

//@component
import { BookFinishedCard } from "../../BookFinishedCard/BookFinishedCard";

//@style
import "./Finished.css";


export const Finished = () => {
  const { finished } = useContext(GlobalContext);
  let indexedList = {};
  let [index, setIndex] = useState('');


const setIndexStructure = ()=>{
    finished.map(i=> indexedList[i.name[0]] = [])
}

const setIndexValues = () => {
    setIndexStructure();
    finished.map(i=> indexedList[i.name[0]].push(i))
}

const sendDataToParent = (index) => { // the callback. Use a better name
  console.log(index);
  setIndex(index);
};

setIndexValues();

  return (
    <div>
      <h2 style={{margin:'0 1.5rem', marginTop:'1rem'}}>Finished books</h2>
      <AlphabetMenu index={index} sendDataToParent={sendDataToParent}/>
      <h1 style={{margin: '8% 0 0 5%', fontWeight:'bold', color:'#9A4444'}}>{index}</h1>
      <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center" style={{marginTop:'5%'}}>
        {indexedList[index]?.length > 0 ? (
          <ul>
            {indexedList[index]?.map((book) => (
              <BookFinishedCard book={book} />
            ))}
          </ul>
        ) : (<h2>Empty List</h2>)}
      </div>
    </div>
  );
};
