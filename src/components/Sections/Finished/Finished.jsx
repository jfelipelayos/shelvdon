import React, { useContext } from "react";

//@context
import { GlobalContext } from "../../../context/GlobalState";

//@component
import { BookResultCard } from "../../BookResultCard/BookResultCard";

//@style
import "./Finished.css";

export const Finished = () => {
  const { finished } = useContext(GlobalContext);

  return (
    <div className="w-100 h-100 d-flex flex-row justify-content-center align-items-center">
      {finished.length > 0 && (
        <ul>
          {finished.map((book) => (
            <BookResultCard book={book} isFinished={true}  />
          ))}
        </ul>
      )}
    </div>
  );
};
