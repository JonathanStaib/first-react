import React from 'react'
import Modal from 'react-bootstrap/Modal'

class Modalbeast extends React.Component{
  render(){
    return(
      <div class="Modal">
    <Modal 
    show={this.props.showModal}
    onHide={this.props.handleCloseModal}
>
  <Modal.Header closeButton>

  <Modal.Title>
  <img src= {this.props.selectedBeast.image_url} alt="hello"/>
  {/* <h1>{this.props.selectedBeast.name}</h1> */}
  </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  {/* <p>{this.props.selectedBeast.info}</p> */}
  </Modal.Body>
  <Modal.Footer></Modal.Footer>
  

</Modal>
</div>
    
    )}
  }
export default Modalbeast;