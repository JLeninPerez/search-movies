import React, { Component } from 'react'

import { Title } from '../components/Title'
import { SearcForm } from '../components/SearchForm'
import { MovieList } from '../components/MoviesList';

export class Home extends Component {
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
            <div>
                <Title>Buscador de Peliculas</Title>
                <div className="SearchForm-wrapper">
                    <SearcForm onResult = { this.handleResult }></SearcForm>
                </div>
                { this.state.usedSearch ? this.renderResult() : <small>Use the form search a movie</small> }
            </div>            
        )
    }
}