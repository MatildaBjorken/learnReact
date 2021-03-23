import React, { useState } from 'react';

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };


  return (
    <>
      <article className="single-tour">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <img src={image} />
        <p className="text">{info}
          {isReadMore ? info.slice(0, 0) : info}
          <button onClick={toggleReadMore} >
            {isReadMore ? '...read more' : ' read less'}
          </button>
        </p>
        <button className="delete-btn" onClick={()=> removeTour(id)}>not interested</button>
      </article>
    </>
  );
};

export default Tour;
