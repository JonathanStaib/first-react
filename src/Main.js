import React from 'react';
import Beast from './Beast.js';
// import Kaheera from './assets/Kaheera.webp';
// import PrimTim from './assets/PrimeTime.jpg';
import data from './data.json';

class Main extends React.Component{
  render(){
    let beasts = [];

    data.forEach((horn, index)=>{
      beasts.push(
        <Beast
        name={horn.name}
        picture={horn.image_url} 
        info={horn.description}
        key={index}
        />
      )
    });

    return(
      <>
      <main id='main-component'>
        {beasts}
        {/* <Beast name="PrimeTime" picture={PrimTim} info= "Primevil Titan from Magic The Gathering, played in amulet."/>
        <Beast name="Kaheera" picture={Kaheera} info= "Kaheera companion card played in modern decks."/>
        <p>Howdy!</p> */}
      </main>
      </>
    )
  }
}

export default Main;