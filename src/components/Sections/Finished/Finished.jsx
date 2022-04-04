import React, { useContext } from "react";

//@context
import { GlobalContext } from "../../../context/GlobalState";
import AlphabetMenu from "../../AlphabetMenu/AlphabetMenu";

//@component
import { BookFinishedCard } from "../../BookFinishedCard/BookFinishedCard";

//@style
import "./Finished.css";

export const Finished = () => {
  const { finished } = useContext(GlobalContext);

  return (
    <div>
      <h2 style={{margin:'0 1.5rem', marginTop:'1rem'}}>Finished books</h2>
      <AlphabetMenu />
      <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center" style={{marginTop:'20%'}}>
        {finished.length > 0 ? (
          <ul>
            {finished.map((book) => (
              <BookFinishedCard book={book} />
            ))}
          </ul>
        ) : (<h2>Empty List</h2>)}
      </div>
    </div>
  );
};
