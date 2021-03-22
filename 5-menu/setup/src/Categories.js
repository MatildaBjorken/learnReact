import React from 'react';

const Categories = ({ filterItem }) => {
  return (
    <div className="btn-container">
      
        <button className="filter-btn" onClick={() => filterItem('breakfast')}>
          breakfast
        </button>
     
    </div>
  );
};

export default Categories;
