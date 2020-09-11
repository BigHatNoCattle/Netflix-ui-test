import React, { useState } from 'react';


const TitleForm = ({ 
  item, 
  edit, 
  editTitle, 
  submitEdit 
}) => {
  const [ input, setInput ] = useState('');

  const handleChange = e => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    submitEdit({
      id: item.id,
      title: input,
    });

    setInput('');
  }

  return (
    <form className="title-form" autoComplete="off" onSubmit={handleSubmit}>
      <input
        className="title-input"
        placeholder={item.title}
        value={input}
        name="text"
        onChange={handleChange}
      />
    </form>
  )
}

export default TitleForm;