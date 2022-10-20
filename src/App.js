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

  render(){
    return(
      <>
      <Header 
       heart = {this.state.heart}
      />
      <Main
        addHearts={this.addHearts}
        handleOpenModal={this.handleOpenModal}
        data={Data}
        />
        <main>
        <article>
        <Form onSubmit={this.handleSubmit}>
        <Form.Label>Name: 
          <Form.Control type="text" name="name" onInput={this.handleInput}/>
        </Form.Label>

        <Form.Label htmlFor="age">Age:</Form.Label>
        <Form.Control id="age" type="number" />

        <Form.Group>
          <legend>Selected Numbers</legend>
          <Form.Select name="selected" id="" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
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