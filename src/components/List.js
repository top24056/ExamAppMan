import React from 'react'
import { connect } from 'react-redux'
import { Container,Row,Col,Button } from 'react-bootstrap'
import imghappy from '../cute.png'
import Graph from './Graph'
import { adddeckpokemon } from '../actions/action'



class List extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      list : false
    }
  }

  addDeck = (id,e) => {
    const {dispatch} = this.props
    for(let i=0;i<this.props.list.length;i++){
      if(this.props.list[i].id === id){
        let temp = this.props.list[i]
        dispatch(adddeckpokemon(temp))
      }
    }
  }

  createList = () => {
    let parentlist = []
    for(let i=0;i<this.props.list.length;i++){
      let info = this.props.list[i]
      //hp
      let hp
      if(parseInt(info.hp) >= 100){
        hp = 100
      }
      else if(info.hp === 'None'){
        hp = 0
      }
      else{
        hp = parseInt(info.hp)
      }

      //str damage
      let str
      let damage = 0 
      if(info['attacks'] !== undefined){
        str = info['attacks'].length * 50
        for(let i=0;i<info['attacks'].length;i++){
          damage += parseInt(info.attacks[i].damage)
        }
      }
      else{
        str = 0
      }

      //weaknesses
      let weaknesses,weak
      if(info['weaknesses'] !== undefined){
        weaknesses = info['weaknesses'].length * 100
        weak = info['weaknesses'].length * 50
      }
      else{
        weaknesses = 0
      }



      let happiness = Math.floor((((hp / 10) + (str /10 ) + 10 - (weak)) / 5) * -1)
      

      let parenthappy = []
      for(let j=0;j<happiness;j++){
        let happy = <img src = {imghappy} height = {'30px'} key = {'happy'+j}/>
        parenthappy.push(happy)
      }

      parentlist.push(
          <Row style = {{height : '200px',padding:'10px',backgroundColor:'#d5d6dc',margin:'10px'}} key = {i}>
            <Col md = {3} style={{height : '100%'}}>
              <img src = {info.imageUrl} height = {'100%'} alt = {i}/>
            </Col>
            <Col md = {7}>
              <Row>
                <h2>{info.name}</h2>
              </Row>
              <Row>
                <Col md ={2}>
                  <h4>HP</h4>
                </Col>
                <Col>
                  <Graph width={hp}/>
                </Col>
              </Row>
              <Row>
                <Col md ={2}>
                  <h4>STR</h4>
                </Col>
                <Col>
                  <Graph width={str}/>
                </Col>
              </Row>
              <Row>
                <Col md ={2}>
                  <h4>WEAK</h4>
                </Col>
                <Col>
                  <Graph width={weaknesses}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  {parenthappy}
                </Col>
              </Row>
            </Col>
            <Col md = {2}>
              {/* <button style={{color:'#d5d6dc'}}> */}
                <h3 style ={{color:'#dc7777',textAlign:'right',cursor: 'pointer'}}  onClick={(e) => this.addDeck(info.id)}>Add</h3>
              {/* </button> */}
            </Col>
          </Row>
      )
    }
    return parentlist
  }


  render(){
    return(
      <div>{this.createList()}</div>
    )
  }

}



const mapStateToProps = (state) => ({
  list : state.addlist
})


const ListWithConnect = connect(mapStateToProps)(List)

export default ListWithConnect