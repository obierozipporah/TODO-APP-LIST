import { useState } from 'react'
import Form from './components/Form.jsx'
import FilterSection from './components/FilterSection.jsx'
import Items from './components/Items.jsx'


import './App.css'

const App = () => {
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
        </div>
        <button type='submit' className='text-white bg-gradient-to-br from-purple-600'>
          Submit
        </button>
        <Form />
      </form>

        <div className='text-[#494c6b] text-sm flex justify-center gap-8 border-[#d2d3de]'>
                <FilterSection />
            </div>

        <div>Items
          <Items />
          </div>
   )



}
 

 export default App
