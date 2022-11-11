import React from 'react';
import HornedBeast from './HornedBeast.js';
import { Dropdown, Form, ListGroup } from 'react-bootstrap';
// import hornedData from './data.json';

// import Container from 'react-bootstrap/container';
// import Row from 'react-bootstrap/row';


// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      howToSort: '',
      filterBeasts: []
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const numHorns = parseInt(event.target.value);
    let gallery = this.props.beasts;
    console.log(numHorns);
    if (numHorns) {
      gallery = this.props.beasts.filter(beast => 
        beast.horns === numHorns
      )

    }

    this.setState({
      // name: event.target.name.value,
      // howToSort: event.target.name.value,
      filterBeasts: gallery
    });
console.log(this.state.filterBeasts);

  }


  render() {

    // let numbers = data.map((dataItem, idx) => {
    //   return <DropdownGroup.Item key={idx}>{dataItem}</DropdownGroup.Item>

    // })
console.log(this.state.filterBeasts);

    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="filterOption">Number of Horns</Form.Label>
            <Form.Select id="filterOption" name="selected" as="select" onChange={this.handleSubmit}>
              <option value=" ">All Beasts</option>
              <option value="1">Single Horn</option>
              <option value="2">Double Horns</option>
              <option value="3">Triple Horns</option>
            </Form.Select>
          </Form.Group>
          {/* <button type="submit">Submit</button> */}
          {/* <button type="submit">Submit</button> */}
        </Form>
        {
          this.state.filterBeasts.map((beast, idx) => (
            <HornedBeast
              openHandler={() => this.props.openHandler(beast)}
              key={idx}
              _id={beast.id}
              image_url={beast.image_url}
              title={beast.title}
              description={beast.description}
              keyword={beast.keyword}
              horns={beast.horns}
              className='unicorn'
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