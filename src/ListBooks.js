import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


const ListBooks = (props)=>{
    //   const propTypes ={
    //     books:PropTypes.array.isRequired,
    //     onUpdateBook:PropTypes.func.isRequired
    // }

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
                                        {props.books.filter((c) => (c.shelf === "currentlyReading")).map((book)=>(
                                            <Book
                                                book={book}
                                                onUpdateBook={props.onUpdateBook}
                                            />
                                        ))}
                                    </ol>
                                </div>

                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want To Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {props.books.filter((c) => (c.shelf === "wantToRead")).map((book)=>(
                                            <Book
                                                book={book}
                                                onUpdateBook={props.onUpdateBook}
                                            />
                                        ))}
                                    </ol>
                                </div>

                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {props.books.filter((c) => (c.shelf === "read")).map((book)=>(
                                            <Book
                                                book={book}
                                                onUpdateBook={props.onUpdateBook}
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

export default ListBooks