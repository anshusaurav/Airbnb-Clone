import React, { Component } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";



import "./App.css";

import { Provider } from "react-redux";
import MapContainer from './components/maps'
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div style={{ width: '100%', height: '400px' }}>
              <MapContainer />
            </div>,
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
