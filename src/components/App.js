import React from 'react'
import UserCreate from './UserCreate.js'
import LanguageContext from '../contexts/languageContext.js'
import ColorContext from '../contexts/colorContext.js'


class App extends React.Component {

    state = {
        language: 'english'
    }

    onLanguageChange = (language) => {
        this.setState({ language: language })
    }


    render() {
        return (
            <main className='ui container'>
                <div>
                    Select a language
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                <ColorContext.Provider value="primary" >
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                 </ColorContext.Provider>

            </main>)
    }
}

export default App;