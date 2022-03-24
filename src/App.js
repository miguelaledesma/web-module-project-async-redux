import React from 'react';
import { connect } from 'react-redux';
import Activity from './component/Activity';

import './App.css';

function App() {
  

  return (
    <div className="App">
      <h1>Async Redux Project </h1>
      <Activity />
    </div>
  );
}

export default connect() (App);

