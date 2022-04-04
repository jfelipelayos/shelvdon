export default function BookShouldBeDisabled ({book_id}, bookList) {
        return bookList !== undefined
        ? !!bookList.find(b => b.book_id === book_id)
        : false
}