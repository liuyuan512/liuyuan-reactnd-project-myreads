import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    searchResults:[]
  }

  componentDidMount(){
      BooksAPI.getAll().then((books)=>{
          this.setState({books})
      })
  }


  updateBook=(book,shelf)=>{
      let booksArray = []

      booksArray = this.state.books

      const updatBook = booksArray.find(b => b.id === book.id);
      updatBook.shelf = shelf

      this.setState({books:booksArray})

      BooksAPI.update(book, shelf)
  }

  changeBook=(query)=>{

      BooksAPI.search(query, 10).then((searchResults) => {

          let searchBooks = searchResults

          if (searchBooks.length > 0) {
              searchBooks.map((book, i) => {
                  const searchBook = this.state.books.find(c => c.id === book.id)

                  if (searchBook) {
                      searchBooks[i].shelf = searchBook.shelf
                  }
                  else {
                      searchBooks[i].shelf = 'none'
                  }

              })
          }
          else {
              searchBooks = []
          }

          this.setState({searchResults: searchBooks})

      })
  }

  addToShelf=(book,shelf)=>{
      book.shelf=shelf

      this.setState((state)=>{
          state.books.push(book)
      })
      BooksAPI.update(book, shelf)

  }

  render() {
    return (
      <div className="app">
        <Route
            exact path="/search"
            render={()=>(
                <SearchPage
                    onSearchChange={this.changeBook}
                    searchResults={this.state.searchResults}
                    onAddToShelf={this.addToShelf}
                />
            )}
        />
        <Route
            exact path="/"
            render={()=> (
                <ListBooks
                    books={this.state.books}
                    onUpdateBook={this.updateBook}
                />
            )}
        />
      </div>
    )
  }
}

export default BooksApp
