import React, { useEffect, useState } from 'react'
import { BookFinishedCard } from '../BookFinishedCard/BookFinishedCard';

export default function EmptyList(props) {
    let [itemsCount, setItemsCount] = useState(0)

    useEffect(()=>{
      setItemsCount(props.list.length)
    },[props.list.length])

    if (props.index !== '' || itemsCount===0) {
        return <h2>Empty List</h2>;
      }
      return <section>{props.list.map((book) => (
        <BookFinishedCard currentView={props.currentView} book={book} key={book.book_id} />
      ))
        }</section>    
}
