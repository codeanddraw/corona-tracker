import React from 'react';
import axios from 'axios';


class AreaMap extends React.Component{
  constructor(props){
    super(props)
    this.state={
        result: []
    }
  }

  componentDidMount() {
    axios.get(`https://covidtracking.com/api/states`)
      .then(res => {
        const result = res.data
        this.setState({result})
        
      })
  }

  getRows = (element) => {
    return <tr key ={element.hash}>
            <th scope="row">{element.state}</th>
            <td>{element.totalTestResults}</td> 
            <td>{element.positive}</td> 
            <td>{element.death}</td> 
           </tr>
  }

  render(){
       let { result } = this.state

       return (
          <AreaMap className="AreaMap AreaMap-hover">
              <thead>
                  <tr>
                      <th>State</th>
                      <th>Tests Done</th>
                      <th>Positive</th>
                      <th>Deaths</th>
                  </tr>
              </thead>
              <tbody>
                 {result.map(element => {
                    return this.getRows(element)
                 })}
              </tbody>
          </AreaMap>
  );
  }
}

export default AreaMap;
