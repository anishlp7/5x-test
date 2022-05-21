import React, {Dispatch, SetStateAction, useRef} from "react";
import CustomDropdown from "./CustomDropdown";
import { priceOptions, categoriesOptions } from "../data/FilterDropDown";
import { options } from "../data/FilterDropDown"

type FilterProps = {
    isOpen: Boolean,
    priceFilter: options[],
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setPriceFilter: Dispatch<SetStateAction<any>>
    setRestaurantLists?:Dispatch<SetStateAction<never[]>>,
    setCategoryFilter?:Dispatch<SetStateAction<never[]>>,
    catogoryFilter:any,
    restaurantListsMain: any
}

const Filter = ({isOpen, priceFilter,restaurantListsMain, setRestaurantLists, setIsOpen, setPriceFilter}: FilterProps) => {
    const filterForm:any = useRef();
    const handleResetFilter = () => {
        setIsOpen(false);
        setPriceFilter([])
        setRestaurantLists?.(restaurantListsMain)
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
                            <CustomDropdown title="Price" list={priceOptions} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
                        </div>

                        <div className="selectContainer">
                            <CustomDropdown title="Categories" list={categoriesOptions}  />
                        </div>

                </form>
            </div>
            <button className="filterBtn" type="reset" onClick={handleResetFilter} disabled={(isOpen || priceFilter.length > 0) ? false : true}>Clear All</button>
        </section>
    );
};

export default Filter;