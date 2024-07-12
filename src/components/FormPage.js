import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const FormPage = ({ onSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    onSubmit(data);
    navigate('/chart');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default FormPage;
