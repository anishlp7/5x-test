import React, {useState} from 'react';

type Rating = {
    fontSize: string,
    width: string,
    ratingValue: number
}

const Rating = ({fontSize, width, ratingValue}: Rating) => {
    const [rating, setRating] = useState(ratingValue*2-1);

    let stars = [];
    for (let i = 0; i < 10; i++) {
      let ratingStyle = "fa fa-star-o";
      if (rating >= i && rating !== null) {
        ratingStyle = "fa fa-star";
      }
      stars.push(
        <i
          style={{ display: "inline-block", width: `${width}`, overflow: "hidden", fontSize:`${fontSize}`, color:'#002B56', direction: (i%2===0) ? "ltr" : "rtl"}}
          className={ratingStyle}
        />
      );
    }
    return(
        <div className="rating">
        {stars}
      </div>
    );
};

export default Rating;