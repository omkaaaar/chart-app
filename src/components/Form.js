import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [xData, setXData] = useState('');
  const [yData, setYData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const xValues = xData.split(',').map(Number);
    const yValues = yData.split(',').map(Number);
    console.log('xValues:', xValues, 'yValues:', yValues);
    onSubmit({ xValues, yValues });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>X-axis data (comma separated):</label>
        <input type="text" value={xData} onChange={(e) => setXData(e.target.value)} />
      </div>
      <div>
        <label>Y-axis data (comma separated):</label>
        <input type="text" value={yData} onChange={(e) => setYData(e.target.value)} />
      </div>
      <button type="submit">Plot</button>
    </form>
  );
};

export default Form;
