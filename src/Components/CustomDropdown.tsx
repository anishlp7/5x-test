import React, { useState,Dispatch, SetStateAction } from "react";
import '../Styles/customDropdown.scss';
import { options } from "../data/FilterDropDown";

type DropdownProps = {
  title: string,
  list: Array<options>,
  priceFilter?: options[],
  setPriceFilter?: Dispatch<SetStateAction<options[]>>
};

const CustomDropdown = ({ title, list,setPriceFilter, priceFilter }: DropdownProps) => {
  const [isListOpen, setIsListOpen] = useState<Boolean>(false);
  let [count, setCount] = useState(0);

  const selectItem = (item: options) => {

    const findValue = (priceFilter|| []).findIndex((val) => val.id === item.id);
    console.log(findValue);
    if(findValue !== -1) {
      console.log("It on if block");
      priceFilter?.splice(findValue, 1);
      setPriceFilter?.(priceFilter || [])
      setCount(count++)
    } 
    else if(count === 1) {
      console.log("It on else block")
      setPriceFilter?.(oldArray => [...oldArray, item])
      setCount(1)
    } else {
      setCount(1)
    }

    if(count === 2){
      setPriceFilter?.(oldArray => [...oldArray, item])
      setCount(0);
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
                onClick={() => selectItem(item)}
              >
                <input type="checkbox" style={{display:'none'}} />
                <div className="checkmark"></div>
                {item.value}
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
