import React from 'react';
import './App.css';
import axios from 'axios';
import Avatar from './newsroom.jpg';
import PaginationButton from './PaginationButton'
import SearchBar from './SearchBar.js'
import Person from './Person.js'
import Initial from './InitialComp.js'
import Final from './FinalComp'
import sortJsonArray from 'sort-json-array'
import Tags from './Tags'

export default class PersonList extends React.Component {
constructor() {
super();
this.state = {
  persons: [],
  currentPage: 0,
  data: [],
  f: 0,
  final_keywords: ['unit testing', 
      'visual studio', 
      'ios', 
      'android',
      'xke', 
      'sprint', 
      'xebialabs',
      'thedevtheory',
      'handbook',
      'cert',
      'barclays',
      'automation',
      'appdynamics',
      'people first', 
      'dof',
      'hackathon',  
      'mongodb',
      'xi-apps', 
      'apache', 
      'vat',
      'atlanta', 
      'mckinsey',
      'mdl cloud',
      'devops',
      'scala',
      'data encryption',
      'julia',
      'pydata',
      'big data',
      'hadoop',
      'agile',
      'hiring',
      'sdlc',
      'beachbody',
      'tt tournament',
      'gtl',
      'tomcat',
      'express',
      'it security',
      'data migration',
      'react',
      'storm',
      'azure'
      ],
     
      sortedArr: [],
}
this.updatePage = this.updatePage.bind(this);
}

fetchData() {
axios.get(`https://xi-apps.in/app/api/recognitions?token=tFcEtB5kxsN1gaS207MOHKs5`)
  .then(res => {
    var data1 = res.data;
        this.setState({
          persons:data1
        });
       return this.compare(this.state.final_keywords, this.state.persons);
      })
      .catch(error => alert(error));
}

componentDidMount() {
this.fetchData()
}
filterMessage(e) {
var temp = [], temp1 = []
this.state.persons.map(item => {
  if (item.recognitionMessage.toLowerCase().includes(e.target.value.toLowerCase())) {
    temp = {
      name: item.recognizerName,
      recognitionMessage: item.recognitionMessage
    }
      temp1.push(temp)
      this.setState({
        f:1
      })
  }
})
this.setState({
  data:temp1
})
}
compare(a,b) {
        
  var z=[];
  var ss=[];
  var ch=[]
  var string='';
  var recogName=[];
  var count = 0;
  a.forEach(e1 => {
    var string1 = e1.toLowerCase();
    b.forEach(e2 => {
       string = e2.recognitionMessage.toLowerCase();
       
      if(string.includes(string1))
      {
        count=count+1;
        recogName.push(e2.recognizerName)
        ss.push(string.toLowerCase());
      }        
    });      
    z.push({keyword: string1.substring(0, 1).toUpperCase() + string1.substring(1), value: count, recognitionMessage:ss, name:recogName });
    count=0;
    ch.push(ss)
    ss=[];
    recogName=[];
  } 
);
sortJsonArray(z,'value','des');  
console.log(z)
this.setState({    
  sortedArr:z
})
}


updatePage(e) {
let startRecord = (parseInt(e.target.innerText) - 1) * 9;
console.log(startRecord);
this.setState({
  currentPage: startRecord
});
}

getPaginationButtons(numberOfPages) {

let buttons = [];
for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
  buttons.push(<PaginationButton pageNumber={i} updatePage={this.updatePage} />)
};
return buttons;
}

render() {
const { data } = this.state
const { persons } = this.state
const { f } = this.state
var buttons = [];
if (this.state.persons && this.state.persons.length) {
  buttons = this.getPaginationButtons(this.state.persons.length / 9);
}
var currentPage = parseInt(this.state.currentPage);

return (
  <div className="PageContent">
    <p id="Wall-of-Contribution">WALL OF RECOGNITION</p>
    <p id="Coming-together">Coming together is a beginning. Keeping together is progress. Working together is success.</p>
    <img src={Avatar} class="Wall-background-image" width="1200" height="140" />
    <div className="head2"><Tags sortedArr={this.state.sortedArr}/></div>
    <div className="searching"> <SearchBar searchFunc={(e) => this.filterMessage(e)}/></div>
    {f == 0 ? (<Initial persons={this.state.persons} currentPage={this.state.currentPage} />) : (<Final data={this.state.data} currentPage={this.state.currentPage} />)}
    <div class="pagination">
      <a href="#">&laquo;</a>
      {buttons}
      <a href="#">&raquo;</a>
    </div>

  </div>

);
}
}