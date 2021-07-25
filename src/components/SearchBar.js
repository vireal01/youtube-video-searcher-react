import React from 'react'

class SearchBar extends React.Component {
    state = {term: ''}

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmission(this.state.term)
    }
    
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui from">
                    <div className="ui form">
                        <label>Video search</label>
                        <input 
                        onChange={this.onInputChange}
                        type="text" 
                        value={this.state.term}></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar