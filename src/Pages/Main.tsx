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
   const [priceFilter, setPriceFilter] = useState([]);
   const [categoriesList, setCategoriesList] = useState([]);
   const [catogoryFilter, setCategoryFilter] = useState<string[]>([]);
   const [initialLoad, setinitialLoad] = useState<Boolean>(true);

   useEffect(() => {
    // const localStorageItem:any = localStorage.getItem('categories')
    // const parsedData = JSON.parse(localStorageItem)
    // console.log("Checking the localStorgae", parsedData)
    //  setRestaurantLists(parsedData)
    //  setRestaurantListsMain(parsedData)
    //handleRestaurantListingAPI()
    //handleCategoriesListingAPI()
   }, []);

   const handleClearFilter = () => {
     if(catogoryFilter.length > 0) {
      handleRestaurantListingAPI();
      setIsOpen(false);
      setPriceFilter([]);
      setCategoryFilter([]);
     } else {
      setIsOpen(false);
      setPriceFilter([])
      setRestaurantLists?.(restaurantListsMain)
     }
     
   }

   useEffect(() => {
    if((isOpen || priceFilter.length > 0) && catogoryFilter.length <= 0){
      console.log("Testing the client filter", isOpen, priceFilter)
      handleClientFiltering()
    } else if(catogoryFilter.length > 0){
      console.log("Testing the category filter", catogoryFilter);
      let categoryFIlterValue:string;
      if(catogoryFilter.includes('All')) {
        categoryFIlterValue = ''
      } else {
        categoryFIlterValue = catogoryFilter.toString();
      }
      handleCategoryBasedListingAPI(categoryFIlterValue);
    } else if(initialLoad){
      console.log("Initializeing the useEffect");
      handleRestaurantListingAPI();
      handleCategoriesListingAPI();
      setinitialLoad(false);
    }

   }, [isOpen, priceFilter, catogoryFilter]);

   const handleClientFiltering = () => {
     let filterValues;
     let myArrayFiltered;
      console.log("Checking the values", priceFilter)
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
          if(f === "All") {
            return f !== el.price;
          } else {
            return f === el.price
          }
         
        });
      });
      setRestaurantLists(myArrayFiltered);
     }
      
   }

   const handleCategoryBasedListingAPI = async (categoryValue: string) => {
    let response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=37.786882&longitude=-122.399972&location=Las Vegas&categories=${categoryValue}`,
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

   const handleRestaurantListingAPI = async () => {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=37.786882&longitude=-122.399972&location=Las Vegas`,
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

    const handleCategoriesListingAPI = async () => {
      let response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/categories`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer 7vrWaGQ5iXEQRR-1J5BiJC41KyuhMSAyc_k_exSRbg_s47HGVEWNGl6kfI27rL_vK59-AI--au8ET5XWyp4h5Hz9_nkEwToSUF2F_AjlVDeJ5a2nPFCCbkf9tIaGYnYx`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Chekcing the log data by....", data);
          const filteredData = data.categories.filter((val:any) => {
            return val.parent_aliases[0] === "restaurants"
          })
          console.log("Checking the filters", filteredData)
          setCategoriesList(filteredData)
           localStorage.setItem('categoriesList', JSON.stringify(filteredData))
         
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }


    return(
       <div className='mainContainer'>
          <Header />
          <hr className='main-hr-line' />
          <Filter setIsOpen={setIsOpen} isOpen={isOpen} priceFilter={priceFilter} setPriceFilter={setPriceFilter} setCategoryFilter={setCategoryFilter} categoryFilter={catogoryFilter} categoriesList={categoriesList} handleClearFilter={handleClearFilter}  />
          <hr className='main-hr-line' />
          <Categories restaurantLists={restaurantLists} />
       </div>
    );
};

export default Main;