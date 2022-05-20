import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Components/Categories';
import Filter from '../Components/Filters';
import Header from '../Components/Header';
import "../Styles/main.scss";

const Main = () => {
   const [restaurantLists, setRestaurantLists] = useState([]);

   useEffect(() => {
      //handleListingSavedSearch()
   }, [])

   const handleListingSavedSearch = async () => {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=Las Vegas&latitude=37.786882&longitude=-122.399972`,
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
         setRestaurantLists(data?.businesses)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    return(
       <div className='mainContainer'>
          <Header />
          <hr className='main-hr-line' />
          <Filter />
          <hr className='main-hr-line' />
          <Categories restaurantLists={restaurantLists} />
       </div>
    );
};

export default Main;