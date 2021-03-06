import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchPage extends Component{
    state={
        query:''
    }

    searchChange=(query)=>{
        this.setState({query:query.trim()})
        if(query){
            this.props.onSearchChange(query)
        }
    }

    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={(event)=>this.searchChange(event.target.value)}
                               value={this.state.query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.searchResults.length>0 && this.props.searchResults.map((book)=>(
                            <Book
                                book={book}
                                onUpdateBook={this.props.onAddToShelf}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage