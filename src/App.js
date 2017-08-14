import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults:[]
  }

  componentDidMount(){
      BooksAPI.getAll().then((books)=>{
          this.setState({books:books})
      })
  }


  updateBook=(book,shelf)=>{
      if(book.shelf !== shelf){
          BooksAPI.update(book,shelf).then(()=>{
              book.shelf = shelf
              this.setState((state)=>({
                  books:state.books.filter((b)=>b.id !== book.id).concat([book])
              }))
          })
      }
  }

  searchBookList=(query)=>{

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


  render() {
    return (
      <div className="app">
        <Route
            exact path="/search"
            render={()=>(
                <SearchPage
                    onSearchChange={this.searchBookList}
                    searchResults={this.state.searchResults}
                    onAddToShelf={this.updateBook}
                />
            )}
        />
        <Route
            exact path="/"
            render={()=> (
                <ListBooks
                 onUpdateBook={this.updateBook}
                 books={this.state.books}
                />
            )}
        />
      </div>
    )
  }
}

export default BooksApp
