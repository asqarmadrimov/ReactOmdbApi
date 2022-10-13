import React from 'react'
import Loader from '../Companents/Loader'
import Movies from '../Companents/Movies'
import Search from '../Companents/Search'
import './main.css'

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=962e287c&s=madagascar')
      .then(respons => respons.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  searchInput = (name, type = 'all') => {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=962e287c&s=${name}&type=${type === "all" ? "movie" : type}`)
      .then(respons => respons.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
  }

  render() {
    return (
      <>
      <Search moviesSearchName={this.searchInput}/>
        <main className="main text-center">
          {!this.state.loading 
           ? (<Movies movies={this.state.movies} />)
           : <Loader/> }
        </main>
      </>
    )
  }
}