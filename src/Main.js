import React from 'react';
import HornedBeast from './HornedBeast.js';
// import Container from 'react-bootstrap/container';
// import Row from 'react-bootstrap/row';
import data from './data.json'

class Main extends React.Component {
  
  
  
  render() {
    return (
      <>
        {
          data.map((beast, idx) => (
        <HornedBeast
        key = {idx}
          _id={beast.id}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          className = 'unicorn'
        />
        ))
      }

      </>
    )
  
  }
}

export default Main;

// "_id": 1,
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1

// "_id": 2,
//     "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//     "title": "Rhino Family",
//     "description": "Parent rhino with two babies",
//     "keyword": "rhino",
//     "horns": 2