import React from 'react'
import LanguageContext from '../contexts/languageContext.js'


class Field extends React.Component {


    static contextType = LanguageContext

    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam'
        return (
            <div className="ui field">
                <label>{text}</label>
                <input type="text" className="" />
            </div>
        )
    }
}

export default Field;