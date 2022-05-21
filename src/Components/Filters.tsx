import React, {Dispatch, SetStateAction, useRef} from "react";
import CustomDropdown from "./CustomDropdown";
import { priceOptions  } from "../data/FilterDropDown";
import { options } from "../data/FilterDropDown"

type FilterProps = {
    isOpen: Boolean,
    priceFilter: options[],
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setPriceFilter: Dispatch<SetStateAction<any>>
    setCategoryFilter?:Dispatch<SetStateAction<string[]>>,
    categoryFilter:string[],
    categoriesList:any,
    handleClearFilter:any
}

const Filter = ({isOpen, priceFilter,handleClearFilter, setIsOpen, setPriceFilter, setCategoryFilter, categoryFilter, categoriesList}: FilterProps) => {
    const filterForm:any = useRef();
    const handleResetFilter = () => {
        handleClearFilter()
        filterForm.current.reset()
    }
    return(
        <section className="filterContainer">
            <div className="filterMain">
                <p className="filterTitle">Filter By:</p>
                <form className="formStyle" id="filterform" ref={filterForm}>
                        <div className="ipradioContainer">
                            <input type="radio" className="filter-radio" value="true" onClick={() => setIsOpen(true)}  />
                            <label className="form-label">Open Now</label>
                        </div>
                        <div className="selectContainer">
                            <CustomDropdown title="Price" list={priceOptions} selectedFilter={priceFilter} setSelectedFilter={setPriceFilter} />
                        </div>

                        <div className="selectContainer">
                            <CustomDropdown title="Categories" list={categoriesList} selectedFilter={categoryFilter} setSelectedFilter={setCategoryFilter}  />
                        </div>

                </form>
            </div>
            <button className="filterBtn" type="reset" onClick={handleResetFilter} disabled={(isOpen || priceFilter.length > 0 || categoryFilter.length > 0) ? false : true}>Clear All</button>
        </section>
    );
};

export default Filter;