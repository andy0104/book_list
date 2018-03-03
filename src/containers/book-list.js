import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/index';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return <li onClick={() => {this.props.selectBook(book)}} key={book.title} className="list-group-item">{book.title}</li>
        });

    }

    render(){
        return (
            <ul className="list group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//Maps the action creator with the container and all the reducers
//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all the reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Maps the application/reducer state to the container components
function mapStateToProps(state){
    //whatever is returned from this function it will
    //show up as props in the BookList component
    return {
        books: state.books
    };
}

//Connect the application/reducer state to the component and the action creator
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
