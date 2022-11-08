import React from 'react';

class HornedBeast extends React.Component
{
  render() {
    return (
     <>
    <h2>{this.props.title}</h2>
    <img src={this.props.imageURL} />
     <p>{"A unicorn and a narwhal nuzzling their horns"}</p>

    </>
    )
  }
}

export default HornedBeast;