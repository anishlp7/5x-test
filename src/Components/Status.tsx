import React from "react";

type Status = {
    size: string,
    isClosed: Boolean,
    fontSize: string
}

const Status = ({isClosed, size, fontSize}:Status) => {
    return(
        <>
        <div style={{height:size, width:size, borderRadius:'50%', background: (isClosed ? '#FF3548' : '#00E8A4 ')}}></div>
        <p style={{fontSize:fontSize}}>{isClosed ? 'Closed' : 'Open Now'}</p> 
        </>
    );
};
export default Status;
