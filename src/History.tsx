import './History.css';
import Auditlog from './components/Auditlog'
import React from 'react';

const History = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Median query history</h2>
      </div>
      <Auditlog />
    </div>
  );
}

export default History;