import React from 'react'
import './App.css'
import Person from './Person.js'

class Initial extends React.Component {

render() {
    const { persons } = this.props
    const { currentPage } = this.props

    return (
        <div className="container">{persons.slice(currentPage, currentPage + 9).map(item => {
            var object = {
                name: item.recognizerName,
                recognitionMessage: item.recognitionMessage
            };
            return <Person info={object} />
        })}
        </div>
    );
}
}

export default Initial