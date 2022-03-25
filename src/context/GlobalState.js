import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    toread: localStorage.getItem('toread') ? JSON.parse(localStorage.getItem('toread')) : [],
    finished: localStorage.getItem('finished') ? JSON.parse(localStorage.getItem('finished')) : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('toread', JSON.stringify(state.toread))
        localStorage.setItem('finished', JSON.stringify(state.finished))
    }, [state])

    const addBookToToRead = (book) => {
        dispatch({ type: 'ADD_BOOK_TO_TOREAD', payload: book })
    }

    const removeBookFromToRead = (book) => {
        dispatch({ type: 'REMOVE_BOOK_FROM_TOREAD', payload: book.book_id })
    }

    const addBookToFinished = (book) => {
        dispatch({ type: 'ADD_BOOK_TO_FINISHED', payload: book })
    }

    const moveBookToFinished = (book) => {
        dispatch({ type: 'MOVE_BOOK_TO_FINISHED', payload: book })
    }

    const removeBookFromFinished = (book) => {
        dispatch({ type: 'REMOVE_BOOK_FROM_FINISHED', payload: book.book_id })
    }

    return (
        <GlobalContext.Provider value={{
            toread: state.toread,
            finished: state.finished,
            addBookToToRead: addBookToToRead,
            removeBookFromToRead,
            addBookToFinished,
            moveBookToFinished,
            removeBookFromFinished
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}