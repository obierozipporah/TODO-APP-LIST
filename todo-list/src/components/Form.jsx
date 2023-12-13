import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='bg-white py-2 px-3 rounded-md'>
      <form className='flex items-center' onSubmit={handleSubmit}>
        <div className='w-full'>
          <input
            type='text'
            placeholder='Create new Todo item'
            className='text-grey-500'
            onChange={handleChange} 
            value={inputValue} 
          />
          <button type='submit' className='text-white bg-gradient-to-br from-purple-600'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;