import React from "react";

class Beast extends React.Component {
  render(){
    return(
      <>
     <article>
      <h3>{this.props.name}</h3>
      <p>{this.props.info}</p>
      {/* <img src = {this.props.src=""}{this.props.alt=""}/> */}
      <img src = {this.props.picture} alt="Horned Beast"/>

     </article>
     </>
    )
  }
}
export default Beast