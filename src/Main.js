import React from 'react';
import Beast from './Beast.js';

class Main extends React.Component{
  render(){
    let beasts = this.props.data.map((horn, index)=>{
        return <Beast
        name={horn.name}
        image_url={horn.image_url} 
        info={horn.description}
        horns={horn.horns}
        key={index}
        addHearts={this.props.addHearts}
        handleOpenModal={this.props.handleOpenModal}
        horn= {horn}
        />
    });

    return(
      <>
      <main id='main-component'>
        {beasts}
      </main>
      </>
    )
  }
}

export default Main;