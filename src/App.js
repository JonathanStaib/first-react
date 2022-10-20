// imports

import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import './App.css';
import Data from './data.json';
import ModalBeast from './ModalBeast.js'

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