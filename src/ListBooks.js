import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component{

    static propTypes ={
        books:PropTypes.array.isRequired,
        onUpdateBook:PropTypes.func.isRequired
    }

    // state={
    //     showCurBooks:[],
    //     showWantBooks:[],
    //     showReadBooks:[]
    // }
    //
    // componentDidMount(){
    //     let showCurBooks = this.props.books.filter((c) => (c.shelf === "currentlyReading"))
    //     let showWantBooks = this.props.books.filter((c) => (c.shelf === "wantToRead"))
    //     let showReadBooks = this.props.books.filter((c) => (c.shelf === "read"))
    //
    //
    //     this.setState({
    //         showCurBooks:showCurBooks,
    //         showWantBooks:showWantBooks,
    //         showReadBooks:showReadBooks
    //     })
    // }

    updateBook=(book,shelf)=>{
        this.props.onUpdateBook
    }

    render(){

        let showCurBooks = this.props.books.filter((c) => (c.shelf === "currentlyReading"))
        let showWantBooks = this.props.books.filter((c) => (c.shelf === "wantToRead"))
        let showReadBooks = this.props.books.filter((c) => (c.shelf === "read"))

        return(
            <div className="list-books">

                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>

                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {showCurBooks.map((b)=>(
                                            <Book book={b}
                                                  onUpdateBook={this.updateBook}
                                            />
                                        ))}
                                    </ol>
                                </div>

                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want To Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {showWantBooks.map((b)=>(
                                                <Book book={b}
                                                      onUpdateBook={this.updateBook}
                                                />
                                        ))}
                                    </ol>
                                </div>

                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {showReadBooks.map((b)=>(
                                            <Book book={b}
                                                  onUpdateBook={this.updateBook}
                                            />
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">
                        <Link
                            to="/search">
                        </Link>

                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>

        )
    }
}

export default ListBooks