import React from "react";

const Categories = () => {
    return(
        <section className="categoriesContainer">
            <p className="categoriesHeader">All Restaurants</p>
            <div className="categoriesListContainer">
            {
                [0,1,2,3,4,5,6,7].map((item:number) => {
                    return(
                        <div className="categoriesList">
                            <div className="rect-box"></div>
                            <p className="categorylistText">Very Long Name Restaurants Number 1 In List</p>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <p className="categoryPlaceValue">THAI - $$$</p>
                                <div className="status">
                                    <div className="icon"></div>
                                    <p className="categoryPlaceValue">Open Now</p>
                                </div>
                            </div>
                            <button type="button" className="categoryBtn">Learn More</button>
                        </div>
                    )
                })
            }
            </div>
            <div style={{display:'flex', justifyContent:'center', margin:'5rem 0 15rem 0'}}>
                <button type="button" className="loadMoreBtn">Load More</button>
            </div>
           
            
        </section>
    );
};

export default Categories;