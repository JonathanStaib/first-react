import React from 'react';
import Beast from './Horned-Beasts.js';
// import Kaheera from './Kaheera.wbp';
// import PrimTim from './PrimeTime.jpg';

class Main extends React.Component{
  render(){
    return(
      <>
      <main id='main-component'>
        <Beast name="PrimeTime" picture="PrimeTime.jpg" info= "Primevil Titan from Magic The Gathering, played in amulet Titan and Titan Shift  modern decks."/>
        <Beast name="Kaheera" src = "Kaheera.wbpg" info= "Kaheera companion card played in modern decks."/>
        <p>Howdy!</p>
      </main>
      </>
    )
  }
}

export default Main;