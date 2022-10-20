// imports

import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import './App.css';
import Data from './data.json';
import ModalBeast from './ModalBeast.js';
import { Form, Button} from 'react-bootstrap';

// class component
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      heart: '',
      showModal: false,
      selectedBeast: '',
      sortedData: Data,
    }
    }

  addHearts = () => {
    this.setState({
      heart: this.state.heart + '♥️',
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  handleOpenModal = (beasts) => {
    this.setState({
      showModal: true,
      selectedBeast: beasts,
    })
  }

  handleInput = (event) => {
    let userName = event.target.value;
    this.setState({
      name: userName
    });
  }

  handleSelect = (event) => {
    let selected = +event.target.value;


    if(selected === 1){
      let newData = Data.filter(hornedBeasts => hornedBeasts.horns === 1) 
      this.setState({
        sortedData: newData
      })
    } else if(selected === 2){
      let newData = Data.filter(hornedBeasts => hornedBeasts.horns === 2);
      this.setState({
        sortedData: newData
      })
    } else if(selected === 3){
      let newData = Data.filter(hornedBeasts => hornedBeasts.horns === 3);
      this.setState({
        sortedData: newData
      })
    }
    else if(selected === 100){
      let newData = Data.filter(hornedBeasts => hornedBeasts.horns === 100);
      this.setState({
        sortedData: newData
      })
    }
    else {
      this.setState({
        sortedData: Data
      });
    }
   
  }

  render(){
    return(
      <> 
      <Header 
       heart = {this.state.heart}
      />
      <Main
        addHearts={this.addHearts}
        handleOpenModal={this.handleOpenModal}
        data={this.state.sortedData}
        />
        <main>
        <article>
        <Form onSubmit={this.handleSubmit}>
        <Form.Label>Your Name: 
          <Form.Control type="text" name="name" onInput={this.handleInput}/>
        </Form.Label>

        <Form.Group>
          <legend>Amount of Horns</legend>
          <Form.Select name="selected" id="" type="number" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form.Group>
      </Form>
      </article>
      </main>
      
      <ModalBeast
      handleCloseModal={this.handleCloseModal}
      handleOpenModal={this.handleOpenModal}
      showModal={this.state.showModal}
      selectedBeast={this.state.selectedBeast}
      />
      <Footer />
      </>
    )
  }
}


// export
export default App