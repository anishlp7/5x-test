import React, { useState,Dispatch, SetStateAction } from "react";
import '../Styles/customDropdown.scss';
import { options } from "../data/FilterDropDown";

type DropdownProps = {
  title: string,
  list: Array<options>,
  priceFilter?: any,
  setPriceFilter?: Dispatch<SetStateAction<any>>
};

const CustomDropdown = ({ title, list,setPriceFilter, priceFilter }: DropdownProps) => {
  const [isListOpen, setIsListOpen] = useState<Boolean>(false);

  const selectItem = (e:any, item: options) => {
    console.log("Checked the e",e.target.checked)
    const findValue = (priceFilter|| []).findIndex((val:any) => val === item.value);
    if(e.target.checked === true){
      setPriceFilter?.((oldArray:any) => [...oldArray, item.value])
    } else if(findValue !== -1) {
      priceFilter?.splice(findValue, 1);
      console.log("Checking the final FIlter", priceFilter)
      setPriceFilter?.([...priceFilter || []])
    } else {
      console.log("Just Logging in")
    }
    console.log(findValue)
   
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
