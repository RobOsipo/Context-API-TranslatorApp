import React from 'react'
import LanguageContext from '../contexts/languageContext.js'
import ColorContext from '../contexts/colorContext.js'


class Button extends React.Component {

       render() {

           return (
               <ColorContext.Consumer>
                   {color => (        
                    <LanguageContext.Consumer>
                        {context => (
                                <button className={`ui button ${color}`}>{context.language === 'english' ? 'Submit' : 'Voorleggen'}</button>
                            )}
                    </LanguageContext.Consumer>
                   )}
               </ColorContext.Consumer>
           )
       }
    
}

export default Button;

// class Button extends React.Component {

//     static contextType = LanguageContext


//     render() {
//         const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
//         return (
            
//             <button className="ui button primary">{text}</button>
//         )
//     }
// }

// export default Button;