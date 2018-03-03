import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        console.log('Active book', this.props);
        if (!this.props.bookDetail){
            return <div>Please select a book!</div>;
        }

        return (
            <div>
                <h3>Details For:</h3>
                <div >{this.props.bookDetail.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        bookDetail: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
