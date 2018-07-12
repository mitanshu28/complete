import React, { Component } from 'react';
import TagItem from './TagItem';

class Tags extends Component {
    render() {
        return(
           <div className="Tags">
                <TagItem sortedArr={this.props.sortedArr} />
           </div> 
        );
    }
}

export default Tags;