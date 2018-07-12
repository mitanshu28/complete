import React from 'react'
import './App.css'
import Person from './Person.js'

class Final extends React.Component {

render() {
    const { data } = this.props
    const { currentPage } = this.props

    return (
        <div className="container">{data.slice(currentPage, currentPage + 9).map(item => {
            var object = {
                name: item.name,
                recognitionMessage: item.recognitionMessage
            };
            return <Person info={object} />
        })}
        </div>
    );
}
}
export default Final