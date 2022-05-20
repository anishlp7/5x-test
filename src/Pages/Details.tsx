import React from "react";
import DetailMapSection from "../Components/DetailMapSection";
import Rating from "../Components/Rating";
import Review from "../Components/Review";
import "../Styles/details.scss";

const DetailsView = () => {
    return(
        <div className="detailsSecContainer">
            <div className="detailSecHeaderContainer">
                <p className="detailSecHeader">Restaurant 3</p>
                <Rating fontSize='30px' width="13px" ratingValue={4*2}/>
                <div className="detailLoc">
                    <p className="detailLocName">Japanese • $$$</p>
                    <div className="detailShopStatus">
                    <p className="">Open Now</p> 
                    </div>
                </div>
            </div>
            <hr className='main-hr-line' />
            <DetailMapSection />
            <hr className='main-hr-line' />
            <Review />
        </div>
    );
};

export default DetailsView;