import React from "react";
import { Link } from "react-router-dom";

const Categories = ({restaurantLists}:any) => {
    return(
        <section className="categoriesContainer">
            <p className="categoriesHeader">All Restaurants</p>
            <div className="categoriesListContainer">
            {
                restaurantLists.length <= 0 ?
                (
                    <p className="loading">Please wait...</p>
                ):
                (restaurantLists || []).map((item:any) => {
                    return(
                        <div className="categoriesList" key={item?.id}>
                            <img src={item?.image_url} alt={item?.name} className="categories-img" />
                            <p className="categorylistText">{item.name}</p>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <p className="categoryPlaceValue">{item?.location?.city} - {item?.price}</p>
                                <div className="status">
                                    <div className="icon"></div>
                                    <p className="categoryPlaceValue">Open Now</p>
                                </div>
                            </div>
                            <Link to="/details" state={{item: item}} className="categoryBtn">Learn More</Link>
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