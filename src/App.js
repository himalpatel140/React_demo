import React from 'react';
import logo from './logo.svg';
import './App.css';

import FormValidations from "./components/FormValidations/FormValidations";

class App extends React.Component {
  render() {
    return(
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-3"></div>
          <div className = "col-sm-6">
            <FormValidations />
          </div>
          <div className = "col-sm-3"></div>
        </div>
      </div>
    )
  }
}

export default App;
