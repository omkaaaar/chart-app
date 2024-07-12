import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormPage from './components/FormPage';
import Chart from './components/Chart';
import './App.css';

const App = () => {
  const [chartData, setChartData] = useState({ xValues: [], yValues: [] });

  const handleFormSubmit = (data) => {
    console.log('Data received from Form:', data);
    setChartData(data);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chart">Chart</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<FormPage onSubmit={handleFormSubmit} />} />
          <Route path="/chart" element={<Chart data={chartData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
