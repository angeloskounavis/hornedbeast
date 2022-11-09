import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.closeHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalbody">
          <img id= "modalimg"
            src={this.props.selectedBeast.image_url}
            alt={this.props.selectedBeast.description}
          />
          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.closeHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default SelectedBeast