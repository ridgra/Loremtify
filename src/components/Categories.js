import React from 'react';

const Categories = ({ categories }) => {
  return (
    <>
      <h2>recommendations</h2>
      {categories.map((category, idx) => (
        <span key={idx} className="mr-2">
          {category}
        </span>
      ))}
    </>
  );
};

export default Categories;
