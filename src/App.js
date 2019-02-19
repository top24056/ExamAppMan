import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './App.css'
import { addlistpokemon } from './actions/action'
import { Container,Row,Col } from 'react-bootstrap';
import List from './components/List'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}


class App extends Component {


  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentWillMount(){
    const {dispatch} = this.props
    axios({
      method : 'GET',
      url : 'http://localhost:3030/api/cards',
      responseType:'stream'
    })
    .then((response) => {
      dispatch(addlistpokemon(response.data.cards))
    })
  }





  render() {
    return (
      <div className="App">
        <Container style ={{height : '712px',overflowY:'auto'}}>
          <Row>
            <Col>
              <List/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list : state.addlist
})

const AppWithConnect = connect(mapStateToProps)(App)

export default AppWithConnect
