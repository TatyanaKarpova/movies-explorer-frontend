import React from 'react';
import '../../vendor/hover.css';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__checkbox'>
        <input type="checkbox" className='filter-checkbox__input' />
        <span className='filter-checkbox__circle hover' />
      </label>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;