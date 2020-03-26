import React, { Component } from 'react'

const API_KEY = '315cdeb'

export class SearcForm extends Component {

    state = { inputMovie : '' }

    handleChange = (e) => {
        this.setState({ inputMovie : e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(result => {
                const {Search = [], totalResults = "0"} = result
                console.log({Search, totalResults})
                this.props.onResult(Search)
            })        
    }

    render () {
        return (
            <form onSubmit = { this.handleSubmit } >
                <div className="field has-addons">
                    <div className="control">
                        <input 
                        className="input" 
                        type="text" 
                        placeholder="Movie to search.."
                        onChange = { this.handleChange }
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}