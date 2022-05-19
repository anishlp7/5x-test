import React, { useState } from "react";
import '../Styles/customDropdown.scss';
import { options } from "../data/FilterDropDown"

type DropdownProps = {
  title: string;
  list: Array<options>;
};

const CustomDropdown = ({ title, list }: DropdownProps) => {
  const [isListOpen, setIsListOpen] = useState<Boolean>(false);

  const selectItem = (item: options) => {};

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <div className="dd-wrapper">
      <button type="button" onClick={toggleList} className="dd-header">
        <div className="dd-header-title">{title}</div>
        {isListOpen ? (
          <i className="fa fa-angle-up" style={{ fontSize: "16px", color:'#969696' }}></i>
        ) : (
          <i className="fa fa-angle-down" style={{ fontSize: "16px", color:'#969696' }}></i>
        )}
      </button>
      {isListOpen && (
        <div className="dd-list">
          {list.map((item: options) => {
            return (
              <button
                type="button"
                className="dd-list-item"
                key={item.id}
                onClick={() => selectItem(item)}
              >
                {item.value}
                {' '}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
