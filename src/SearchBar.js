import React from 'react'
import icon from './icon.png'

const SearchBar = props => {
return(
  <div class="wrap">
    <div class="search">
      <input type="text" class="search-term" placeholder="Search here" onChange={props.searchFunc}/>
      <img class="svg"src={icon}/></div>
  </div>      
)
}

export default SearchBar