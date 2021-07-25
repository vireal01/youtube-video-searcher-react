import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    onTermSubmit = (term) => {
        youtube.get('/search')
    }
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmission={this.onTermSubmit}/>
            </div>
        )
    }
}

export default App; 