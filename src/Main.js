import React from 'react';
import Person from './person.js';

class Main extends React.Component{
  render(){
    return(
      <>
      <main id='main-component'>
        <Person name="Zoe"/>
        <Person name="Jonathan"/>
        <Person name="Mark"/>
        <p>Howdy!</p>
      </main>
      </>
    )
  }
}

export default Main;