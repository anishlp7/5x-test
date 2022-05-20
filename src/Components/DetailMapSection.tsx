import React from 'react';

const DetailMapSection = () => {
    return(
            <div className="detailSecMapContainer">
                <div className="detailSecMap">
                    <img src="./assets/map.png" alt="map" className="mapStyle" />
                    <img src="./assets/map.png" alt="map" className="imageStyle" />
                    <img src="./assets/map.png" alt="map" className="imageStyle" />
                </div>
                <p className="mapLocation">624 S La Brea Ave Los Angeles, CA 90036</p>
            </div>
    );
};

export default DetailMapSection;