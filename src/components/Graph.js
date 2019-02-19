import React from 'react'
import '../App.css'

class Graph extends React.Component{

  constructor(props){
    super(props)
  }
  render(){
    let w = this.props.width + '%'
    return(
      <div className = 'barback'>
        
        <div className = 'bar' style = {{width : w}}>
        </div>
      </div>
    )
  }
}

export default Graph