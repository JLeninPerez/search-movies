import React, { Component } from 'react'

export class SearcForm extends Component {

    state = { inputMovie : '' }

    handleChange = (e) => {
        this.setState({ inputMovie : e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        alert(this.state.inputMovie)
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