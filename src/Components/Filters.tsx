import React from "react";
import CustomDropdown from "./CustomDropdown";
import { priceOptions, categoriesOptions } from "../data/FilterDropDown";

const Filter = () => {
    return(
        <section className="filterContainer">
            <div className="filterMain">
                <p className="filterTitle">Filter By:</p>
                <form className="formStyle" id="filterform">
                        <div className="ipradioContainer">
                            <input type="radio" className="filter-radio" />
                            <label className="form-label">Open Now</label>
                        </div>
                        <div className="selectContainer">
                            <CustomDropdown title="Price" list={priceOptions}  />
                        </div>

                        <div className="selectContainer">
                            <CustomDropdown title="Categories" list={categoriesOptions}  />
                        </div>

                </form>
            </div>
            <button className="filterBtn" type="button">Clear All</button>
        </section>
    );
};

export default Filter;