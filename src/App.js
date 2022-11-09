import React from 'react';
import Header from './Header.js';
// import HornedBeast from './HornedBeast.js';
import Main from './Main.js';
import Footer from './Footer';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beasts: data,
      selectedBeast: null,
    };
  }



  openHandler = (beast) => {
    this.setState({ showModal: true, selectedBeast: beast });
  }

  closeHandler = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        {
          this.state.selectedBeast &&
          <SelectedBeast
            showModal={this.state.showModal}
            closeHandler={this.closeHandler}
            selectedBeast={this.state.selectedBeast}
            // imageTag={this.state.imageTag}
          />
        }
        <Header />
        <Main
          beasts={this.state.beasts}
          openHandler={this.openHandler}
        />
        <Footer />
      </>
    );
  }
}

export default App;