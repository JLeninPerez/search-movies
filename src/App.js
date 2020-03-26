import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearcForm } from './components/SearchForm'
import { Movie } from './components/Movie'

import { Detail } from './pages/Detail'

import 'bulma/css/bulma.css'
import './App.css';
import { MovieList } from './components/MoviesList';

class App extends Component {
  state = {result: [], usedSearch : false}
  
  handleResult = (e) => {
    this.setState({result : e, usedSearch : true})
  }

  renderResult () {
    return this.state.result.length === 0 ?
      <p>Sorry :( Result not found!</p> :
      <MovieList movies = {this.state.result}/>    
  }
  
  render () {
    return (
      <div className="App">
        <Title>Buscador de Peliculas</Title>
        <div className="SearchForm-wrapper">
          <SearcForm onResult = { this.handleResult }></SearcForm>
        </div>
          { this.state.usedSearch ? this.renderResult() : <small>Use the form search a movie</small> }          
      </div>
    )
  }  
}

export default App;
