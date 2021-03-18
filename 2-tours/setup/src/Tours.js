import React from 'react';
import Tour from './Tour';
const Tours = ({ data, setData, removeTour }) => {
  return (
    <>
      <div>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
          
        </div>
        
        {data.map((tour) => {
          console.log(tour)
          return <Tour key={tour.id} {...tour}  removeTour={removeTour}/>;
          
        })}

      </div>
    </>
  );
};

export default Tours;
