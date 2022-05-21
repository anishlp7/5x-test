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
   const [priceFilter, setPriceFilter] = useState<string[]>([]);
   const [categoriesList, setCategoriesList] = useState([]);
   const [catogoryFilter, setCategoryFilter] = useState<string[]>([]);
   const [initialLoad, setinitialLoad] = useState<Boolean>(true);

   const handleClearFilter = () => {
     if(catogoryFilter.length > 0) {
      handleRestaurantListingAPI();
      setIsOpen(false);
      setPriceFilter([]);
      setCategoryFilter([]);
     } else {
      setIsOpen(false);
      setPriceFilter([])
      setRestaurantLists(restaurantListsMain)
     }
     
   }

   useEffect(() => {
    if((isOpen || priceFilter.length > 0) && catogoryFilter.length <= 0){
      handleClientFiltering(restaurantListsMain)
    } else if(catogoryFilter.length > 0){
      let categoryFIlterValue:string;
      if(catogoryFilter.includes('All')) {
        categoryFIlterValue = ''
      } else {
        categoryFIlterValue = catogoryFilter.toString();
      }
      handleCategoryBasedListingAPI(categoryFIlterValue);
    } else if(initialLoad){
      handleRestaurantListingAPI();
      handleCategoriesListingAPI();
      setinitialLoad(false);
    }

   }, [isOpen, priceFilter, catogoryFilter]);

   const handleClientFiltering = (restaurantListsMain:any) => {
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
      `${process.env.REACT_APP_SEARCH_URL}&categories=${categoryValue}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
         handleClientFiltering(data?.businesses)
       setRestaurantListsMain(data?.businesses)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } 

   const handleRestaurantListingAPI = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_SEARCH_URL}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
         setRestaurantLists(data?.businesses)
         setRestaurantListsMain(data?.businesses)
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    const handleCategoriesListingAPI = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_CATEGORIES}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.categories.filter((val:any) => {
            return val.parent_aliases[0] === "restaurants"
          })
          setCategoriesList(filteredData)
         
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