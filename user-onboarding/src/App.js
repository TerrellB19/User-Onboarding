import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

import Form from './component/Form';
import * as yup from 'yup';
import schema from './validation/schema';



const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])

const handleSubmit = () => {
  axios.post('https://reqres.in/api/users', formValues)
  .then(res => {
    setUsers([res.data, ...users]);
  })
  .catch(err => console.error(err))
}

const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
}

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={handleChange}
      errors={formErrors}
      submit={handleSubmit}
      />
      <br />
      {users.map((user, idx) => (
        <div key={user.id}>
            <p>Uid: {user.id}</p>
            <p>Date created: {user.createdAt}</p>
            <p>Username: {user.username}</p>
          <br />     
        </div>     
      ))}
    </div>
  );
}

export default App;
