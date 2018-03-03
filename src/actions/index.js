export function selectBook(book){
    //selectBook is an action creator and it needs to return an action, an object with a TYPE property
    console.log('Selected book is ', book.title);

    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
