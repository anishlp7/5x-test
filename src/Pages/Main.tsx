import React from 'react';
import Filter from '../Components/Filters';
import Header from '../Components/Header';
import "../Styles/main.scss";

const Main = () => {
    return(
       <div className='mainContainer'>
          <Header />
          <hr className='main-hr-line' />
          <Filter />
          <hr className='main-hr-line' />
       </div>
    );
};

export default Main;