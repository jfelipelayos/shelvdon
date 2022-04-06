import React from 'react'
import { BookFinishedCard } from '../BookFinishedCard/BookFinishedCard';

export default function EmptyList(props) {
    console.log(props.list)

    if (props.index !== '') {
        return <h2>Empty List</h2>;
      }
      return <section>{props.list.map((book) => (
        <BookFinishedCard book={book} />
      ))
        }</section>    
}
