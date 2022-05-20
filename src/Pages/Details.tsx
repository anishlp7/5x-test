import React from "react";
import DetailMapSection from "../Components/DetailMapSection";
import Rating from "../Components/Rating";
import Review from "../Components/Review";
import Status from "../Components/Status";
import { useLocation } from 'react-router-dom';
import "../Styles/details.scss";

const DetailsView = () => {
    const { state }:any = useLocation();
    console.log("Checking the props", state);
    return(
        <div className="detailsSecContainer">
            <div className="detailSecHeaderContainer">
                <p className="detailSecHeader">{state?.item?.name}</p>
                <Rating fontSize='30px' width="13px" ratingValue={state?.item?.rating}/>
                <div className="detailLoc">
                    <p className="detailLocName">{state?.item?.location?.city} - {state?.item?.price}</p>
                    <div className="detailShopStatus">
                        <Status isClosed={state?.item?.is_closed} size='20px' fontSize='22px' />
                    </div>
                </div>
            </div>
            <hr className='main-hr-line' />
            <DetailMapSection location={state?.item?.location} image_url={state?.item?.image_url} />
            <hr className='main-hr-line' />
            <Review restId={state?.item?.id} reviewCount={state?.item?.review_count}  />
        </div>
    );
};

export default DetailsView;