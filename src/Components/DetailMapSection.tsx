import React from 'react';

type mapLocation = {
    location: locationProps,
    image_url: string
}

type locationProps = {
    address1:string,
    city: string,
    state: string,
    zip_code: string
}

const DetailMapSection = ({location, image_url}:mapLocation) => {
    return(
            <div className="detailSecMapContainer">
                <div className="detailSecMap">
                    <img src="/assets/map.png" alt="map" className="mapStyle" />
                    <img src={image_url} alt="map" className="imageStyle" />
                    <img src={image_url} alt="map" className="imageStyle" />
                </div>
                <p className="mapLocation">{`${location.address1}, ${location.city}, ${location.state} ${location.zip_code}`}</p>
            </div>
    );
};

export default DetailMapSection;