import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Beast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      clicks: 0,
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  handleClicks = () => {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  handleHelpClick = () => {
    this.props.handleOpenModal(this.props.horn);
  }

  render(){
    return(
      <>
     <Card style={{ width: '15rem', height: '25rem' }}>
     <Card.Img variant="top" 
     onClick={this.handleHelpClick} 
     src={this.props.image_url} 
     alt={this.props.name}/>
     <Card.Body>
      <Card.Title >{this.props.name}</Card.Title>
      <Card.Text>{this.state.likes} Favorites</Card.Text>
      <Card.Text> {this.state.clicks} Clicks</Card.Text>
      <Card.Text>{this.props.info}</Card.Text>
      {/* <img src = {this.props.picture} alt="Horned Beast"/> */}
      <div>{this.state.helpMe ? 'I need Help' : ''}</div>
      <Button onClick={this.handleLikes}variant="info">❣️</Button>
      </Card.Body>
     </Card>
     </>
    )
  }
}
export default Beast

// onClick={this.props.addHearts}