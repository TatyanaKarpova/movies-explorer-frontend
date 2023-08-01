import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ value, onChange }) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__checkbox">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          checked={value}
          onChange={onChange}
        />
        <span className="filter-checkbox__switch" />
      </label>
      <p className="filter-checkbox__title">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;