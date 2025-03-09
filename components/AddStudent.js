import  React, { useState } from 'react';


const AddStudent =({ onAddStudent }) => {
    const [name, setName] = useState('');

    const hanleSubmit = (e) => {
        e.preventDefault();
        onAddStudent(name);
        setName('');
    }

  return (
    <form onSubmit={hanleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />

        <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;