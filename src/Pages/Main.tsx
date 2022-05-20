import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Components/Categories';
import Filter from '../Components/Filters';
import Header from '../Components/Header';
import "../Styles/main.scss";
import { options } from "../data/FilterDropDown";

const Main = () => {
   const [restaurantLists, setRestaurantLists] = useState([]);
   const [restaurantListsMain, setRestaurantListsMain] = useState([]);
   const [isOpen, setIsOpen] = useState(false);
   const [priceFilter, setPriceFilter] = useState<options[]>([]);

   useEffect(() => {
     const localStorageItem:any = localStorage.getItem('categories')
     const parsedData = JSON.parse(localStorageItem)
     console.log("Checking the localStorgae", parsedData)
     setRestaurantLists(parsedData)
     setRestaurantListsMain(parsedData)
    //handleRestaurantListingAPI()
   }, [])

   useEffect(() => {
    console.log("Checking the open state", isOpen, priceFilter);
    if(isOpen || priceFilter.length > 0){
      handleClientFiltering()
    }

   }, [isOpen, priceFilter]);

   const handleClientFiltering = () => {
     console.log("Checking the price",priceFilter);
     let filterValues;
     let myArrayFiltered;

     if(!isOpen && priceFilter.length <= 0){
      return setRestaurantLists(restaurantListsMain)
     }

     if(isOpen){
      filterValues = restaurantListsMain.filter((val:any) => {
        return val.is_closed === !isOpen;
      })
      setRestaurantLists(filterValues);
     }

     if(priceFilter.length > 0){
      myArrayFiltered = (filterValues || restaurantListsMain).filter((el:any) => {
        return priceFilter.some((f) => {
          if(f.value === "All") {
            return f.value !== el.price;
          } else {
            return f.value === el.price
          }
         
        });
      });
      setRestaurantLists(myArrayFiltered);
     }
      
   }

   const handleRestaurantListingAPI = async () => {
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
           localStorage.setItem('categories', JSON.stringify(data?.businesses))
         setRestaurantLists(data?.businesses)
         setRestaurantListsMain(data?.businesses)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    return(
       <div className='mainContainer'>
          <Header />
          <hr className='main-hr-line' />
          <Filter setIsOpen={setIsOpen} isOpen={isOpen} priceFilter={priceFilter} setPriceFilter={setPriceFilter} setRestaurantLists={setRestaurantLists} restaurantListsMain={restaurantListsMain}  />
          <hr className='main-hr-line' />
          <Categories restaurantLists={restaurantLists} />
       </div>
    );
};

export default Main;