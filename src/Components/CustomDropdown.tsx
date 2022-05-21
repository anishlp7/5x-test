import React, { useState,Dispatch, SetStateAction } from "react";
import '../Styles/customDropdown.scss';
import { options } from "../data/FilterDropDown";

type DropdownProps = {
  title: string,
  list: Array<options>,
  selectedFilter?: string[],
  setSelectedFilter?: Dispatch<SetStateAction<string[]>>
};

const CustomDropdown = ({ title, list,setSelectedFilter, selectedFilter }: DropdownProps) => {
  const [isListOpen, setIsListOpen] = useState<Boolean>(false);

  const selectItem = (e:any, item: options) => {
    const findValue = (selectedFilter|| []).findIndex((val:string) => val === item.alias);
    if(e.target.checked === true){
      setSelectedFilter?.((oldArray:string[]) => [...oldArray, item.alias])
    } else if(findValue !== -1) {
      selectedFilter?.splice(findValue, 1);
      setSelectedFilter?.([...selectedFilter || []])
    } else {
      console.log("Console it")
    }
  };

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
              <label
             
                className="dd-list-item container"
                key={item.id}
                onClick={(e) => selectItem(e,item)}
              >
                <input type="checkbox" style={{display:'none'}} />
                <div className="checkmark"></div>
                {item.title}
                {' '}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
