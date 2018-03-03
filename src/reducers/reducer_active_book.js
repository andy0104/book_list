//State argument is not the application state, it is only responsible for the state this reducer is responsible for
export default function(state = null, action){
    console.log('Reducer actions: ', action);
    switch (action.type) {
        case 'BOOK_SELECTED':
            console.log('BOOK_SELECTED: ', action.payload);
            return action.payload;
            break;
        default:
            return null;
    }

    return state;
}
