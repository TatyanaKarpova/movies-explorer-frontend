import React from 'react';
import './FilterCheckbox.css';
import '../../vendor/hover.css';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__checkbox'>
        <input type="checkbox" className='filter-checkbox__input' />
        <span className='filter-checkbox__switch hover' />
      </label>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;