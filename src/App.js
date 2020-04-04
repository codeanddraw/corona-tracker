import React from 'react';
import moment from 'moment';
import coronaLogo from './assets/corona-img.png';
import './stylesheets/App.css';
import Table from './components/Table'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount() {
   
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={coronaLogo} className="App-logo" alt="logo" />
        <span className="col row App-title">
          <h2>Live statistics to track COVID19 cases reported in all the U.S. states.</h2>
          <p>By Nisha Chaube | {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </span>
      </header>
      <div className="App-body">
         <Table/>
      </div>
    </div>
  );
  }
}

export default App;
