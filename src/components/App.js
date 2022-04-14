import React from 'react'
import UserCreate from './UserCreate.js'
import { LanguageStore } from '../contexts/languageContext.js'
import ColorContext from '../contexts/colorContext.js'
import LanguageSelector from './LanguageSelector.js'



class App extends React.Component {

   


    render() {
        return (
            <main className='ui container'>
                <LanguageStore>

                
                    <LanguageSelector />

                        <ColorContext.Provider value="red" >
                            
                                <UserCreate />
                        
                        </ColorContext.Provider>

                </LanguageStore>

            </main>)
    }
}

export default App;