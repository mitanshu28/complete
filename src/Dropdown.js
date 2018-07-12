import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome'

class Dropdown extends Component {
constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  hasBeenClicked(a) {
                
    const { sortedArr } = this.props
     sortedArr.map(tag => {
        if(tag.keyword==a){
            console.log(tag.msg)
        };
    })
}
  
  render(){
    const{sortedArr} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dropdown">
  
      <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dropbtn"><b>{headerTitle}</b></div>
          {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        } 
      </div>
  
       {listOpen && <div class="dropdown-content">
       
  
         {sortedArr.slice(8,44).map(item => (
         <ul ><li> <a onClick={(e) => this.hasBeenClicked(item.keyword)}>
          {item.keyword}
      </a></li></ul>
          ))}
          </div>}
      </div>
    )
  }
}
export default Dropdown;