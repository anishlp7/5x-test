import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Status from "./Status";



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
                            <div className="">
                                <Rating fontSize='20px' width="9px" ratingValue={item?.rating} />
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <p className="categoryPlaceValue">{item?.location?.city} - {item?.price}</p>
                                <div className="status">
                                    <Status  fontSize="12px" isClosed={item?.is_closed} size="8px" />
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