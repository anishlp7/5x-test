import React, { useEffect, useState } from 'react';
import Rating from './Rating';

type ReviewProps = {
    restId: string,
    reviewCount: number
}

type ReviewList = {
    id: string,
    rating: number,
    text: string,
    url: string,
    user: User,
    time_created: string
}

type User = {
    id: string,
    image_url: string,
    name: string,
    profile_url:string
}

const Review = ({restId, reviewCount}:ReviewProps) => {
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        handleReview()
    }, [])

    const handleReview= async () => {
        let response = await fetch(
          `${process.env.REACT_APP_BUSINESSES}/${restId}/reviews`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer 7vrWaGQ5iXEQRR-1J5BiJC41KyuhMSAyc_k_exSRbg_s47HGVEWNGl6kfI27rL_vK59-AI--au8ET5XWyp4h5Hz9_nkEwToSUF2F_AjlVDeJ5a2nPFCCbkf9tIaGYnYx`,
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
             console.log("Checking the data", data)
             setReviewList(data?.reviews)
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

    return(
        <div className='reviewContainer'>
            <p className='reviewHeaderTitle'>{reviewCount} Reviews</p>
            {
                 reviewList.length <= 0 ?
                 (
                     <p className="loading">Loading reviews...</p>
                 ):
                reviewList.map((val:ReviewList) => {
                    return(
                        <>
                        <div className='reviewList'>
                            <div className='reviewProfile'>
                                <img src={val?.user?.image_url} alt="profile" className='reviewProfileImage' />
                                <div className='reviewProfileDet'>
                                    <p className='reviewProfileName'>{val?.user?.name}</p>
                                    <p className='reviewCommentDate'>{val?.time_created}</p>
                                </div>
                            </div>
                            <div className='reviewContent'>
                                <Rating fontSize='20px' width="9px" ratingValue={val?.rating} />
                                <p className='reviewContentText'>{val?.text}</p>
                            </div>
                        </div>
                        <hr className='main-hr-line' style={{marginBottom:'80px'}} />
                        </>
                    )
                })
            }
        </div>
    );
};

export default Review;