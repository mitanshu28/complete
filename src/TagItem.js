import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown.js'

class TagItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        }
    }
    
    hasBeenClicked(a) {
                
        const { sortedArr } = this.props
         sortedArr.map(tag => {
            if(tag.keyword==a){
                console.log(tag.msg)
            };
        })
    }

    render() {

        const { sortedArr } = this.props
        let tagsOptions;
        tagsOptions = sortedArr.slice(0,8).map(tag => {
            return <td key={tag.keyword}>
                <a onClick={(e) => this.hasBeenClicked(tag.keyword)}>
                    {tag.keyword}
                </a>
            </td>
        })
        
        return (
            
<div  className="TagItem">
                <table>
                    <tbody>
                        <tr><td>
                            {tagsOptions}
                        </td>
                        <tr><Dropdown title="See All"  sortedArr={this.props.sortedArr}/></tr>
                       
                        </tr>
                    </tbody>
                </table>
                
            </div>
        );
        }
}
export default TagItem;