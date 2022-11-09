import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0
    };
  }

  handleVote = () => {
    this.setState({
      vote: this.state.vote + 1
    });
  }


  render() {
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Header as="h2"
              id={this.props._id}
              keyword={this.props.keyword}
            >
              {this.props.title}
            </Card.Header>

            {/* <h2>{this.props.title}</h2> */}
            {/* <p>💛 {this.state.vote} Vote</p> */}
            <img
              src={this.props.image_url}
              alt={this.props.description}
              onClick = {this.props.openHandler}
              // title={this.props.title}
            />
            {/* <p>{this.props.description}</p> */}
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button className='likeButton' onClick={(this.handleVote)} variant="success">vote</Button>
            <Card.Text id='likesCount'> 💛  {this.state.vote}</Card.Text>
        </Card.Body>
        {/* <p onClick={this.handleVote}>Vote</p> */}
      </Card>
      </>
    )
  }
}

export default HornedBeast;


// render() {
//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <Card.Header as="h2"
//             id={this.props._id}
//             keyword={this.props.keyword}
//           >
//             {this.props.title}
//           </Card.Header>
//           <div className='imgCardText'>
//             <img
//               className='animalMainImg'
//               src={this.props.image_url}
//               title={this.props.title}
//               alt={this.props.description}
//               onClick={(this.handleClick)}
//             ></img>
//             <Card.Text>
//               {this.props.description}
//             </Card.Text>
//           </div>
//           <div className='likesWrapper'>
//             <Button className='likeButton' onClick={(this.handleLike)} variant="success">Like</Button>
//             <Card.Text id='likesCount'> :heart: {this.state.likes}</Card.Text>
//           </div>
//         </Card.Body>
//       </Card>
//     </>
//   )
// }
// }